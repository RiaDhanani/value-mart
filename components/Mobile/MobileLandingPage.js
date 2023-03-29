import { useState } from 'react'
import Modal from '../Modal';
import Link from 'next/link'
import Button from '../Button'
import { useUser } from '@auth0/nextjs-auth0';
import LandingPageStyles from "../../styles/Mobile/MobileLandingPage.module.css"
import LoginPromptModal from '../LoginPromptModal'

const MobileLandingPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showLoginPromptModal, setShowLoginPromptModal] = useState(false);
    const { user } = useUser();

    return (
        <div className={LandingPageStyles.landingPageDisplay}>
            
            <div className={LandingPageStyles.landingPageDisplayText}>
                <h1 className={LandingPageStyles.heading}>TRASH <span className={LandingPageStyles.or}>OR</span> TREASURE</h1>
                
                <p>{`Moving? Spring cleaning? Just got too much stuff? Don't throw it away, someone out there might be looking for it!`}</p>
                <p>{`One man's trash is another man's treasure.`}</p>
            </div>
            <div className={LandingPageStyles.buttons}>
                {user ? <Button text={'List Your Trash'} onClick={() => setShowModal(true)}/> : <Button text={'List Your Trash'} onClick={() => setShowLoginPromptModal(true)}/>}
                <Link href="/browse"><a><Button text={'Browse Treasures'}/></a></Link>
                <Modal show={showModal} onClose={() => setShowModal(false)}/>
                {user ? <p className={LandingPageStyles.loginText}>Logged in as {user.name} <a href="/api/auth/logout" className={LandingPageStyles.login}>Log out</a> </p> : <a href="/api/auth/login" className={LandingPageStyles.login}>Log in/Register</a>}
            </div>
            <div className={LandingPageStyles.overlay}></div>
            <LoginPromptModal showLoginPromptModal={showLoginPromptModal} onClose={() => setShowLoginPromptModal(false)}/>
        </div>
    )
}

export default MobileLandingPage
