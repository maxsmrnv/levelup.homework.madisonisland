import React, {PureComponent} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';
import Item from './../Item'
import {connect} from "react-redux";


export class itemsGrid extends PureComponent {


    render() {

        return (
            <div className='d-flex flex-wrap'>
                {this.props.Items.map((el,i) => {
                    return <Item key={'item_'+i} item={el}/>
                })}
            </div>
        )
    }
}

export default connect(
    state => ({
        Items: state.Items
    }),
    dispatch => ({})
)(itemsGrid)