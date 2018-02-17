import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';
import {_getItem} from './../Item'




export default class itemsGrid extends Component {

    constructor(props) {
        super(props);
        this.goods = props.goods;
    }



    render() {

        return (

            this.goods.map((el)=>{
                return _getItem(el)
            })
        )
    }





}

