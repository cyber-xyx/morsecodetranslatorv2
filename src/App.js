import React, {useState} from "react";
import SearchContainer from "./SearchContainer";
import Toggle from "./Toggle";
import SearchContainer2 from "./SearchContainer2";

function App() {
    const [toggled, setToggled] = useState(false);
    

  return (
    <>
    <div className = "centered">
      <h1 style={{ color: "orange" }}>Morse Code Translator</h1>
    </div>
    <div className = "centered">
      <img src = {'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Morsetaste.jpg/1920px-Morsetaste.jpg'} width="180" height="120"/>
    </div>
    <div className ="centered">
     <p><b>String to Morse</b></p> 
      <Toggle onChange ={(event)=> setToggled(event.target.checked)} toggled = {toggled}/>
      <p> <b>Morse to String</b></p>
      
      </div>
    <div className = "centered">
    <p>{toggled ? <SearchContainer2/> : <SearchContainer/> }</p>
    </div>
    </>
  );
}

export default App;
