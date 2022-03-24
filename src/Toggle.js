import React from 'react';
import "./Toggle.css";


const Toggle = (props) => {

return(
<>
<label className="toggle-switch">
      <input type="checkbox" checked={props.toggled} onChange={props.onChange} />
      <span className="switch" />
    </label>
</>
)
}                                


    
export default Toggle;