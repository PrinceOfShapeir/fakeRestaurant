import React, {Component, useState} from 'react';

class ShoppingCart extends Component {

    constructor(props){
        super(props);
        this.state = {
            shoppingList: []
        }
    }

    addToCart = (item) =>{
        this.setState((state)=>{shoppingList: state.shoppingList.concat(item)});
    }
    clearCart = ()=>{
        this.setState({shoppingList: []});
    }

    render(){
        return(
            <>
            {this.state.shoppingList}
            </>
        );
    }

}

export default ShoppingCart;