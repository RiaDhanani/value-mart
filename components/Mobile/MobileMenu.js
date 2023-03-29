import navbarStyle from '../../styles/Mobile/MobileNavbar.module.css'
import { MdAdd } from "@react-icons/all-files/md/MdAdd";
import { BiLogIn } from "@react-icons/all-files/bi/BiLogIn";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
import { BiGift } from "@react-icons/all-files/bi/BiGift";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { useUser } from '@auth0/nextjs-auth0';

const MobileMenu = ({ setOpenMenu, openMenu, openModal, setShowItemModal }) => {
    const { user } = useUser();

    function handleOpenItemModal () {
        setShowItemModal(true);
        setOpenMenu(false);
    }

    return (
        <div onClick={() => setOpenMenu(!openMenu)} className={`${navbarStyle.menuOverlay} ${ openMenu ? `` : navbarStyle.hidden }`}>
            <div className={navbarStyle.menu}>
                {user ? 
                    <div className={`${navbarStyle.menuItem}`}>
                        <FaUser />
                        <p>Logged in as <span className={navbarStyle.username}>{user.name}</span></p>
                    </div> : ''
                }
                <div className={`${navbarStyle.menuItem} ${navbarStyle.add}`} onClick={openModal}>
                    <MdAdd className={navbarStyle.subMenuIcon}/>
                    <p>Add Items</p>
                </div>
                {user ?
                    <>
                        <div className={`${navbarStyle.menuItem} ${navbarStyle.add}`} onClick={handleOpenItemModal}>
                            <BiGift className={navbarStyle.subMenuIcon}/>
                            <p>My Items</p>
                        </div>                 
                        <a href="/api/auth/logout">
                            <div className={navbarStyle.menuItem}>
                                <BiLogOut className={navbarStyle.subMenuIcon}/>
                                <p>Log out</p>
                            </div>
                        </a>
                    </> : 
                    <a href="/api/auth/login">
                        <div className={navbarStyle.menuItem}>
                            <BiLogIn className={navbarStyle.subMenuIcon}/>
                            <p>Log in / Register</p>
                        </div>
                    </a>
                }
            </div>
        </div>
    )
}

export default MobileMenu
