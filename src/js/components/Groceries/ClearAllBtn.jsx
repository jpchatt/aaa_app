import React from 'react';
import { clearItems } from '../../actions/FormActions.js';

class ClearAllBtn extends React.Component {

    btnClick() {
        clearItems(this.props.itemName);
    }

    render() {
        return (
            <button className="btn btn-warning" onClick={this.btnClick.bind(this)} >
                Clear All Items
            </button>
        );
    }
}

export default ClearAllBtn;