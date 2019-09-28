import React from 'react';

const ConditionalRender = (props) => {
    return ( 
        <>
        {props.if ? props.show : ''}
        </>
     );
}
 
export default ConditionalRender;