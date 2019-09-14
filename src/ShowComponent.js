import React from 'react';
import ShowMessage from './ShowMessage.js';

export default () => {
	let show = true
	return show ? <ShowMessage/> : ''
}