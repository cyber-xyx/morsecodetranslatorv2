import React from 'react';
import './searchResults.css';

const SearchResults2 = (props) => {
    const searchAgain = () => {
        props.searchFunction(false);
    }
    
    return (
        <>
            <div className='results'>
                <p>{props.searchData.morseCode}</p>
                <p>{props.searchData.text}</p>
                
            </div>

            <div className='searchAgain'>
            <iframe src='https://gfycat.com/ifr/AngelicPracticalHarpseal' frameborder='0' scrolling='no' allowfullscreen width='640' height='312'></iframe>
            <p></p>
            <button onClick={searchAgain}>Create another Translation!</button>
            </div>
      
        </>
    );
};

export default SearchResults2;