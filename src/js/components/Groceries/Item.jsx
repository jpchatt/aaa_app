import React from 'react';
import { GroceriesConstants } from '../../constants/GroceriesConstants';
import RemoveBtn from './RemoveBtn.jsx';
import CompletedBtn from './CompletedBtn.jsx';

class Item extends React.Component {
    constructor(props) {
        super(props); 
        this.btn = null;
    }

    componentWillMount() {
        this.addRemove(this.props);
    }

    componentWillUpdate(nextProps, nextState) {
        this.addRemove(nextProps);
    }

    addRemove(props) {
        if (props.viewSelected === GroceriesConstants.VIEW_COMPLETED) {
            this.btn = <RemoveBtn itemName={props.itemName} viewSelected={props.viewSelected} />;
        } else {
            this.btn = <CompletedBtn itemName={props.itemName} />;
        }
    }

    render() {
        return (
            <div className="row">
              {this.props.itemName}
              {this.btn}
            </div>
            
        );
    }
}

export default Item;