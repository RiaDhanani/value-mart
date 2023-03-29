import ItemCard from './ItemCard'
import browseStyle from '../styles/Browse.module.css'
import Link from 'next/link'

const ItemList = ({ filteredItems }) => {

    // Checks to see if item list is filtered (if any filter categories are deselected) - returns true if the list is filtered, returns false if not.
    // const checkFilters = () => {
    //     const output = Object.values(filters).map(object => (Object.values(object)));
    //     const allValues = output.flat()
    //     return allValues.includes(false);
    // }

    // ${checkFilters() ? `Filtered Items` : `All Items`} 

    return (
        <div className={browseStyle.itemListContainer}>
            <h2 className={browseStyle.itemTitle}>{`Items (${filteredItems.length})`}</h2>
            <div className={browseStyle.itemList}>
                {filteredItems.map(filteredItem => (
                    <Link key={filteredItem.id} href={`/browse/${filteredItem.id}`}>
                        <a>
                            <ItemCard filteredItem={filteredItem}/>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ItemList
