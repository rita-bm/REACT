import React from 'react';

/* {props.label} */
const InputText = (props) => {
    return ( 
        <>
      <label>{props.label}</label>
      <input type={props.type ? props.type : "text"} name={props.name} value={props.value} onChange={props.onChange}></input>
      </>
     );
  }

export default InputText;