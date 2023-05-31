import React from 'react';
import { filterSectionStyle } from './style';

export default function FilterSection() {
    const classes = filterSectionStyle();
    return (
        <section
            className={`${classes.filterSectionContainer} main--section__subSection1 filter--section__closable pe-5 mx-auto`}>
            <p id="main--checkbox__filter">Filters</p>
            <form action="/action_page.php">
                <div className="checkbox--items__alignment">
                    <input type="checkbox" id="main--checkbox__phone" value="Phones" className={`${classes.filterCheckbox}`}/>
                    <label htmlFor="main--checkbox__phone" id="main--checkbox__selected" className="main--checkbox__selected" style={{ cursor: 'pointer' }}>Phones</label>
                </div>
                <br />
                <div className="checkbox--items__alignment">
                    <input type="checkbox" id="main--checkbox__headphones" value="Headphones" className={`${classes.filterCheckbox}`}/>
                    <label htmlFor="main--checkbox__headphones" className="main--checkbox__selected" style={{ cursor: 'pointer' }}>Headphones</label>
                </div>
                <br />
                <div className="checkbox--items__alignment">
                    <input type="checkbox" id="main--checkbox__accessories" value="Accessories" className={`${classes.filterCheckbox}`}/>
                    <label htmlFor="main--checkbox__accessories" className="main--checkbox__selected" style={{ cursor: 'pointer' }}>Accessories</label>
                </div>
                {/* <br /><br /> */}
            </form>
        </section>

    );
}