import { useState } from 'react'
import Modal from './Modal';
import Link from 'next/link'
import LandingPageStyles from '../styles/LandingPage.module.css'
import { useUser } from '@auth0/nextjs-auth0';
import Button from './Button'
import LoginPromptModal from './LoginPromptModal'
import UserItemsModal from './UserItemsModal';

const LandingPageSidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const [showLoginPromptModal, setShowLoginPromptModal] = useState(false);
    const [showItemModal, setShowItemModal] = useState(false);
    const { user } = useUser();

    return (
        <div className={LandingPageStyles.landingPageSidebar}>
            <div className={LandingPageStyles.landingPageSidebarContent}>
                <p>What would you like to do today?</p>
                {user ? <Button text={'View Uploaded Items'} onClick={() => setShowItemModal(true)}/> : <Button text={'View Uploaded Items'} onClick={() => setShowLoginPromptModal(true)}/>}
                <Link legacyBehavior href="/browse"><a><Button text={'Browse Marketplace'}/></a></Link>
                <UserItemsModal show={showItemModal} onClose={() => setShowItemModal(false)} setItemToDelete={('')} setShowDelete={('')}/>
                {user ? <p className={LandingPageStyles.loginText}>Logged in as {user.name} <a href="/api/auth/logout" className={LandingPageStyles.login}>Log out</a> </p> : <a href="/api/auth/login" className={LandingPageStyles.login}>Log in/Register</a>}
            </div>
            <LoginPromptModal showLoginPromptModal={showLoginPromptModal} onClose={() => setShowLoginPromptModal(false)}/>
        </div>
    )
}

export default LandingPageSidebar
