
import React from 'react';


const Search = (props) => {
    const handleSearch = (e) => {
        props.handleSearchInput(e.target.value);
    }
    return (
        <>
          <input type="text" onChange={handleSearch} placeholder="Input english text" style={{ width: "30rem", height: "2.5rem"  }}></input>
          <button text="submit" onClick={props.onSubmitQuery} style={{ height: "2.5rem"  }}>
            Get morse code
          </button>
        </>
      );
    };



export default Search;