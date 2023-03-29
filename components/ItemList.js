import ItemCard from './ItemCard'
import browseStyle from '../styles/Browse.module.css'
import Link from 'next/link'

const ItemList = ({ filteredItems }) => {

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
