import React, {Component} from 'react';


export class LanguageBar extends Component {

    constructor(props) {
        super(props);
        this.langList = this.props.langList;
    }


    static getListView = (list) => {
        return list.map((el) => <option>{el}</option>);
    };


}

render(){
    return (
        <select>
            <option>{getListView}({this.langList[0]})</option>
        </select>
    )
}
}

export default LanguageBar