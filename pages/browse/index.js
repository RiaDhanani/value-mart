import {  useContext } from 'react'
import { FilterContext } from '../../components/NestedLayout'
import ItemList from '../../components/ItemList'
import Layout from '../../components/Layout'
import NestedLayout from '../../components/NestedLayout'
import browseStyle from '../../styles/Browse.module.css'
import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head'


const Browse = () => {
  const { isLoading } = useUser();
    const filteredItems = useContext(FilterContext)

    if (isLoading) {
      return (
        <>
          <Head>
            <title>Browse | ValueMart</title>
            <meta name="keywords" content="reselling items, best out of waste, university"></meta>
          </Head>
          <h1 style={{ width: '100%', marginTop: '20px', textAlign: 'center', color:'#d5d5d5'}}>Loading...</h1>
        </>
      )
    }

    return (
        <>
          <Head>
              <title>Browse | ValueMart</title>
              <meta name="keywords" content="reselling items, best out of waste, university"></meta>
          </Head>
          <div className={browseStyle.items}>
            <ItemList filteredItems={filteredItems}/>
          </div>
        </>
    )
}

Browse.getLayout = function getLayout(page) {
    return (
      <Layout>
        <NestedLayout>{page}</NestedLayout>
      </Layout>
    )
  }

export default Browse
