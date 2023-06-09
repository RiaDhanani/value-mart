import LandingPageStyles from '../styles/LandingPage.module.css'
import LandingPageDisplay from '../components/LandingPageDisplay'
import LandingPageSidebar from '../components/LandingPageSidebar'
import MobileLandingPage from '../components/Mobile/MobileLandingPage'
import useMediaQuery from '../hooks/MediaQuery'
import Head from 'next/head'

export default function Home() {
  const isBreakPoint = useMediaQuery(799)

  return (
    <>
    <Head>
      <title>Home | ValueMart</title>
      <meta name="keywords" content="reselling items, best out of waste, university"></meta>
    </Head>
      { isBreakPoint ? (
        <div className={LandingPageStyles.landingPage}>
          <MobileLandingPage />
        </div>
      ) : (
        <div className={LandingPageStyles.landingPage}>
          <LandingPageDisplay />
          <LandingPageSidebar />
        </div>
      )
      }
    </>
  )
}