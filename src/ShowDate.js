import React from 'react';

const getDate = () => new Date().toDateString();

/*const ShowDate = () => {
	return <span>{getDate()}</span>
}*/

//export default ShowDate
export default () => <span>{getDate()}</span>
