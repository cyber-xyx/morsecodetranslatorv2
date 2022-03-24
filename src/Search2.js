
import React from 'react';


const Search2 = (props) => {
    const handleSearch = (e) => {
        props.handleSearchInput(e.target.value);
    }
    return (
        <>
          <input type="text" onChange={handleSearch} placeholder="Input morse code" style={{ width: "30rem", height: "2.5rem"  }}></input>
          <button text="submit" onClick={props.onSubmitQuery} style={{ height: "2.5rem"  }} >
            Get English Translation
          </button>
        </>
      );
    };



export default Search2;