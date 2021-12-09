import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            {/* Every time the onChange event is triggered on the input search box, it calls the onSearchChange function from the parent App component.
                Therefore, the parent App component is able to communicate what is being entered in the search box. */}
            <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search Robots' onChange={searchChange} /> 
        </div>
    );
}

export default SearchBox;