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

    addToCart = (item) => {
        // this.setState({
        //     cartStorage: [...this.state.cartStorage, item]
        // })

        this.setState(prevState => ({
            cartStorage: [...prevState.cartStorage, item]
        }))
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
