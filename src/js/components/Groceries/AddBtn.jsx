import React from 'react';
import { itemAdd } from '../../actions/FormActions.js';

class AddBtn extends React.Component {
    
    btnClick() {
        itemAdd(this.props.viewSelected);
    }

    render() {
        return (
            <button className="btn btn-primary pull-right" onClick={this.btnClick.bind(this)}>
                Save
            </button>
        );
    }
}

export default AddBtn;