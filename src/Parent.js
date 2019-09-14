import React from 'react';
import Child from './Child.js';

const Parent = () => {

	return <Child onPress> () =>{ console.log('Hola a todos')}></Child>
}

export default Parent;