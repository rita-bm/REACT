import React from 'react';
import { tsPropertySignature } from '@babel/types';

const ProductList = () => {
    <>
    <ul>
        {}
    </ul>
    </>
}

class Carrito extends React.Component {
    state = { 
        cesta: []
    }

    productos = [{
        id: 0,
        nombre: '',
        precio: ''
    },
    {
        id: 1,
        nombre: '',
        precio: ''
    },
    {
        id: 2,
        nombre: '',
        precio: ''
    }]

    render() { 
        return ( 
            <>
            </>
         );
    }
}
 
export default Carrito;