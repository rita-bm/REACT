import React from 'react';


class ChangeString extends React.Component {

	let word = '';

	incrementarLetra = () => {
	    this.setState(
            this.word = word + 'M'
        )
	}

	decrementarLetra = () => {
	    this.setState(
            this.word = word.slice(0, -1)
        )
	}


  render() {
    return (
    <>
    <div>{this.word}</div>
    <button onClick={this.incrementarLetra}>Increment</button>
    <button onClick={this.decrementarLetra}>Decrement</button>
    </>
    )
  }
}

export default ChangeString;