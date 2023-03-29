import Button from "./Button"
import Image from 'next/image'
import itemAddedStyle from '../styles/ItemAdded.module.css'
import { useRouter } from 'next/router'

const ItemAdded = ({ setAddItemDone, handleClose, addedItem }) => {
    const router = useRouter();
    const returnToBrowse = (e) => {
        const path = router.pathname;
        if (!path.includes('browse')) {
            router.push('/browse')
        }
        handleClose(e);
    }

    return (
        <div className={itemAddedStyle.container}>
            <h1>Item Successfully Added!</h1>
            <div className={itemAddedStyle.itemCard}>
                <div className={itemAddedStyle.titleImage}>
                    <h2>{addedItem.name}</h2>
                    <div className={itemAddedStyle.imageContainer}>
                        <Image 
                            src={addedItem.img}
                            layout="fill"
                            objectFit="cover"
                            className={itemAddedStyle.image}
                        />
                    </div>
                </div>
                <div className={itemAddedStyle.separator}></div>
                <div className={itemAddedStyle.info}>
                    <p><span className={itemAddedStyle.bold}>Location:</span> {addedItem.location}</p>
                    <p><span className={itemAddedStyle.bold}>{Object.entries(addedItem.contact)[0][0]}:</span> {Object.entries(addedItem.contact)[0][1]}</p>
                    <p><span className={itemAddedStyle.bold}>Description:</span> {addedItem.description}</p>
                    <div className={itemAddedStyle.condition}>
                        <p>{addedItem.used}</p>
                        <p>{addedItem.broken}</p>
                  </div>
                </div>
            </div>
            <div className={itemAddedStyle.buttons}>
                <Button text={"Add New Item"} onClick={() => setAddItemDone(false)}/>
                <Button text={"Browse Treasures"} onClick={returnToBrowse}/>
            </div>
        </div>
    )
}

export default ItemAdded