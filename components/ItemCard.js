import Image from 'next/image'
import itemCardStyle from '../styles/ItemCard.module.css'

const ItemCard = ({ filteredItem }) => {
    return (
        <div className={itemCardStyle.container}>
            <div className={itemCardStyle.overlay}></div>
            <Image 
                src={filteredItem.img}
                layout="fill"
                objectFit="cover"
                className={itemCardStyle.image}
            />
            <h3 className={itemCardStyle.title}>{filteredItem.name}</h3>
            <div className={itemCardStyle.text}>
                <p>Location: {filteredItem.location}</p>
                {Object.entries(filteredItem.contact).map(contact => ( <p key={contact}>{contact[0]}: {contact[1]}</p>))}
                <p>{filteredItem.used}</p>
                <p>{filteredItem.broken}</p>
            </div>
        </div>
    )
}

export default ItemCard
