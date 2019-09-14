import React from 'react';

class Counter extends React.Component {

	incrementar = () => {
	    this.setState({ count: this.state.count - 1 })  //Pasamos a variable la función
	}

	render() {
    return <button onClick={this.incrementar}>Increment</button>
	}
}

export default Counter;