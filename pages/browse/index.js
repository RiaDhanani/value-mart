import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import ItemList from '../../components/ItemList'
import browseStyle from '../../styles/Browse.module.css'

const Browse = () => {
    const [items, setItems] = useState([
        {id: 1, name: 'Apple Earphones', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633503659/TrashOrTreasure/ItemImages/image0_bsrlx6.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { Phone: '0777123456', Instagram: '@chknrs' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."}, 
        {id: 2, name: 'Xbox Controller', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633503650/TrashOrTreasure/ItemImages/IMG_5159_pycavk.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { Phone: '0777123456' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 3, name: 'Standing Fan', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633504706/TrashOrTreasure/ItemImages/image0_amj6ro.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { Phone: '0777123456', Instagram: '@chknrs', Email: 'prnkdslv@gmail.com' },
        used: 'Used over 1 year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        ])

        const [filters, setFilters] = useState({used: { Unused: true, UsedLessThanOneMonth: true, UsedFewMonths: true, UsedMoreThanOneYear: true },
            broken: { Unbroken: true, PartiallyBroken: true, CompletelyBroken: true },
            tags: { Electronics: true, Books: true, CDs: true, Household: true, Furniture: true, Other: true },
        });

    // const [used, setUsed] = useState([]);
    // const [broken, setBroken] = useState([]);
    // const [tags, setTags] = useState([]);


    return (
        <main className={browseStyle.main}>
            <Navbar />
            <div className={browseStyle.browse}>
                <Sidebar filters={filters} setFilters={setFilters}/>
                <div className={browseStyle.items}>
                    <ItemList items={items}/>
                </div>
            </div>
        </main>
    )
}

export default Browse
