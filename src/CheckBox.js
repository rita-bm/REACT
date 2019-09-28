import React from 'react';

const CheckBox = (props) => {
    return ( 
        <>
        <input type="checkbox" value="Games" onChange={props.onChange}/> Games
        <input type="checkbox" value="Football" onChange={props.onChange}/> Football
        <input type="checkbox" value="Basketball" onChange={props.onChange}/> Basketball
        <input type="checkbox" value="Art" onChange={props.onChange}/> Art
        </>

        /*{props.hobbies.map((hobby) => 
        <span key={hobby}>
            <input checked={props.selectedHobbies.includes(hobby)} onChange={props.onChange} value={hobby}></input>
            {hobby}
        </span>
            )}*/
     );
}
 
export default CheckBox;