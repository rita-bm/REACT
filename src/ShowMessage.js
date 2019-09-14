import React from 'react';

export default () => {
	let ShowMessage = true
	return <p>{ShowMessage ? 'Ahora puedes leer esto en una etiqueta' : ''}</p>
}
