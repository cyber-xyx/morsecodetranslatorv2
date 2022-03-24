import React, {useState} from 'react';
import Search2 from './Search2';
import SearchResults2 from './SearchResults2';

const SearchContainer2 = () => {
    const [input, setInput] = useState ("");
    const [results, setResults] = useState ([]);
    const [hasSearched, setHasSearched] = useState(false);
    
    const fetchSearch = async () => {

        const urlC = `http://api.funtranslations.com/translate/morse2english.json?text=${input}`;
        const resC = await fetch(urlC);
        const dataC = await resC.json();

        const searchedData = ({
          text: dataC.contents.translated,
          morseCode: dataC.contents.text,

            })
        setResults(searchedData);
    };

    const onSubmitQuery = (e) => {
        e.preventDefault();
        fetchSearch();
        setHasSearched(true);
      };
    
      const handleSearchInput = (e) => {
        setInput(e);
      };

    return (
      <>
     {hasSearched ? (
        <SearchResults2 searchData={results} searchFunction={setHasSearched} />
      ) : (
        <Search2
          onSubmitQuery={onSubmitQuery}
          handleSearchInput={handleSearchInput}
        />
      )}
      </>
    );
};

export default SearchContainer2;