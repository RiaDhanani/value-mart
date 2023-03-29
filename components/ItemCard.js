import Image from 'next/image'
import itemCardStyle from './ItemCard.module.css'

const ItemCard = ({ item }) => {
    return (
        <div className={itemCardStyle.container}>
            <div className={itemCardStyle.overlay}></div>
            <Image 
                src={`/item-images/${item.img}`}
                layout="fill"
                objectFit="cover"
                className={itemCardStyle.image}
            />
            <h3 className={itemCardStyle.title}>{item.name}</h3>
            <div className={itemCardStyle.text}>
                <p>{item.location}</p>
                {Object.values(item.contact).map(contact => ( <p key={contact}>{contact}</p>))}
                <p>{item.used}</p>
                <p>{item.broken}</p>
            </div>
        </div>
    )
}

export default ItemCard
