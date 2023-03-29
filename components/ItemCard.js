import Image from 'next/image'
import itemCardStyle from '../styles/ItemCard.module.css'

const ItemCard = ({ item }) => {
    return (
        <div className={itemCardStyle.container}>
            <div className={itemCardStyle.overlay}></div>
            <Image 
                src={item.img}
                layout="fill"
                objectFit="cover"
                className={itemCardStyle.image}
            />
            <h3 className={itemCardStyle.title}>{item.name}</h3>
            <div className={itemCardStyle.text}>
                <p>Location: {item.location}</p>
                {Object.entries(item.contact).map(contact => ( <p key={contact}>{contact[0]}: {contact[1]}</p>))}
                <p>{item.used}</p>
                <p>{item.broken}</p>
            </div>
        </div>
    )
}

export default ItemCard
