import React from 'react';

const Link = (props) => {
	return <a href={props.to} target={props.openInNewTab ? '_blank' : ''}>{props.children}</a>
}

export default Link;