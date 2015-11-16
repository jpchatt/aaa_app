import React from 'react';
import { GroceriesConstants } from '../../constants/GroceriesConstants';
import AddBtn from './AddBtn.jsx';
import { updateNewItem } from '../../actions/FormActions.js';

class NewItem extends React.Component {
    constructor(props) {
        super(props); 
        this.removeBtn = null;
    }

    _onChange(event) {
        updateNewItem(event.target.value)
    }

    render() {
        return (
            <div className="row">
                <input type="text" onChange={this._onChange.bind(this)} />
                <AddBtn viewSelected={this.props.viewSelected}/>
            </div>    
        );
    }
}

export default NewItem;
