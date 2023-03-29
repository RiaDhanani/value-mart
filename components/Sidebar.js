import sidebarStyle from './Sidebar.module.css'
import { useState } from 'react'
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";
import { BiChevronRight } from "@react-icons/all-files/bi/BiChevronRight";

const Sidebar = () => {
    const[openCategories, setOpenCategories] = useState([]);


    const handleClick = (e) => {
        if (openCategories.includes(e.target.parentNode.id)) {
            setOpenCategories(openCategories.filter(category => category != e.target.parentNode.id))
        } else {
            setOpenCategories([...openCategories, e.target.parentNode.id])
        }
        console.log(openCategories);
    }

    return (
        <div className={sidebarStyle.sideBar}>
            <h2 className={sidebarStyle.sideBarTitle}> Filter </h2>
            <div className={sidebarStyle.mainCategory} id="1">
                <button className={sidebarStyle.mainCategoryTitle} onClick={handleClick}>
                    <h3 className={sidebarStyle.mainCategoryTitleText}><BiChevronRight className={`${sidebarStyle.chevron} ${!openCategories.includes('1') ? `` : `${sidebarStyle.rotated}`} `} />Used Status</h3>
                </button>
                <div className={`${!openCategories.includes('1') ? `${sidebarStyle.categoryListHidden}` : `${sidebarStyle.categoryListVisible}`} `}>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label htmlFor="vehicle1"> I have a bike</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label htmlFor="vehicle1"> I have a bike</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label htmlFor="vehicle1"> I have a bike</label>
                    </div>
                </div>
            </div>
            <div className={sidebarStyle.mainCategory} id="2">
                <button className={sidebarStyle.mainCategoryTitle} onClick={handleClick}>
                    <h3 className={sidebarStyle.mainCategoryTitleText}><BiChevronRight className={`${sidebarStyle.chevron} ${!openCategories.includes('2') ? `` : `${sidebarStyle.rotated}`} `} />Broken Status</h3>
                </button>
                <div className={`${!openCategories.includes('2') ? `${sidebarStyle.categoryListHidden}` : `${sidebarStyle.categoryListVisible}`} `}>
                    <div className={sidebarStyle.category}>
                        <p>Category 1</p>
                    </div>
                    <div className={sidebarStyle.category}>
                        <p>Category 2</p>
                    </div>
                    <div className={sidebarStyle.category}>
                        <p>Category 3</p>
                    </div>
                </div>
            </div>
            <div className={sidebarStyle.mainCategory} id="3">
                <button className={sidebarStyle.mainCategoryTitle} onClick={handleClick}>
                    <h3 className={sidebarStyle.mainCategoryTitleText}><BiChevronRight className={`${sidebarStyle.chevron} ${!openCategories.includes('3') ? `` : `${sidebarStyle.rotated}`} `} />Tags </h3>
                </button>
                <div className={`${!openCategories.includes('3') ? `${sidebarStyle.categoryListHidden}` : `${sidebarStyle.categoryListVisible}`} `}>
                    <div className={sidebarStyle.category}>
                        <p>Category 1</p>
                    </div>
                    <div className={sidebarStyle.category}>
                        <p>Category 2</p>
                    </div>
                    <div className={sidebarStyle.category}>
                        <p>Category 3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
