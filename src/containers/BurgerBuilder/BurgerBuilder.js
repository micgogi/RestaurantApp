import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'

import Burger from '../../components/Burger/Burger';
export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 5,
            meat: 1
        }
    }
    render() {
        return (
             <Auxiliary >

            <Burger ingredients={this.state.ingredients} > </Burger> 
            </Auxiliary>
        )
    }
}