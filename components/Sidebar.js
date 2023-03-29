import sidebarStyle from '../styles/Sidebar.module.css'
import { useState } from 'react'
import { BiChevronRight } from "@react-icons/all-files/bi/BiChevronRight";

const Sidebar = ({ filters, setFilters }) => {
    const[openCategories, setOpenCategories] = useState([]);
    // const [filters, setFilters] = useState({used: { Unused: true, UsedLessThanOneMonth: true, UsedFewMonths: true, UsedMoreThanOneYear: true },
    //     broken: { Unbroken: true, PartiallyBroken: true, CompletelyBroken: true },
    //     tags: { Electronics: true, Books: true, CDs: true, Household: true, Furniture: true, Other: true },
    // });

    const [broken, setBroken] = useState([]);
    const [tags, setTags] = useState([]);

    const handleUsedCheckbox = (e) => {
        setFilters({...filters, used: {...filters.used, [e.target.value]: !filters.used[e.target.value]}})
    };

    const handleBrokenCheckbox = (e) => {
        setFilters({...filters, broken: {...filters.broken, [e.target.value]: !filters.broken[e.target.value]}})
    };

    const handleTagsCheckbox = (e) => {
        setFilters({...filters, tags: {...filters.tags, [e.target.value]: !filters.tags[e.target.value]}})
    };


    const handleClick = (e) => {
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
                <button className={sidebarStyle.mainCategoryTitle} onClick={handleClick}>
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
                <button className={sidebarStyle.mainCategoryTitle} onClick={handleClick}>
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
                <button className={sidebarStyle.mainCategoryTitle} onClick={handleClick}>
                    <h3 className={sidebarStyle.mainCategoryTitleText}><BiChevronRight className={`${sidebarStyle.chevron} ${!openCategories.includes('3') ? `` : `${sidebarStyle.rotated}`} `} />Tags </h3>
                </button>
                <div className={`${!openCategories.includes('3') ? `${sidebarStyle.categoryListHidden}` : `${sidebarStyle.categoryListVisible}`} `}>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Electronics" name="Electronics" value="Electronics" checked={filters.tags.Electronics} onChange={handleTagsCheckbox}/>
                        <label htmlFor="Electronics"> Electronics</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Books" name="Books" value="Books" checked={filters.tags.Books} onChange={handleTagsCheckbox}/>
                        <label htmlFor="Books"> Books</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="CDs/DVDs" name="CDs/DVDs" value="CDs" checked={filters.tags.CDs} onChange={handleTagsCheckbox}/>
                        <label htmlFor="CDs/DVDs"> CDs/DVDs</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Household" name="Household" value="Household" checked={filters.tags.Household} onChange={handleTagsCheckbox}/>
                        <label htmlFor="Household"> Household</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Furniture" name="Furniture" value="Furniture" checked={filters.tags.Furniture} onChange={handleTagsCheckbox}/>
                        <label htmlFor="Furniture"> Furniture</label>
                    </div>
                    <div className={sidebarStyle.category}>
                        <input type="checkbox" id="Other" name="Other" value="Other" checked={filters.tags.Other} onChange={handleTagsCheckbox}/>
                        <label htmlFor="Other"> Other</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
