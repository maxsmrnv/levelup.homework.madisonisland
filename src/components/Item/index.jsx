import React, {PureComponent} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';

import {connect} from 'react-redux'


export class Item extends PureComponent {

    constructor(props) {
        super(props);
        this.item = props.item;
    }

    getItemIndex = (item) => {
        for (let i = 0; i < this.props.Cart.length; i++) {
            if (this.props.Cart[i].itemId === item.itemId) {
                return i
            }
        }
    };

    btnAction = () => {
        const itemIndex = this.getItemIndex(this.item);
        if (itemIndex !== undefined) {
            this.props.increaseQty(this.item, itemIndex)
        }
        else {
            this.props.addToCart(this.item);
        }
    };


    render() {


        return (
            <div className='_item d-flex flex-column align-items-center m-3'>
                <div className='_itemName pt-4'>
                    {this.item.itemName}
                </div>
                <div className='_imgContainer'>
                    <img src={this.item.itemPhoto} alt="no photo" className='_itemPhoto'/>
                </div>
                <div className='d-flex'>
                    <div>price $</div>
                    <div>{this.item.itemPrice}</div>
                </div>
                <button className='btn mt-3' onClick={this.btnAction}>
                    BUY
                </button>
            </div>
        )
    }
}


export default connect(
    state => ({
        Cart: state.Cart
    }),
    dispatch => ({
        addToCart: (item) => {
            dispatch({type: 'ADD_ITEM', item: item});
        },
        increaseQty: (item, itemIndex) => {
            dispatch({type: 'INCREASE_QTY', item: item, itemIndex: itemIndex});
        }
    })
)(Item)