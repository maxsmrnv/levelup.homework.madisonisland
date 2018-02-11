import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {LanguageBar} from './components/LanguageBar/LanguageBar'

export class App extends Component {
    render() {
        return (
            <LanguageBar langList={['Русский','English']}/>
        );
    }
}

export default App;
