import React, {useState} from 'react';
import Search from './Search';
import SearchResults from './SearchResults';

const SearchContainer = () => {
    const [input, setInput] = useState ("");
    const [results, setResults] = useState ([]);
    const [hasSearched, setHasSearched] = useState(false);
    
    const fetchSearch = async () => {
        // const urlA = `http://api.funtranslations.com/translate/morse/audio?text=${input}&speed=5&tone=700`;
        // const resA = await fetch(urlA);
        // const dataA = await resA.json();

        const urlB = `http://api.funtranslations.com/translate/morse?text=${input}`;
        const resB = await fetch(urlB);
        const dataB = await resB.json();

        const searchedData = ({
          text: dataB.contents.text,
          morseCode: dataB.contents.translated,
          //audio: dataA.contents.translated.audio,
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
        <SearchResults searchData={results} searchFunction={setHasSearched} />
      ) : (
        <Search
          onSubmitQuery={onSubmitQuery}
          handleSearchInput={handleSearchInput}
        />
      )}
      </>
    );
};

export default SearchContainer;