import React, {PureComponent} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';

import {connect} from 'react-redux'


export class DropdownCart extends PureComponent {


    calcTotalPrice = () => {
        let cartSum = 0;
        for (let i = 0; i < this.props.Cart.length; i++) {
            cartSum += this.props.Cart[i].itemPrice * this.props.Cart[i].qty
        }
        return cartSum
    };

    getItemIndex = (item) => {
        for (let i = 0; i < this.props.Cart.length; i++) {
            if (this.props.Cart[i].itemId === item.itemId) {
                return i
            }
        }
    };

    actionOnPlusBtn = (item) => {
        const itemIndex = this.getItemIndex(item);
        this.props.increaseQty(item, itemIndex)
    };

    actionOnMinusBtn = (item) => {
        const itemIndex = this.getItemIndex(item);
        this.props.decreaseQty(item, itemIndex);
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
                    <div className="cart-menu_ dropdown-menu p-3">
                        <div className="d-flex flex-column align-items-center">
                            <div className="cart-msg_ text-uppercase">recently added items</div>
                            <div className='d-flex flex-column' id="added-items">
                                {this.props.Cart && this.props.Cart.map((item) => {
                                    return (
                                        <div className='_cartItemContainer d-flex align-items-center'>
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
                                                            this.props.removeItem(this.getItemIndex(item))
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
        increaseQty: (item, itemIndex) => {
            dispatch({type: 'INCREASE_QTY', item: item, itemIndex: itemIndex});
        },
        decreaseQty: (item, itemIndex) => {
            dispatch({type: 'DECREASE_QTY', item: item, itemIndex: itemIndex});
        },
        removeItem: (itemIndex) => {
            dispatch({type: 'REMOVE_ITEM', itemIndex: itemIndex});
        }
    })
)(DropdownCart)

