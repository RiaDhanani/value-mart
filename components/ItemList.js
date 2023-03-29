import ItemCard from './ItemCard'
import browseStyle from '../styles/Browse.module.css'

const ItemList = ({ items, filters }) => {

    // Checks to see if item list is filtered (if any filter categories are deselected) - returns true if the list is filtered, returns false if not.
    const checkFilters = () => {
        const output = Object.values(filters).map(object => (Object.values(object)));
        const allValues = output.flat()
        return allValues.includes(false);
    }

    return (
        <div className={browseStyle.itemListContainer}>
            <h2 className={browseStyle.itemTitle}>{`${checkFilters() ? `Filtered Items` : `All Items`} (${items.length})`}</h2>
            <div className={browseStyle.itemList}>
                {items.map(item => (
                    <ItemCard item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default ItemList
