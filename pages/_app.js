import Layout from '../components/Layout'
import { ItemContextProvider } from '../components/ItemContext'
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/globals.css'
import "../styles/nprogress.css";
import SimpleReactLightbox from 'simple-react-lightbox'
import NProgress from "nprogress";
import Router from 'next/router'

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <UserProvider>
      <ItemContextProvider>
        <SimpleReactLightbox>
          {getLayout(<Component {...pageProps} />)}
        </SimpleReactLightbox>
      </ItemContextProvider>
    </UserProvider>
    )
}

export default MyApp
