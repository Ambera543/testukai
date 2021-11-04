import { useState } from "react";

function JewelNav({ products, filter, reset, search}) {

    const [filterValue, setFilterValue] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const selectFilter = e => {
        setFilterValue(e.target.value);
        filter(e.target.value)
    }

    const handleSearchValue = e => {
        console.log(e)
        setSearchValue(e.target.value);
        search(e.target.value)
    }

    const resetHandler = () => {
        reset();
        setFilterValue('');
    }

    return (
        <div className="Jewel_nav">
            <div className="Jewel_nav_filter">
                <span>Product Filter</span>
                <select onChange={selectFilter} value={filterValue}>
                    <option value="">Select product</option>
                    {
                        products.map(t => <option key={t.product} value={t.product}>{t.product}</option>)
                    }
                </select>
            </div>
            <div className="Jewel_nav_filter">
                <span>Product Search</span>
                <input onChange={handleSearchValue} value={searchValue}></input>
            </div>
            <div className="Jewel_nav_reset">
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
}

export default JewelNav;