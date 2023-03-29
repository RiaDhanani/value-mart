import LandingPageStyles from '../styles/LandingPage.module.css'

const LandingPageDisplay = () => {
    return (
        <div className={LandingPageStyles.landingPageDisplay}>
            <div className={LandingPageStyles.landingPageDisplayText}>
                <h1 className={LandingPageStyles.heading}>TRASH OR TREASURE</h1>
                <p>Moving? Spring cleaning? Just got too much stuff? Don't throw it away, someone out there might be looking for it!</p>
                <p>One man's trash is another man's treasure.</p>
            </div>
        </div>
    )
}

export default LandingPageDisplay
