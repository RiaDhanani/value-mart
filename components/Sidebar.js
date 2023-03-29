import sidebarStyle from '../styles/Sidebar.module.css'
import { useState } from 'react'
import { BiChevronRight } from "@react-icons/all-files/bi/BiChevronRight";

const Sidebar = ({ filters, setFilters }) => {
    const[openCategories, setOpenCategories] = useState([]);

    const handleUsedCheckbox = (e) => {
        setFilters({...filters, used: {...filters.used, [e.target.value]: !filters.used[e.target.value]}})
    };

    const handleBrokenCheckbox = (e) => {
        setFilters({...filters, broken: {...filters.broken, [e.target.value]: !filters.broken[e.target.value]}})
    };

    const handleTypeCheckbox = (e) => {
        setFilters({...filters, type: {...filters.type, [e.target.value]: !filters.type[e.target.value]}})
    };


    const handleCategoryClick = (e) => {
        if (openCategories.includes(e.target.parentNode.id)) {
            setOpenCategories(openCategories.filter(category => category != e.target.parentNode.id))
        } else {
            setOpenCategories([...openCategories, e.target.parentNode.id])
        }
    }

    return (
        <div className={sidebarStyle.sideBar}>
            <h2 className={sidebarStyle.sideBarTitle}> Filter </h2>
            <div className={sidebarStyle.mainCategory} id="1">
                <button className={sidebarStyle.mainCategoryTitle} onClick={handleCategoryClick}>
                    <h3 className={sidebarStyle.mainCategoryTitleText}><BiChevronRight className={`${sidebarStyle.chevron} ${!openCategories.includes('1') ? `` : `${sidebarStyle.rotated}`} `} />Used/Unused</h3>
                </button>
                <div className={`${!openCategories.includes('1') ? `${sidebarStyle.categoryListHidden}` : `${sidebarStyle.categoryListVisible}`} `}>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Unused" name="Unused" value="Unused" checked={filters.used.Unused} onChange={handleUsedCheckbox}/>
                        <label htmlFor="Unused"> Unused</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Used < 1 Month" name="Used < 1 Month" value="UsedLessThanOneMonth" checked={filters.used.UsedLessThanOneMonth} onChange={handleUsedCheckbox}/>
                        <label htmlFor="Used < 1 Month"> {`Used < 1 Month`}</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Used Few Months" name="Used Few Months" value="UsedFewMonths" checked={filters.used.UsedFewMonths} onChange={handleUsedCheckbox}/>
                        <label htmlFor="Used Few Months"> Used Few Months</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Used > 1 Year" name="Used > 1 Year" value="UsedMoreThanOneYear" checked={filters.used.UsedMoreThanOneYear} onChange={handleUsedCheckbox}/>
                        <label htmlFor="Used > 1 Year"> {`Used > 1 Year`}</label>
                    </div>
                </div>
            </div>
            <div className={sidebarStyle.mainCategory} id="2">
                <button className={sidebarStyle.mainCategoryTitle} onClick={handleCategoryClick}>
                    <h3 className={sidebarStyle.mainCategoryTitleText}><BiChevronRight className={`${sidebarStyle.chevron} ${!openCategories.includes('2') ? `` : `${sidebarStyle.rotated}`} `} />Broken/Unbroken</h3>
                </button>
                <div className={`${!openCategories.includes('2') ? `${sidebarStyle.categoryListHidden}` : `${sidebarStyle.categoryListVisible}`} `}>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Unbroken" name="Unbroken" value="Unbroken" checked={filters.broken.Unbroken} onChange={handleBrokenCheckbox}/>
                        <label htmlFor="Unbroken"> Unbroken</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Partially Broken" name="Partially Broken" value="PartiallyBroken" checked={filters.broken.PartiallyBroken} onChange={handleBrokenCheckbox}/>
                        <label htmlFor="Partially Broken"> Partially Broken</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Completely Broken" name="Completely Broken" value="CompletelyBroken" checked={filters.broken.CompletelyBroken} onChange={handleBrokenCheckbox}/>
                        <label htmlFor="Completely Broken"> Completely Broken</label>
                    </div>
                </div>
            </div>
            <div className={sidebarStyle.mainCategory} id="3">
                <button className={sidebarStyle.mainCategoryTitle} onClick={handleCategoryClick}>
                    <h3 className={sidebarStyle.mainCategoryTitleText}><BiChevronRight className={`${sidebarStyle.chevron} ${!openCategories.includes('3') ? `` : `${sidebarStyle.rotated}`} `} />Type </h3>
                </button>
                <div className={`${!openCategories.includes('3') ? `${sidebarStyle.categoryListHidden}` : `${sidebarStyle.categoryListVisible}`} `}>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Electronics" name="Electronics" value="Electronics" checked={filters.type.Electronics} onChange={handleTypeCheckbox}/>
                        <label htmlFor="Electronics"> Electronics</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Books" name="Books" value="Books" checked={filters.type.Books} onChange={handleTypeCheckbox}/>
                        <label htmlFor="Books"> Books</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="CDs/DVDs" name="CDs/DVDs" value="CDs" checked={filters.type.CDs} onChange={handleTypeCheckbox}/>
                        <label htmlFor="CDs/DVDs"> CDs/DVDs</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Household" name="Household" value="Household" checked={filters.type.Household} onChange={handleTypeCheckbox}/>
                        <label htmlFor="Household"> Household</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Furniture" name="Furniture" value="Furniture" checked={filters.type.Furniture} onChange={handleTypeCheckbox}/>
                        <label htmlFor="Furniture"> Furniture</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Other" name="Other" value="Other" checked={filters.type.Other} onChange={handleTypeCheckbox}/>
                        <label htmlFor="Other"> Other</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
