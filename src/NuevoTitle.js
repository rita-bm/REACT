import React from 'react';

/*const Title = (props) => {
	return <h1>{props.children}</h1>
}*/

class NuevoTitle extends React.Component {
  render() {
    return <h1>Hello, {this.props.children}</h1>;
  }
}

export default NuevoTitle;