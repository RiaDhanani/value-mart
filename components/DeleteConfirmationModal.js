import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import modalStyle from '../styles/DeleteModal.module.css'
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { useItems } from './ItemContext'
import { useRouter } from 'next/router'

const DeleteConfirmationModal = ({ showDelete, onClose, itemToDelete, setItemToDelete, setShowDelete }) => {
    const router = useRouter()
    const [isBrowser, setIsBrowser] = useState(false);
    const { deleteItem } = useItems()

    useEffect (() => {
        setIsBrowser(true);
    }, [])

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
        setItemToDelete(null)
    };

    async function deleteCurrentItem (id) {
        setShowDelete(false);
        if (router.query.slug === id) {
            await router.push('/browse');
        }
        deleteItem(id);
    }

    const modalContent = showDelete ? (
        <div className={modalStyle.overlay}>
            <div className={modalStyle.modal}>
                <div className={modalStyle.header}>
                    <a href="#" onClick={handleClose}><MdClose className={modalStyle.closeBtn}/></a>
                </div>
                <div className={modalStyle.body}>
                    <p>Are you sure you want to delete the item?</p>
                    <div className={modalStyle.buttons}>
                        <button className={modalStyle.cancelBtn} onClick={handleClose}>Cancel</button>
                        <button className={modalStyle.deleteBtn} onClick={() => deleteCurrentItem(itemToDelete)}>Delete</button>
                    </div>
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

export default DeleteConfirmationModal
