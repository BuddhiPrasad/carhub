"use client";

import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {

    const handelSearch =() =>{}

    return (
        <form className='searchbar' onSubmit={handelSearch}>
            <div className="searchbar__item">
                <SearchManufacturer/>
            </div>
        </form>
    )
}

export default SearchBar
