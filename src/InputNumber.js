import React from 'react';

const InputNumber = (props) => {
    return ( 
        <>
        <label>{props.label}</label>
        <input type="number" value={props.value} onChange="props.onChange"></input>
        </>
     );
}
 
export default InputNumber;