import React from "react";
import './TodoSearch.css';

function TodoSearch ({searchValue, setSearchValue}) {
    const onSearchValueChange = (event) => {
        console.log(`event: ${event.target.value}`);
        setSearchValue(event.target.value);
    }
    return(
        <input
            className="TodoSearch"
            placeholder="Search a ToDo..."
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };