import React, {Component, Fragment} from 'react';
import './App.css';
import LanguageBar from './components/LanguageBar'

import ItemsGrid from './components/ItemsGrid'
import DropdownCart from './components/DropdownCart'


export class App extends Component {

    render() {
        return (
            <Fragment>
                <LanguageBar langList={['Русский', 'English']}/>
                <DropdownCart/>
                <ItemsGrid/>
            </Fragment>

        );
    }
}


export default App;
