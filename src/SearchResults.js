import React from 'react';
import './searchResults2.css';

const SearchResults = (props) => {
    const searchAgain = () => {
        props.searchFunction(false);
    }

    const handleClick = (e) => {
        e.preventDefault();
        const value = props.searchData.morseCode;
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        var ctx = new AudioContext();
        var dot = 1.2 / 15;
        var t = ctx.currentTime;

    var oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 600;

    var gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, t);

    value.split("").forEach(function(letter) {
        switch(letter) {
            case ".":
                gainNode.gain.setValueAtTime(1, t);
                t += dot;
                gainNode.gain.setValueAtTime(0, t);
                t += dot;
                break;
            case "-":
                gainNode.gain.setValueAtTime(1, t);
                t += 3 * dot;
                gainNode.gain.setValueAtTime(0, t);
                t += dot;
                break;
            case " ":
                t += 7 * dot;
                break;
        }
    });
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    return false;   
       
    }

    return (
        <>
            <div className='results'>
                <p>{props.searchData.text}</p>
                <p>{props.searchData.morseCode}</p>
                <input type="button" value="Play me!" onClick={handleClick}/>
            </div>

            <div className='searchAgain'>
            <iframe src='https://gfycat.com/ifr/AngelicPracticalHarpseal' frameborder='0' scrolling='no' allowfullscreen width='640' height='312'></iframe>
            <p></p>
            <button onClick={searchAgain}>Create another Morse Code!</button>
            </div>
      
        </>
    );
};

export default SearchResults;