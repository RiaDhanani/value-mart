import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPageStyles from '../styles/LandingPage.module.css'
import LandingPageDisplay from '../components/LandingPageDisplay'
import LandingPageSidebar from '../components/LandingPageSidebar'

export default function Home() {
  return (
    <div className={LandingPageStyles.landingPage}>
      <LandingPageDisplay />
      <LandingPageSidebar />
    </div>
  )
}
