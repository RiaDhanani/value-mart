import menuStyle from '../styles/UserMenu.module.css'
import { useUser } from '@auth0/nextjs-auth0';
import { BiLogIn } from "@react-icons/all-files/bi/BiLogIn";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
import { BiGift } from "@react-icons/all-files/bi/BiGift";

const UserMenu = ({ openMenu, setOpenMenu, setShowItemModal }) => {
    const { user } = useUser();

    function handleOpenItemModal (e) {
        e.preventDefault();
        setShowItemModal(true);
        setOpenMenu(false);
    }

    return (
        <div onClick={() => setOpenMenu(!openMenu)} className={`${menuStyle.menuOverlay} ${ openMenu ? `` : `${menuStyle.hidden}` }`}>
            <div className={menuStyle.menu}>
            {user ?
                <>
                <a href="#" onClick={handleOpenItemModal}>
                    <div className={menuStyle.menuItem}>
                        <BiGift className={menuStyle.subMenuIcon}/>
                        <p>My Items</p>
                    </div>
                </a>                 
                <a href="/api/auth/logout">
                    <div className={menuStyle.menuItem}>
                        <BiLogOut className={menuStyle.subMenuIcon}/>
                        <p>Log out</p>
                    </div>
                </a>
                </> 
                : 
                <a href="/api/auth/login">
                    <div className={menuStyle.menuItem}>
                        <BiLogIn className={menuStyle.subMenuIcon}/>
                        <p>Log in / Register</p>
                    </div>
                </a>
            }
            </div>
        </div>
    )
}

export default UserMenu
