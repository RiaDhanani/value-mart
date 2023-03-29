import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import Modal from './Modal';
import { useUser } from '@auth0/nextjs-auth0';
import { MdSearch } from "@react-icons/all-files/md/MdSearch";
import navbarStyle from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'
import LoginPromptModal from './LoginPromptModal'
import UserMenu from './UserMenu';
import UserItemsModal from './UserItemsModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const Navbar = ({ dispatch }) => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [showItemModal, setShowItemModal] = useState(false);
    const [showLoginPromptModal, setShowLoginPromptModal] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)
    const [search, setSearch] = useState('');
    const [showDelete, setShowDelete] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const { user, error, isLoading } = useUser();

    function handleSearchSubmit (e) {
        e.preventDefault();
        dispatch({ type: 'search', payload: { searchTerm: search } })
        router.push('/browse')
    }

    function handleSearchChange (e) {
        setSearch(e.target.value)
    }

    useEffect(() => {
        dispatch({ type: 'search', payload: { searchTerm: search } })
    }, [search])

    useEffect(() => {
        if(showModal || showLoginPromptModal || showItemModal == true) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [showModal, showLoginPromptModal, showItemModal])

    function handleMenuOpen (e) {
        e.preventDefault();
        setOpenMenu(!openMenu);
    }

    return (
        <nav className={navbarStyle.navBar}>
            <div className={navbarStyle.navBarDiv}>
                <Link href="/">
                    <a className={navbarStyle.navBarAnchor}>
                        <Image 
                            src="/box-icon.svg"
                            height={45}
                            width={45}
                            className={navbarStyle.navBarImage}
                        />
                    </a>
                </Link>
                <form className={navbarStyle.searchContainer} onSubmit={handleSearchSubmit}>
                    <MdSearch className={navbarStyle.searchIcon}/>
                    <input type="text" name="searchbar" className={navbarStyle.search} value={search} onChange={handleSearchChange} placeholder="Search"/>
                </form>
            </div>
            <div className={navbarStyle.navBarDivLarge}>
                {user ? <Button onClick={() => setShowModal(true)} text={'+ Add Item'} navBar={true}/> : <Button onClick={() => setShowLoginPromptModal(true)} text={'+ Add Item'} navBar={true}/>}
                {/* <Button onClick={() => setShowModal(true)} text={'+ Add Item'} navBar={true}/> */}
                { user ?  (
                    <a href="#" onClick={handleMenuOpen} className={navbarStyle.navBarAnchor}>
                        <Image 
                            src={"/user-circle-solid.svg"}
                            height={30}
                            width={30}
                            className={navbarStyle.profileIcon}
                        />
                        <p className={navbarStyle.userText}>{user.name}</p>
                    </a>
                ) : (
                    <a href="#" onClick={handleMenuOpen} className={navbarStyle.navBarAnchor}>
                        <Image 
                            src="/user-circle-solid.svg"
                            height={30}
                            width={30}
                            className={navbarStyle.profileIcon}
                        />
                        <p className={navbarStyle.userText}>Guest</p>
                    </a>
                )}
                { openMenu ? <UserMenu setOpenMenu={setOpenMenu} openMenu={openMenu} setShowItemModal={setShowItemModal}/> : ''}
            </div>
            <LoginPromptModal showLoginPromptModal={showLoginPromptModal} onClose={() => setShowLoginPromptModal(false)}/>
            <Modal show={showModal} onClose={() => setShowModal(false)}/>
            <UserItemsModal show={showItemModal} onClose={() => setShowItemModal(false)} setItemToDelete={setItemToDelete} setShowDelete={setShowDelete}/>
            <DeleteConfirmationModal setItemToDelete={setItemToDelete} itemToDelete={itemToDelete} showDelete={showDelete} onClose={() => setShowDelete(false)} setShowDelete={setShowDelete}/>
        </nav>
    )
}

export default Navbar
