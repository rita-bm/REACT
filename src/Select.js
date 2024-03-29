import React from 'react';

export default props => 
    <select value={props.value} name={props.name} onChange={props.onChange}>
        {props.items.map(item => (
            <option value={item.value} key={item.value}>
                {item.text}
            </option>
        ))}
    </select>