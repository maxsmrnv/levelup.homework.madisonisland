import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';

import {connect} from 'react-redux'


export class DropdownCart extends Component {


    calcTotalPrice = () => {
        let cartSum = 0;
        for (let i = 0; i < this.props.Cart.length; i++) {
            cartSum += this.props.Cart[i].itemPrice * this.props.Cart[i].qty
        }
        return cartSum
    };

    calcTotalQty = () => {
        let totalQty = 0;
        for (let i = 0; i < this.props.Cart.length; i++) {
            totalQty += this.props.Cart[i].qty
        }
        return totalQty
    };


    actionOnPlusBtn = (item) => {
        this.props.increaseQty(item)
    };

    actionOnMinusBtn = (item) => {
        this.props.decreaseQty(item);
    };


    render() {

        return (
            <div className='d-flex'>
                <a className="cart_ d-flex no-gutters dropdown" href="#">
                    <div className="px-2">
                        <i className="fas fa-shopping-cart"/>
                    </div>
                    <div className="text-uppercase" id="cart">
                        cart
                    </div>
                    <span className='pl-1'>({this.calcTotalQty()})</span>
                    <div className="cart-menu_ dropdown-menu p-3">
                        <div className="d-flex flex-column align-items-center">
                            <div className="cart-msg_ text-uppercase">recently added items</div>
                            <div className='d-flex flex-column' id="added-items">
                                {this.props.Cart && this.props.Cart.map((item, i) => {
                                    return (
                                        <div key={'cart_' + i} className='_cartItemContainer d-flex align-items-center'>
                                            <img src={item.itemPhoto} alt="gde podushka" className='pr-1'/>
                                            <div className='d-flex flex-column align-items-center'>
                                                <div>
                                                    {item.itemName}
                                                </div>
                                                <div>
                                                    ${item.itemPrice}
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <button className='_btnScale btn'
                                                            onClick={() => {
                                                                this.actionOnMinusBtn(item)
                                                            }}>&#9660;
                                                    </button>
                                                    <div className='p-1'>
                                                        QTY:
                                                    </div>
                                                    <div className='p-1'>
                                                        {item.qty}
                                                    </div>
                                                    <button className='_btnScale btn'
                                                            onClick={() => {
                                                                this.actionOnPlusBtn(item)
                                                            }}>&#9650;
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-column h-100'>
                                                <button className='_btnRemove btn'
                                                        onClick={() => {
                                                            this.props.removeItem(item)
                                                        }}>&times;
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div
                                className="subtotal-price_ text-uppercase d-flex justify-content-center items-align-center">
                                <span>cart subtotal</span>
                                <span className="pl-3">$</span>
                                <span className="pl-2" id="subtotal-value">{this.calcTotalPrice()}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}


export default connect(
    state => ({
        Cart: state.Cart
    }),
    dispatch => ({
        increaseQty: (item) => {
            dispatch({type: 'INCREASE_QTY', item: item});
        },
        decreaseQty: (item) => {
            dispatch({type: 'DECREASE_QTY', item: item});
        },
        removeItem: (item) => {
            dispatch({type: 'REMOVE_ITEM', item: item});
        }
    })
)(DropdownCart)

