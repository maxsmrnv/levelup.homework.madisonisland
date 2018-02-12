import React, {Component} from 'react';
import './App.css';
import LanguageBar from './components/LanguageBar'
import GetItem from './components/item'

export class App extends Component {
    render() {
        return (
            [<LanguageBar langList={['Русский', 'English']}/>
                ,<GetItem itemPhoto={require('./img/redpillow.png')} itemName="Red Pillow" itemPrice="100"/>

            ]

        );
    }
}

export default App;
