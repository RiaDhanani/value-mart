import sidebarStyle from './Sidebar.module.css'
import { useState } from 'react'
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";
import { BiChevronRight } from "@react-icons/all-files/bi/BiChevronRight";

const Sidebar = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const handleClick = (e) => {
        console.log(e.target)
        if (openCategory === e.target.parentNode.id) {
            setOpenCategory(null)
        } else {
            setOpenCategory(e.target.parentNode.id)
        }
        
    }

    return (
        <div className={sidebarStyle.sideBar}>
            <h2 className={sidebarStyle.sideBarTitle}> Filter </h2>
            <div className={sidebarStyle.mainCategory} id="1">
                <button className={sidebarStyle.mainCategoryTitle} onClick={handleClick}>
                    <h3 className={sidebarStyle.mainCategoryTitleText}><BiChevronRight className={`${sidebarStyle.chevron} ${openCategory != 1 ? `` : `${sidebarStyle.rotated}`} `} />Used Status</h3>
                </button>
                <div className={`${openCategory != 1 ? `${sidebarStyle.categoryListHidden}` : `${sidebarStyle.categoryListVisible}`} `}>
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
            <div className={sidebarStyle.mainCategory} id="2">
                <button className={sidebarStyle.mainCategoryTitle} onClick={handleClick}>
                    <h3 className={sidebarStyle.mainCategoryTitleText}><BiChevronRight className={`${sidebarStyle.chevron} ${openCategory != 2 ? `` : `${sidebarStyle.rotated}`} `} />Broken Status</h3>
                </button>
                <div className={`${openCategory != 2 ? `${sidebarStyle.categoryListHidden}` : `${sidebarStyle.categoryListVisible}`} `}>
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
                    <h3 className={sidebarStyle.mainCategoryTitleText}><BiChevronRight className={`${sidebarStyle.chevron} ${openCategory != 3 ? `` : `${sidebarStyle.rotated}`} `} />Tags </h3>
                </button>
                <div className={`${openCategory != 3 ? `${sidebarStyle.categoryListHidden}` : `${sidebarStyle.categoryListVisible}`} `}>
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
