import React from 'react';

class DecrementarBtn extends React.Component {

	decrementar = () => {
	    this.setState({ count: this.state.count - 1 })  //Pasamos a variable la función
	}

	render() {
    return <button onClick={this.decrementar}>Decrement</button>
	}
}

export default DecrementarBtn;