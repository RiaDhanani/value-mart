import { createContext, useContext, useState, useEffect } from 'react';

const ItemContext = createContext();

export function useItems() {
    return useContext(ItemContext);
}

export function ItemContextProvider ({ children }) {
    const itemContext = useItemContext();

    return (
        <ItemContext.Provider value={itemContext}>
            {children}
        </ItemContext.Provider>
    )
}

function useItemContext () {
    const initialState = [{user: 0, id: 1, name: 'Apple Earphones', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633503659/TrashOrTreasure/ItemImages/image0_bsrlx6.jpg', location: 'Pitakotte',
    type: 'Electronics', contact: { Phone: '0777123456'},
    used: 'Used More Than One Year', broken: 'Unbroken', description: "These are apple earphones with a lightning connector. Well used. Don't need them as I don't use an iPhone anymore."}, 
    {user: 0, id: 2, name: 'Pink Floyd CD Collection', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1634894314/TrashOrTreasure/ItemImages/ghoq4efmiel31_g9z8ji.jpg', location: 'Nugegoda',
    type: 'CDs', contact: { Instagram: 'pinkfloyd' },
    used: 'Used Less Than One Month', broken: 'Unbroken', description: "Pink floyd CD collection, includes 2 gold disks by MFSL. Who listens to CDs these days anyway?"},
    {user: 0, id: 3, name: 'Standing Fan', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633504706/TrashOrTreasure/ItemImages/image0_amj6ro.jpg', location: 'Dehiwala',
    type: 'Electronics', contact: { Email: 'itemholder@me.com' },
    used: 'Used More Than One Year', broken: 'Partially Broken', description: "fan works, doesn't rotate"},
    {user: 0, id: 4, name: 'Chinaware set', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1634894314/TrashOrTreasure/ItemImages/e832b83dff635ddceaadb43817b24e85_s8dfnj.jpg', location: 'Rajagiriya',
    type: 'Household', contact: { Facebook: 'Mark Zuckerberg' },
    used: 'Unused', broken: 'Unbroken', description: "Got these as a gift, just takes up space around the house. Feel free to take all or some."}, 
    {user: 0, id: 5, name: 'Xbox Controller', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1633503650/TrashOrTreasure/ItemImages/IMG_5159_pycavk.jpg', location: 'Ragama',
    type: 'Electronics', contact: { Twitter: '@nasa' },
    used: 'Used More Than One Year', broken: 'Unbroken', description: "Rock Candy brand Xbox controller"},
    {user: 0, id: 6, name: 'Bicycle lock', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1634894314/TrashOrTreasure/ItemImages/4124fdbc3711e624fe9d2bbdfaf93f52_ip8nqp.jpg', location: 'Gampaha',
    type: 'Other', contact: { WhatsApp: '94777123456' },
    used: 'Used Few Months', broken: 'Unbroken', description: "Bicycle lock with combination lock"},
    {user: 0, id: 7, name: 'Queen sized Bed with mattress and 2 pillows', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1634828218/TrashOrTreasure/itemImages/n6b9mzzxkvmfyo8eym0e.jpg', location: 'Kandy',
    type: 'Furniture', contact: { Email: 'itemholder@me.com' },
    used: 'Used More Than One Year', broken: 'Unbroken', description: "Bed frame 5 years old, mattress and pillows 3 years old. Pick up only on weekends."}, 
    {user: 0, id: 8, name: 'Used Textbooks', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1634894316/TrashOrTreasure/ItemImages/textbooks_z373qh.jpg', location: 'Kelaniya',
    type: 'Books', contact: { Facebook: 'Mark Zuckerberg' },
    used: 'Used More Than One Year', broken: 'Unbroken', description: "Grade 10 and 11 textbooks sinhala medium available"},
    {user: 0, id: 9, name: 'Honda 70cc Bike', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1634827571/TrashOrTreasure/itemImages/wcaqwsqvi5lx549c2um0.jpg', location: 'Kurunegala',
    type: 'Other', contact: { Phone: '0777123456' },
    used: 'Used More Than One Year', broken: 'Completely Broken', description: "Doesnt run, needs to be fixed. Don't call only text."},
    {user: 0, id: 10, name: 'Old sofa', img:'https://res.cloudinary.com/prnkdslv/image/upload/v1634826284/TrashOrTreasure/itemImages/wzp2zasjoquuic0c7zhz.jpg', location: 'Matara',
    type: 'Furniture', contact: { Instagram: 'elonrmuskk' },
    used: 'Used More Than One Year', broken: 'Unbroken', description: "Grimes used to sit on this sofa, now looking at it makes me sad. Take it away from me!"},]

    const [items, setItems] = useState(initialState)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("itemList"))) {
            setItems(JSON.parse(localStorage.getItem("itemList")))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("itemList", JSON.stringify(items));
    }, [items])

    

    function getSingleItem (id) {
        return items.find(obj => obj.id == id)
    }

    function addItem (itemObject) {
        setItems([...items, itemObject]);
    }

    function deleteItem (id) {
        setItems(items.filter(item => item.id !== id ))
    }

    return {
        items,
        getSingleItem,
        deleteItem,
        addItem
    }
}