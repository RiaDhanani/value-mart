import Layout from '../../../components/Layout'
import NestedLayout from '../../../components/NestedLayout'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import itemStyle from '../../../styles/Item.module.css'
import { useItems } from '../../../components/ItemContext'
import { FiArrowLeftCircle } from "@react-icons/all-files/fi/FiArrowLeftCircle";
import { MdDescription } from "@react-icons/all-files/md/MdDescription";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { MdPhoneIphone } from "@react-icons/all-files/md/MdPhoneIphone";
import { MdDeleteForever } from "@react-icons/all-files/md/MdDeleteForever";
import useMediaQuery from '../../../hooks/MediaQuery'
import { useUser } from '@auth0/nextjs-auth0';
import DeleteConfirmationModal from '../../../components/DeleteConfirmationModal'
import { SRLWrapper } from "simple-react-lightbox";
import Head from 'next/head'

const Item = ({ slug }) => {
  const isBreakPoint = useMediaQuery(799)
  const { getSingleItem } = useItems()
  const item = getSingleItem(slug)
  const router = useRouter()
  const { user } = useUser();
  const [showDelete, setShowDelete] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item) {
      setLoading(false)
    }
  },[item])

  function goBack (e) {
    e.preventDefault();
    router.push('/browse')
  }

  function deleteConfirm (id) {
    setItemToDelete(id);
    setShowDelete(true);
  }

  function generateContact (contactObject, children) {
    switch (Object.entries(contactObject)[0][0]) {
      case 'Phone':
        return <a href={`tel:${Object.entries(contactObject)[0][1]}`}>{children}</a>
      case 'WhatsApp':
          return <a href={`https://wa.me/${Object.entries(contactObject)[0][1]}`} target="_blank" rel="noopener noreferrer">{children}</a>
      case 'Instagram':
        return <a href={`https://www.instagram.com/${Object.entries(contactObject)[0][1]}`} target="_blank" rel="noopener noreferrer">{children}</a>
      case 'Email':
        return <a href={`mailto:${Object.entries(contactObject)[0][1]}`} target="_blank" rel="noopener noreferrer">{children}</a>
      case 'Twitter':
        return <a href={`https://twitter.com/${Object.entries(contactObject)[0][1]}`} target="_blank" rel="noopener noreferrer">{children}</a>
      case 'Facebook':
        return <a href={`https://www.facebook.com/search/top?q=${Object.entries(contactObject)[0][1]}`} target="_blank" rel="noopener noreferrer">{children}</a>
      default:
        return children
    }
  }

  const options = {
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.8)',
      iconColor: 'rgba(255, 255, 255, 0.8)',
      iconPadding: '10px',
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
      size: '40px'
    },
    thumbnails: {
      showThumbnails: false
    },
  }

  if (loading == true) {
    return (
      <div className={itemStyle.container}>
        <Head>
          <title>Not Found | Trash or Treasure</title>
        </Head>
        <div className={itemStyle.back}>
          <a href="#" onClick={goBack}><FiArrowLeftCircle /></a>
        </div>
        <h1>Item not found.</h1>
      </div>
      
    )
  } else {
    return (
      <div className={itemStyle.container}>
          <Head>
              <title>{item.name} | Trash or Treasure</title>
              <meta name="keywords" content={`Sri Lanka, free, used, trinkets, random, Trash or Treasure, trash, treasure, ${item.name}, ${item.location}`}></meta>
          </Head>
          <div className={itemStyle.back}>
            <a href="#" onClick={goBack}><FiArrowLeftCircle /></a>
            {user ? user.sub === item.user ? <button onClick={() => deleteConfirm(item.id)}><MdDeleteForever /></button> : '' : ''}
          </div>
          <div className={itemStyle.itemDetails}>
          { isBreakPoint ? <div className={itemStyle.name}><h1>{item.name}</h1></div> : ''}
            
            <div className={itemStyle.imageContainer}>
              <SRLWrapper options={options}>
                <Image 
                  src={item.img}
                  layout="fill"
                  objectFit="cover"
                  className={itemStyle.image}
                /> 
              </SRLWrapper>
            </div>
            <div className={itemStyle.info}>
              { isBreakPoint ? '' : <div className={itemStyle.name}><h1>{item.name}</h1></div>}
              <div className={itemStyle.infoText}>
                <div className={itemStyle.individualInfo}>
                  <div className={itemStyle.individualInfoIcon}>
                    <MdLocationOn />
                  </div>
                  <p><span className={itemStyle.bold}>Location:&#160;</span> {item.location}</p>
                </div>
                <div className={itemStyle.individualInfo}>
                  <div className={itemStyle.individualInfoIcon}>
                    <MdPhoneIphone />
                  </div>
                  {generateContact(item.contact, <p className={itemStyle.contact}><span className={itemStyle.bold}>{Object.entries(item.contact)[0][0]}:&#160;</span> {Object.entries(item.contact)[0][1]}</p>)}
                </div>
                <div className={itemStyle.individualInfo}>
                  <div className={itemStyle.individualInfoIcon}>
                    <MdDescription />
                  </div>
                  <p><span className={itemStyle.bold}>Description:&#160;</span> {item.description}</p>
                </div>
                <div className={itemStyle.condition}>
                  <p>{item.used}</p>
                  <p>{item.broken}</p>
                </div>
              </div>
            </div>
          </div>
          <DeleteConfirmationModal setItemToDelete={setItemToDelete} itemToDelete={itemToDelete} showDelete={showDelete} onClose={() => setShowDelete(false)} setShowDelete={setShowDelete}/>
      </div>
    )
  }
}

export const getServerSideProps = async (context) => {
  const slug = await context.params.slug
  return {
    props: { slug }
  }
}

Item.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}

export default Item
