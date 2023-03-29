import { useState } from 'react'
import Modal from './Modal';
import AddItem from './AddItem'
import Link from 'next/link'
import LandingPageStyles from '../styles/LandingPage.module.css'
import { useUser } from '@auth0/nextjs-auth0';
import Button from './Button'
import LoginPromptModal from './LoginPromptModal'

const LandingPageSidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const [showLoginPromptModal, setShowLoginPromptModal] = useState(false);
    const { user, error, isLoading } = useUser();

    return (
        <div className={LandingPageStyles.landingPageSidebar}>
            <div className={LandingPageStyles.landingPageSidebarContent}>
                <p>What would you like to do today?</p>
                {user ? <Button text={'List Your Trash'} onClick={() => setShowModal(true)}/> : <Button text={'List Your Trash'} onClick={() => setShowLoginPromptModal(true)}/>}
                <Link href="/browse"><a><Button text={'Browse Treasures'}/></a></Link>
                <Modal show={showModal} onClose={() => setShowModal(false)}/>
                {user ? <p className={LandingPageStyles.loginText}>Logged in as {user.name} <a href="/api/auth/logout" className={LandingPageStyles.login}>Log out</a> </p> : <a href="/api/auth/login" className={LandingPageStyles.login}>Log in/Register</a>}
            </div>
            <LoginPromptModal showLoginPromptModal={showLoginPromptModal} onClose={() => setShowLoginPromptModal(false)}/>
        </div>
    )
}

export default LandingPageSidebar
