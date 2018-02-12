import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';


export default function GetItem(props) {

    let itemPhoto = props.itemPhoto;
    let itemName = props.itemName;
    let itemPrice = props.itemPrice;

    return (
        console.log(itemPhoto),
        <div className='_item d-flex flex-column align-items-center m-3'>
            <div className='_itemName pt-4'>
                {itemName}
            </div>
            <img src={require('../../img/redpillow.png')} alt="gde podushka" className='_itemPhoto'/>
            <div className='d-flex'>
                <div>price $</div>
                <div>{itemPrice}</div>
            </div>
        </div>
    )
}