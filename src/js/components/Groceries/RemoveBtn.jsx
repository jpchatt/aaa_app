import React from 'react';
import { itemRemove } from '../../actions/FormActions.js';

class RemoveBtn extends React.Component {

    btnClick() {
        itemRemove(this.props.viewSelected, this.props.itemName);
    }

    render() {
        return (
            <button className="remove glyphicon glyphicon-remove pull-right" onClick={this.btnClick.bind(this)} />
        );
    }
}

export default RemoveBtn;