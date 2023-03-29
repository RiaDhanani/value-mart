import { useState } from 'react'
import Navbar from '../../components/Navbar'
import ItemCard from '../../components/ItemCard'
import browseStyle from '../../styles/Browse.module.css'

const index = () => {
    const [items, setItems] = useState([
        {id: 1, name: 'Apple Earphones', img:'image0.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { phone: '0777123456', instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."}, 
        {id: 2, name: 'Xbox Controller', img:'IMG_5159.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { phone: '0777123456', instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 3, name: 'Apple Earphones', img:'image0.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { phone: '0777123456', instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 4, name: 'Apple Earphones', img:'image0.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { phone: '0777123456', instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."}, 
        {id: 5, name: 'Xbox Controller', img:'IMG_5159.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { phone: '0777123456', instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 6, name: 'Apple Earphones', img:'image0.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { phone: '0777123456', instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 7, name: 'Apple Earphones', img:'image0.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { phone: '0777123456', instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."}, 
        {id: 8, name: 'Xbox Controller', img:'IMG_5159.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { phone: '0777123456', instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 9, name: 'Apple Earphones', img:'image0.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { phone: '0777123456', instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 10, name: 'Apple Earphones', img:'image0.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { phone: '0777123456', instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."}, 
        {id: 11, name: 'Xbox Controller', img:'IMG_5159.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { phone: '0777123456', instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 12, name: 'Apple Earphones', img:'image0.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { phone: '0777123456', instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},])

    return (
        <main className={browseStyle.main}>
            <Navbar />
            <div className={browseStyle.browse}>
                <aside className={browseStyle.sideBar}>
                    <h2>sidebar</h2>
                </aside>
                <div className={browseStyle.items}>
                    <h2 className={browseStyle.itemTitle}>{`Recent (${items.length})`}</h2>
                    <div className={browseStyle.itemList}>
                        {items.map(item => (
                            <ItemCard item={item} key={item.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default index
