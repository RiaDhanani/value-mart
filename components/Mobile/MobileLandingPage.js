import { useState } from 'react'
import Modal from '../Modal';
import Link from 'next/link'
import Button from '../Button'
import { useUser } from '@auth0/nextjs-auth0';
import LandingPageStyles from "../../styles/Mobile/MobileLandingPage.module.css"
import LoginPromptModal from '../LoginPromptModal'
import UserItemsModal from '../UserItemsModal';

const MobileLandingPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showLoginPromptModal, setShowLoginPromptModal] = useState(false);
    const [showItemModal, setShowItemModal] = useState(false);
    const { user } = useUser();

    return (
        <div className={LandingPageStyles.landingPageDisplay}>
            
            <div className={LandingPageStyles.landingPageDisplayText}>
            <h4 className={LandingPageStyles.heading}>ValueMart</h4>
                <p>{`Find what you need, sell what you don't.`}</p>
                <p>{`Holiday cleaning? Moving out? or just have too much stuff?\nHere's the ultimate online marketplace for all your needs!`}</p>
            </div>
            <div className={LandingPageStyles.buttons}>
                {user ? <Button text={'View Uploaded Items'} onClick={() => setShowModal(true)}/> : <Button text={'View Uploaded Items'} onClick={() => setShowLoginPromptModal(true)}/>}
                <Link legacyBehavior href="/browse"><a><Button text={'Browse Marketplace'}/></a></Link>
                <UserItemsModal show={showItemModal} onClose={() => setShowItemModal(false)} setItemToDelete={('')} setShowDelete={('')}/>
                <Modal show={showModal} onClose={() => setShowModal(false)}/>
                {user ? <p className={LandingPageStyles.loginText}>Logged in as {user.name} <a href="/api/auth/logout" className={LandingPageStyles.login}>Log out</a> </p> : <a href="/api/auth/login" className={LandingPageStyles.login}>Log in/Register</a>}
            </div>
            <div className={LandingPageStyles.overlay}></div>
            <LoginPromptModal showLoginPromptModal={showLoginPromptModal} onClose={() => setShowLoginPromptModal(false)}/>
        </div>
    )
}

export default MobileLandingPage
