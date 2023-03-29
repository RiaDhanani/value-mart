import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { useRouter } from 'next/router'
import { useItems } from './ItemContext'
import { useUser } from '@auth0/nextjs-auth0';
import { MdClose } from "@react-icons/all-files/md/MdClose";
import modalStyle from '../styles/UserItemsModal.module.css'

const UserItemsModal = ({ show, onClose, setItemToDelete, setShowDelete }) => {
    const { items } = useItems();
    const { user, error, isLoading } = useUser();
    const [isBrowser, setIsBrowser] = useState(false);
    const [userItems, setUserItems] = useState([]);
    const router = useRouter();

    useEffect (() => {
        setIsBrowser(true);
    }, [])

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    };

    function viewItem (slug) {
        onClose();
        if (router.query !== slug) {
            router.push(`/browse/${slug}`)
        }  
    }

    useEffect(() => {
        if(user) {
            setUserItems(items.filter(item => item.user === user.sub));
        }
    }, [user, items])

    function deleteConfirm (id) {
        setItemToDelete(id);
        setShowDelete(true);
    }

    const modalContent = show ? (
        <div className={modalStyle.overlay}>
            <div className={modalStyle.modal}>
                <div className={modalStyle.header}>
                    <a href="#" onClick={handleClose}><MdClose className={modalStyle.closeBtn}/></a>
                </div>
                <div className={modalStyle.body}>
                    
                    {userItems.length > 0 ? 
                    <>
                    <h1 className={modalStyle.title}>My Items</h1>
                    {userItems.map(item => (
                        <div className={modalStyle.singleItem} key={item.id}>
                            <div className={modalStyle.itemInfo}>
                                <p>{item.name}</p>
                            </div>
                            <div className={modalStyle.buttons}>
                                <button className={modalStyle.viewBtn} onClick={() => viewItem(item.id)}>View</button>
                                <button className={modalStyle.deleteBtn} onClick={() => deleteConfirm(item.id)}>Delete</button>
                            </div>
                        </div>
                    ))} </> : <h1 className={modalStyle.title}>No items added yet.</h1>}
                </div>
            </div>
        </div>
    ) : null;

    if(isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        )
    } else {
        return null;
    }
}

export default UserItemsModal
