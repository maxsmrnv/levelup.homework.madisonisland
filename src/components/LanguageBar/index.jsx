import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'


let selectList = (list) => {
    return list.map((el) => <option>{el}</option>);
};

export default function LanguageBar(props) {

    let langList = props.langList;

    return (
        <div className='_languageBar d-flex justify-content-center'>
            <div className='d-flex justify-content-between px-5 py-2'>
                <div>
                    <span className='pr-1'>Your Language:</span>
                    <select>
                        {selectList(langList)}
                    </select>
                </div>
                <span>Welcome</span>
            </div>
        </div>
    )
}