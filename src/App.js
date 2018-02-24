import React, {Component} from 'react';
import './App.css';
import LanguageBar from './components/LanguageBar'

import ItemsGrid from './components/ItemsGrid'
import DropdownCart from './components/DropdownCart'


export class App extends Component {

    render() {
        return (
            [<LanguageBar langList={['Русский', 'English']}/>,
                <DropdownCart/>,
                <ItemsGrid/>
            ]

        );
    }
}


export default App;
