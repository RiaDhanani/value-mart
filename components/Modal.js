import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import modalStyle from '../styles/Modal.module.css'
import { MdClose } from "@react-icons/all-files/md/MdClose";
import AddItem from './AddItem';
import ItemAdded from './ItemAdded';

const Modal = ({ show, onClose, children }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const [addItemDone, setAddItemDone] = useState(false);
    const [addedItem, setAddedItem] = useState({});

    useEffect (() => {
        setIsBrowser(true);
    }, [])

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
        setAddItemDone(false)
    };

    const modalContent = show ? (
        <div className={modalStyle.overlay}>
            <div className={modalStyle.modal}>
                <div className={modalStyle.header}>
                    <a href="#" onClick={handleClose}><MdClose className={modalStyle.closeBtn}/></a>
                </div>
                <div className={modalStyle.body}>
                    {addItemDone ? <ItemAdded addedItem={addedItem} setAddItemDone={setAddItemDone} handleClose={handleClose}/> : <AddItem setAddItemDone={setAddItemDone} setAddedItem={setAddedItem}/>}
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

export default Modal
