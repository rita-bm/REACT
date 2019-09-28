import React from 'react';

const TextArea = (props) => {
    return ( 
        <>
        <label>{props.label}</label>
        <textarea {...props}></textarea>
        </>
     );
}
 
export default TextArea;