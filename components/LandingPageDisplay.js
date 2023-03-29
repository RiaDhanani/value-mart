import LandingPageStyles from '../styles/LandingPage.module.css'

const LandingPageDisplay = () => {
    return (
        <div className={LandingPageStyles.landingPageDisplay}>
            <div className={LandingPageStyles.overlay}></div>
            <div className={LandingPageStyles.landingPageDisplayText}>
                <h1 className={LandingPageStyles.heading}>Trash <span className={LandingPageStyles.or}>or</span> Treasure</h1>
                <div className={LandingPageStyles.separator}></div>
                <p>{`Moving? Spring cleaning? Just got too much stuff?\n Don't throw it away, someone out there might be looking for it!`}</p>
                <p>{`One man's trash is another man's treasure.`}</p>
            </div>
        </div>
    )
}

export default LandingPageDisplay
