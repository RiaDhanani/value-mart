import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Modal from '../Modal';
import LoginPromptModal from '../LoginPromptModal'
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";
import { MdSearch } from "@react-icons/all-files/md/MdSearch";
import { MdMenu } from "@react-icons/all-files/md/MdMenu";
import navbarStyle from '../../styles/Mobile/MobileNavbar.module.css'
import { useRouter } from 'next/router'
import MobileMenu from './MobileMenu';
import { useUser } from '@auth0/nextjs-auth0';
import UserItemsModal from '../UserItemsModal';
import DeleteConfirmationModal from '../DeleteConfirmationModal';

const MobileNavbar = ({ dispatch, setShowFilters, showFilters }) => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [showLoginPromptModal, setShowLoginPromptModal] = useState(false);
    const [search, setSearch] = useState('');
    const [searchBarView, setSearchBarView] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)
    const [showItemModal, setShowItemModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const { user } = useUser();

    function handleSearchSubmit (e) {
        e.preventDefault();
        setSearchBarView(false);
        setShowFilters(false);
        dispatch({ type: 'search', payload: { searchTerm: search } })
        router.push('/browse')
    }

    function handleSearchChange (e) {
        setSearch(e.target.value)
    }

    function openModal () {
        if (user) {
            setShowModal(true);
        } else {
            setShowLoginPromptModal(true)
        } 
        setOpenMenu(false);
    }

    useEffect(() => {
        if(showModal || showLoginPromptModal | showItemModal == true) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [showModal, showLoginPromptModal, showItemModal])

    useEffect(() => {
        dispatch({ type: 'search', payload: { searchTerm: search } })
    }, [search])

    return (
        <nav className={navbarStyle.navBar}>
            <div className={navbarStyle.navBarDivSmall}>
                <Link href="/">
                    <a className={navbarStyle.navBarAnchor}>
                        <Image 
                            src="/box-icon.svg"
                            height={40}
                            width={40}
                            className={navbarStyle.navBarImage}
                        />
                    </a>
                </Link>
                <button onClick={() => setShowFilters(!showFilters)}>Filter <BiChevronDown className={`${navbarStyle.chevron} ${ showFilters ? `${navbarStyle.rotated}` : `` }`}/></button>
            </div>
            <div className={navbarStyle.navBarDivLarge}>
                <form className={navbarStyle.searchContainer} onSubmit={handleSearchSubmit}>
                    <label htmlFor="searchbar" onClick={() => setSearchBarView(!searchBarView) }><MdSearch className={navbarStyle.searchIcon}/></label>
                    <input type="text" name="searchbar" id="searchbar" className={searchBarView ? `` : `${navbarStyle.hidden}`} value={search} onChange={handleSearchChange} placeholder="Search"/>
                    <div onClick={() => setSearchBarView(!searchBarView)} className={`${navbarStyle.overlay} ${ searchBarView ? `` : `${navbarStyle.hidden}` }`}></div>
                </form>
                <button onClick={() => setOpenMenu(!openMenu)}><MdMenu className={navbarStyle.menuIcon}/></button>
                { openMenu ? <MobileMenu setOpenMenu={setOpenMenu} openMenu={openMenu} openModal={openModal} setShowItemModal={setShowItemModal}/> : ''}
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}/>
            <LoginPromptModal showLoginPromptModal={showLoginPromptModal} onClose={() => setShowLoginPromptModal(false)}/>
            <UserItemsModal show={showItemModal} onClose={() => setShowItemModal(false)} setItemToDelete={setItemToDelete} setShowDelete={setShowDelete}/>
            <DeleteConfirmationModal setItemToDelete={setItemToDelete} itemToDelete={itemToDelete} showDelete={showDelete} onClose={() => setShowDelete(false)} setShowDelete={setShowDelete}/>
        </nav>
    )
}

export default MobileNavbar
