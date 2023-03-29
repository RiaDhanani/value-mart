import ItemCard from './ItemCard'
import browseStyle from '../styles/Browse.module.css'

const ItemList = ({ filteredItems, filters }) => {

    // Checks to see if item list is filtered (if any filter categories are deselected) - returns true if the list is filtered, returns false if not.
    const checkFilters = () => {
        const output = Object.values(filters).map(object => (Object.values(object)));
        const allValues = output.flat()
        return allValues.includes(false);
    }

    return (
        <div className={browseStyle.itemListContainer}>
            <h2 className={browseStyle.itemTitle}>{`${checkFilters() ? `Filtered Items` : `All Items`} (${filteredItems.length})`}</h2>
            <div className={browseStyle.itemList}>
                {filteredItems.map(filteredItem => (
                    <ItemCard filteredItem={filteredItem} key={filteredItem.id}/>
                ))}
            </div>
        </div>
    )
}

export default ItemList
