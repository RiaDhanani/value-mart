import ItemCard from './ItemCard'
import browseStyle from '../styles/Browse.module.css'

const ItemList = ({ items }) => {
    return (
        <div className={browseStyle.itemListContainer}>
            <h2 className={browseStyle.itemTitle}>{`Recent (${items.length})`}</h2>
            <div className={browseStyle.itemList}>
                {items.map(item => (
                    <ItemCard item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default ItemList
