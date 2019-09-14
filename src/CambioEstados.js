import React from 'react';

/*class CambioEstados extends React.Component {

	state = {
		count: 0
	}

	incrementar() {
	    this.setState({ count: this.state.count + 1 })
	}

	decrementar() {
	    this.setState({ count: this.state.count - 1 })
	}


  render() {
    return (
    <>
    <div>{this.state.count}</div>
    <button onClick={() => this.incrementar()}>Increment</button>
    <button onClick={() => this.decrementar()}>Increment</button>
    </>
    )
  }
}

export default CambioEstados;*/


class CambioEstados extends React.Component {

	state = {
		count: 0
	}

	incrementar() {
	    this.setState({ count: this.state.count + 1 })
	}

	decrementar = () => {
	    this.setState({ count: this.state.count - 1 })  //Pasamos a variable la función
	}


  render() {
    return (
    <>
    <div>{this.state.count}</div>
    <button onClick={() => this.incrementar()}>Increment</button> //Para que no coja contexto y utilizar el this podemos utilizar el fat arrow
    <button onClick={this.decrementar}>Increment</button>
    </>
    )
  }
}

export default CambioEstados;

//<button onClick={this.decrementar.bind(this)}>Decrement</button>