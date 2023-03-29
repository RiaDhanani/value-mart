import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import Modal from './Modal';
import AddItem from './AddItem'
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";
import { MdSearch } from "@react-icons/all-files/md/MdSearch";
import navbarStyle from './Navbar.module.css'

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

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
                <Link href="/browse"><a className="browse">Browse<BiChevronDown className={navbarStyle.chevron}/></a></Link>
                <div className={navbarStyle.searchContainer}>
                    <MdSearch className={navbarStyle.searchIcon}/>
                    <input type="text" name="searchbar" className={navbarStyle.search}/>
                </div>
            </div>
            <div className={navbarStyle.navBarDiv}>
                <Button onClick={() => setShowModal(true)} text={'+ Add Item'} navBar={true}/>
                <a className={navbarStyle.navBarAnchor}>
                    <Image 
                        src="/user-circle-solid.svg"
                        height={40}
                        width={40}
                        className={navbarStyle.profileIcon}
                    />
                </a>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <AddItem />
            </Modal>
        </nav>
    )
}

export default Navbar
