import React, {PureComponent} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';
import Item from './../Item'


export default class itemsGrid extends PureComponent {

    constructor(props) {
        super(props);
        this.goods = props.goods;
        this.props = props
    }


    render() {

        return (
            <div className='d-flex flex-wrap'>
                {this.goods.map((el) => {
                    return <Item item={el} addToCart={this.props.addToCart}/>
                })}
            </div>
        )
    }


}

