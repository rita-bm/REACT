import React from 'react';

const ContainerSelect = (props) => {
    return ( 
        <select value={props.value} onChange={props.onChange}>
            
        {props.children}
        </select>
     );
}

const Item = (props) => {
    return ( 
        <option value={props.value}>{props.value}</option>
     );
}
 



class Select extends React.Component {
    state = {
        selectedOption : ''
    }

    selectOption = (e) => {
        const target = event.target
        const value = this.state.selectedOption
        const name = target.name
    }

    render() { 
        return ( 
            <>
            <ContainerSelect value={this.state.selectedOption} onChange={this.selectOption}>
                <Item value='Rojo'>Rojo</Item>
                <Item value='Amarillo'>Amarillo</Item>
                <Item value='Verde'><Verde/Item>
                <Item value='Azul'>Azul</Item>
            </ContainerSelect>
            </>
         );
    }
}
 
export default Select;