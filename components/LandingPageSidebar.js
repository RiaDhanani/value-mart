import Link from 'next/link'
import LandingPageStyles from '../styles/LandingPage.module.css'
import Button from './Button'
import Image from 'next/image'

const LandingPageSidebar = () => {
    return (
        <div className={LandingPageStyles.landingPageSidebar}>
            {/* <Image 
                src="/box-icon.svg"
                height={200}
                width={200}
                className={LandingPageStyles.boxImage}
            /> */}
            <div className={LandingPageStyles.landingPageSidebarContent}>
                <p>What would you like to do today?</p>
                <Link href="/addItem"><a><Button text={'List Your Trash'}/></a></Link>
                <Link href="/browse"><a><Button text={'Browse Treasures'}/></a></Link>
                <a>Login/Register</a>
            </div>

        </div>
    )
}

export default LandingPageSidebar
