import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import modalStyle from '../styles/Modal.module.css'
import { MdClose } from "@react-icons/all-files/md/MdClose";

const Modal = ({ show, onClose, children }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect (() => {
        setIsBrowser(true);
    }, [])

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <div className={modalStyle.overlay}>
            <div className={modalStyle.modal}>
                <div className={modalStyle.header}>
                    <a href="#" onClick={handleClose}><MdClose className={modalStyle.closeBtn}/></a>
                </div>
                <div className={modalStyle.body}>{children}</div>
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
