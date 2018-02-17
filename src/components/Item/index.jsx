import React, {PureComponent} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';



export default class Item extends PureComponent {

    constructor(props) {
        super(props);
        this.item = props.item;
        this.props = props
    }


    btnAction = () => {
        this.props.addToCart(this.item);
    };






    render() {


        return (
            <div className='_item d-flex flex-column align-items-center m-3'>
                <div className='_itemName pt-4'>
                    {this.item.itemName}
                </div>
                <div className='_imgContainer'>
                    <img src={this.item.itemPhoto} alt="gde podushka" className='_itemPhoto'/>
                </div>
                <div className='d-flex'>
                    <div>price $</div>
                    <div>{this.item.itemPrice}</div>
                </div>
                <button className='btn mt-3' onClick={this.btnAction}>BUY</button>
            </div>
        )
    }
}


