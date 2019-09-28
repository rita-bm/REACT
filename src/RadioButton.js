import React from 'react';

const RadioButton = (props) => {
    return ( 
        <>
        <label>{props.label}</label>
            <input type="radio" checked={props.value === 'male'} value="male" onChange={props.onChange}></input>
            <input type="radio" checked={props.value === 'female'} value="female" onChange={props.onChange}></input>
            <input type="radio" checked={props.value === 'none'} value="none" onChange={props.onChange}></input>
        </>
     );
}
 
export default RadioButton;