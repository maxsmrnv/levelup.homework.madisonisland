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
        console.log('check');

    };

    addToCart = (item) => {
        // this.setState({
        //     cartStorage: [...this.state.cartStorage, item]
        // })
        if (this.state.cartStorage.length) {

            for (let i = 0; i < this.state.cartStorage.length; i++) {
                if (item.itemId === this.state.cartStorage[i].itemId) {
                    console.log(this.state.cartStorage);
                    this.setState({
                         qty: this.state.cartStorage[i].qty += 1
                        // cartStorage: this.state.cartStorage[i].qty+1
                    });
                    console.log(this.state.cartStorage)

                }
            }
        }
        else {
            this.setState(prevState => ({
                cartStorage: [...prevState.cartStorage, {...item, qty: 1}]
            }))
        }


    };


    getCartItems = () => {
        console.log(this.state.cartStorage)

    };

    render() {
        return (
            [<LanguageBar langList={['Русский', 'English']}/>,
                <DropdownCart cartStorage={this.state.cartStorage} getCart={this.getCartItems}/>,
                <ItemsGrid goods={dbGoods} addToCart={this.addToCart}/>,
            ]

        );
    }
}

export default App;
