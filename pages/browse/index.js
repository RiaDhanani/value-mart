import {  useContext } from 'react'
import { FilterContext } from '../../components/NestedLayout'
import ItemList from '../../components/ItemList'
import Layout from '../../components/Layout'
import NestedLayout from '../../components/NestedLayout'
import browseStyle from '../../styles/Browse.module.css'
import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head'


const Browse = () => {
  const { user, error, isLoading } = useUser();
    const filteredItems = useContext(FilterContext)

    if (isLoading) {
      return (
        <>
          <Head>
            <title>Browse | Trash or Treasure</title>
          </Head>
          <h1 style={{textAlign: 'center'}}>Loading...</h1>
        </>
      )
    }

    return (
        <>
          <Head>
              <title>Browse | Trash or Treasure</title>
              <meta name="keywords" content="Sri Lanka, free, used, trinkets, random, Trash or Treasure, trash, treasure"></meta>
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
