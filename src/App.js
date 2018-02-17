import React, {Component} from 'react';
import './App.css';
import LanguageBar from './components/LanguageBar'
import {_getItem} from './components/Item'
import dbGoods from './db/index.js'
import ItemsGrid from './components/ItemsGrid'

export class App extends Component {
    render() {
        return (
            [<LanguageBar langList={['Русский', 'English']}/>,
                <ItemsGrid goods={dbGoods}/>

            ]

        );
    }
}

export default App;
