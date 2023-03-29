import Image from 'next/image'
import Link from 'next/link'
import navbarStyle from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={navbarStyle.navBar}>
            <div className={navbarStyle.navBarDiv}>
                <Link href="/">
                    <a className={navbarStyle.navBarAnchor}>
                        <Image 
                            src="/box-icon.svg"
                            height={50}
                            width={50}
                            className={navbarStyle.navBarImage}
                        />
                    </a>
                </Link>
                <a>Browse</a>
                <form>
                    <input type="text" name="searchbar" />
                </form>
            </div>
            <div className={navbarStyle.navBarDiv}>
                <a>+ Add Item</a>
                <a className={navbarStyle.navBarAnchor}>
                    <Image 
                        src="/user-circle-solid.svg"
                        height={50}
                        width={50}
                        className={navbarStyle.profileIcon}
                        className={navbarStyle.navBarImage}
                    />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
