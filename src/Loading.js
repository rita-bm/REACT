import React from 'react';

const Loading = (props) => {
	return props.show ? props.children : 'Loading...'
}

export default Loading;