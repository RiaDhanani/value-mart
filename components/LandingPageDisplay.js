import LandingPageStyles from '../styles/LandingPage.module.css'

const LandingPageDisplay = () => {
    return (
        <div className={LandingPageStyles.landingPageDisplay}>
            <div className={LandingPageStyles.overlay}></div>
            <div className={LandingPageStyles.landingPageDisplayText}>
                <h4 className={LandingPageStyles.heading}>ValueMart</h4>
                <p>{`Find what you need, sell what you don't.`}</p>
                <p>{`Holiday cleaning? Moving out? or just have too much stuff?\nHere's the ultimate online marketplace for all your needs!`}</p>
                
            </div>
        </div>
    )
}

export default LandingPageDisplay
