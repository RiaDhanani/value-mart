import Button from './Button'
import addItemStyle from '../styles/AddItem.module.css'

const AddItem = () => {
    return (
        <div className={addItemStyle.container}>
            <div className={addItemStyle.blockOne}>
                <div className={addItemStyle.blockOneSmall}>
                    <label htmlFor="itemImage">Choose a profile picture:</label>
                    <input type="file" accept="image/*" name="itemImage" id="itemImage" className={`${addItemStyle.formInput} ${addItemStyle.imageUpload}`}/>
                </div>
                <div className={addItemStyle.blockOneLarge}>
                    <div className={addItemStyle.formElement}>
                        <label htmlFor="itemName">Name of Item:</label>
                        <input type="text" name="itemName" id="itemName" className={addItemStyle.formInput}/>
                    </div>
                    <div className={addItemStyle.formElement}>
                        <label htmlFor="itemLocation">Location:</label>
                        <input type="text" name="itemLocation" id="itemLocation" className={addItemStyle.formInput}/>
                    </div>
                    <div className={addItemStyle.formElement}>
                        <label htmlFor="itemType">Type:</label>
                        <select id="itemType" className={addItemStyle.formInput}>
                            <option value="Electronics">Electronics</option>
                            <option value="Books">Books</option>
                            <option value="CDs/DVDs">CDs/DVDs</option>
                            <option value="Household">Household</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={addItemStyle.blockOne}>
                <div className={addItemStyle.blockOneLarge}>
                    <div className={addItemStyle.formElement}>
                        <label htmlFor="contact">Contact:</label>
                        <input type="text" name="contact" id="contact" className={addItemStyle.formInput}/>
                    </div>
                    <div className={addItemStyle.formElement}>
                        <label htmlFor="description">Description:</label>
                        <textarea name="description" id="description" maxlength="200" className={`${addItemStyle.formInput} ${addItemStyle.textArea}`}/>
                    </div>
                </div>
                <div className={addItemStyle.blockOneSmall}>
                    <div className={addItemStyle.formElement}>
                        <label htmlFor="used">Used/Unused?</label>
                        <select id="used" className={addItemStyle.formInput}>
                            <option value="Unused">Unused</option>
                            <option value="Used < 1 Month">{`Used < 1 Month`}</option>
                            <option value="Used Few Months">Used Few Months</option>
                            <option value="Used > 1 Year">{`Used > 1 Year`}</option>
                        </select>
                    </div>
                    <div className={addItemStyle.formElement}>
                        <label htmlFor="broken">Broken/Unbroken?</label>
                        <select id="broken" className={addItemStyle.formInput}>
                            <option value="Unbroken">Unbroken</option>
                            <option value="Partially Broken">Partially Broken</option>
                            <option value="Completely Broken">Completely Broken</option>
                        </select>
                    </div>
                    <Button text={"Submit"}/>
                </div>
            </div>
            <form action="" id="addItemForm" className={addItemStyle.form}></form>
        </div>
    )
}

export default AddItem
