import React, {PureComponent} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';


export default class DropdownCart extends PureComponent {

    constructor(props) {
        super(props);
        this.props = props;
    }

    calcTotalPrice= () =>{
        let cartSum=0;
        for (let i=0;i<this.props.cartStorage.length;i++){
            cartSum+=this.props.cartStorage[i].itemPrice*this.props.cartStorage[i].qty
        }
        return cartSum
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
                                {this.props.cartStorage && this.props.cartStorage.map((item) => {
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
                                                <div className='d-flex'>
                                                    <div>
                                                        QTY:
                                                    </div>
                                                    <div>
                                                        {item.qty}
                                                    </div>
                                                </div>
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

