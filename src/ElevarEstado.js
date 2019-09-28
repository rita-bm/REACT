import React from 'react';

const TextColor = (props) => {
    return(
        <p>Soy un color con texto</p>
    )
}

const ColorPicker = (props) => {
    return(
        <input type="color" onChange={props.onChange}></input>
    )
}

class ElevarEstado extends React.Component {
    state = { 
        color : ''
     }

     handlerChange = (e) => {
         console.log(e.target)
        return(
            this.setState({color: e.value})
        )
    }
    render() { 
        return ( 
            <>
            <TextColor style={{color:this.state.color}}></TextColor>
            <ColorPicker onChange={(e) => this.handlerChange(e)}></ColorPicker>
            </>
         );
    }
}
 
export default ElevarEstado;