import { useState, useEffect, useReducer } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import ItemList from '../../components/ItemList'
import browseStyle from '../../styles/Browse.module.css'

const Browse = () => {
    const [items, setItems] = useState([
        {id: 1, name: 'Apple Earphones', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633503659/TrashOrTreasure/ItemImages/image0_bsrlx6.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { Phone: '0777123456', Instagram: '@chknrs' },
        used: 'Used More Than One Year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."}, 
        {id: 2, name: 'Xbox Controller', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633503650/TrashOrTreasure/ItemImages/IMG_5159_pycavk.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { Phone: '0777123456' },
        used: 'Used More Than One Year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 3, name: 'Standing Fan', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633504706/TrashOrTreasure/ItemImages/image0_amj6ro.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { Phone: '0777123456', Instagram: '@chknrs', Email: 'prnkdslv@gmail.com' },
        used: 'Used More Than One Year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 4, name: 'Apple Earphones', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633503659/TrashOrTreasure/ItemImages/image0_bsrlx6.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { Phone: '0777123456', Instagram: '@chknrs' },
        used: 'Used More Than One Year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."}, 
        {id: 5, name: 'Xbox Controller', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633503650/TrashOrTreasure/ItemImages/IMG_5159_pycavk.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { Phone: '0777123456' },
        used: 'Used More Than One Year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 6, name: 'Standing Fan', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633504706/TrashOrTreasure/ItemImages/image0_amj6ro.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { Phone: '0777123456', Instagram: '@chknrs', Email: 'prnkdslv@gmail.com' },
        used: 'Used More Than One Year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 7, name: 'Apple Earphones', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633503659/TrashOrTreasure/ItemImages/image0_bsrlx6.jpg', location: 'Pitakotte',
        type: 'Furniture', contact: { Phone: '0777123456', Instagram: '@chknrs' },
        used: 'Used More Than One Year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."}, 
        {id: 8, name: 'Xbox Controller', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633503650/TrashOrTreasure/ItemImages/IMG_5159_pycavk.jpg', location: 'Pitakotte',
        type: 'Furniture', contact: { Phone: '0777123456' },
        used: 'Used More Than One Year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 9, name: 'Standing Fan', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633504706/TrashOrTreasure/ItemImages/image0_amj6ro.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { Phone: '0777123456', Instagram: '@chknrs', Email: 'prnkdslv@gmail.com' },
        used: 'Used More Than One Year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."},
        {id: 10, name: 'Apple Earphones', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633503659/TrashOrTreasure/ItemImages/image0_bsrlx6.jpg', location: 'Pitakotte',
        type: 'Electronics', contact: { Phone: '0777123456', Instagram: '@chknrs' },
        used: 'Used More Than One Year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."}, 
    ])

    const [filters, setFilters] = useState(
        {used: { Unused: true, UsedLessThanOneMonth: true, UsedFewMonths: true, UsedMoreThanOneYear: true },
        broken: { Unbroken: true, PartiallyBroken: true, CompletelyBroken: true },
        type: { Electronics: true, Books: true, CDs: true, Household: true, Furniture: true, Other: true },
    });
     
    const [filteredItems, setFilteredItems] = useState(items);

    function reducer (searchFilter, action) {
        switch (action.type) {
            case 'search':
                if (action.payload.searchTerm === ('')) {
                    searchFilter = items;
                } else {
                    searchFilter = items.filter(item => item.name.toLowerCase().includes(action.payload.searchTerm.toLowerCase()))
                }
                return searchFilter;
            default:
                searchFilter = items;
                return searchFilter    
        }
    }
  
    const [searchFilter, dispatch] = useReducer(reducer, items);
    
    function filterReducer (filterFilter, action) {
        switch (action.type) {
            case 'filter':
                filterFilter = items.filter(item => getFilteredItems(item))
                return filterFilter;
            default: 
                filterFilter = items;
                return filterFilter;
        }
    }

    const [filterFilter, dispatchFilter] = useReducer(filterReducer, items);

    useEffect (() => {
        dispatchFilter({type: 'filter', payload: {filters: filters}})
    }, [filters])

    useEffect (() => {
        setFilteredItems( searchFilter.filter(element => filterFilter.includes(element)))
    },[searchFilter, filterFilter])

    function getFilteredItems(item) {
        const noWhiteSpaces = item.used.replace(/\s+/g, '');
        const itemProperties = [item.type, noWhiteSpaces, item.broken]
      
        const allKeys = Object.entries(filters).map(category => Object.keys(category[1]))
        const allKeysFlat = allKeys.flat();
        const allEntries = Object.entries(filters).map(category => Object.entries(category[1]))
        const allEntriesFlat = allEntries.flat()
        const finalObject = Object.fromEntries(allEntriesFlat)
        const filtered = allKeysFlat.filter(key => finalObject[key]);
      
        const found = itemProperties.every(r=> filtered.includes(r))

        return found;
    }

    return (
        <main className={browseStyle.main}>
            <Navbar dispatch={dispatch}/>
            <div className={browseStyle.browse}>
                <Sidebar filters={filters} setFilters={setFilters}/>
                <div className={browseStyle.items}>
                    <ItemList filteredItems={filteredItems} filters={filters}/>
                </div>
            </div>
        </main>
    )
}

export default Browse
