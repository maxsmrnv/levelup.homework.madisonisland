import React, {Component} from 'react';
import './App.css';
import LanguageBar from './components/LanguageBar'
import dbGoods from './db/index.js'
import ItemsGrid from './components/ItemsGrid'
import DropdownCart from './components/DropdownCart'




export class App extends Component {

    constructor() {
        super();
        this.state = {
            cartStorage: []
        }

    }


    getItemIfInCart = (item) => {
        for (let i = 0; i < this.state.cartStorage.length; i++) {
            if (this.state.cartStorage[i].itemId === item.itemId) {
                return i

            }
        }

    };

    addToCart = (item, scale = 1) => {

        const cartIndex = this.getItemIfInCart(item);

        if (cartIndex !== undefined) {

            if (this.state.cartStorage[cartIndex].qty + scale === 0) {

                this.removeFromCart(item)
            }
            else {
                this.setState({
                    cartStorage: [
                        ...this.state.cartStorage.slice(0, cartIndex),
                        {...item, qty: this.state.cartStorage[cartIndex].qty + scale},
                        ...this.state.cartStorage.slice(cartIndex + 1)

                    ]
                })
            }

        }
        else {
            this.setState(prevState => ({
                cartStorage: [...prevState.cartStorage, {...item, qty: 1}]
            }))
        }

    };

    removeFromCart = (item) => {
        const cartIndex = this.getItemIfInCart(item);

        if (cartIndex !== undefined) {

            this.setState({
                cartStorage: [
                    ...this.state.cartStorage.slice(0, cartIndex),
                    ...this.state.cartStorage.slice(cartIndex + 1)

                ]
            });
        }
    };


    render() {
        return (
            [<LanguageBar langList={['Русский', 'English']}/>,
                <DropdownCart cartStorage={this.state.cartStorage} updItemQty={this.addToCart}
                              removeFromCart={this.removeFromCart}/>,
                <ItemsGrid goods={dbGoods} addToCart={this.addToCart}/>,
            ]

        );
    }
}


export default App;
