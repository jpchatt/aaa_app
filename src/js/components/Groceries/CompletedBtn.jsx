import React from 'react';
import { itemCompleted } from '../../actions/FormActions.js';

class CompletedBtn extends React.Component {

    btnClick() {
        itemCompleted(this.props.itemName);
    }

    render() {
        return (
            <button className="completed pull-right glyphicon glyphicon-ok" onClick={this.btnClick.bind(this)} />
        );
    }
}

export default CompletedBtn;