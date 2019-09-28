import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Product = (props) => {
    return ( 
        <div>Name:{props.name} Price:{props.price}</div>
     );
}

const ProductList = (props) => {
    return (
        <div>
            {props.products.maps((product) => (
                <div key={product}>
                    <Product name={product.name}></Product>
                    Unidades: {props.products.filter(p => p.id === product.id).lenght }
                    <ConditionalRender if={props.onAddProduct ? : ''}></ConditionalRender>
                    <button onClick={() => props.onAddProduct(product)}></button>)
                </div>
            ))}
        </div>
    )
}

const getTotalPrice = (products) => {

}

//<button>borrar producto</button>
 

class Shop extends React.Component {
    state = { 
        selectedProducts: []
     }

    products = [
        {
            id: 1,
            name: 'Product 1',
            price: 100
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200
        },
    ]

    onAddProduct = (product) => {
        console.log(product)
        this.setState({selectedProducts: [...selectedProducts, product]})
    }

    onRemoveProducts = (product) => {
        this.setState({selectedProducts: this.state.selectedProducts.filter((p: p.id !== product.id))})
    }
    
    render() { 
        return ( 
            <>
            <ProductList
            products={this.products}
            onAddProduct={this.onAddProduct}>
            </ProductList>
            <ProductList
            products={this.state.selectedProducts}
            onRemoveProducts={this.onRemoveProducts}>
            </ProductList>
            </>
         );
    }
}
 
export default Shop;