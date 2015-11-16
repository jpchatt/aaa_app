import React from 'react';
import GroceriesStore from '../../stores/GroceriesStore.js';
import { listChange } from '../../actions/FormActions.js';
import { GroceriesConstants } from '../../constants/GroceriesConstants';

class Btn extends React.Component {

    componentWillMount() {
        this.setStyle(this.props);
    }

    componentWillUpdate(nextProps, nextState) {
        this.setStyle(nextProps);
    }

    /**
     * Sets the needed classes for the element
     * @param {object} props The props to be used
     */
    setStyle(props) {
        this.style = 'btn btn-default btn-block';

        if (props.viewSelected === props.viewName) {
            if (props.viewSelected === GroceriesConstants.VIEW_NEEDED) {
                this.style += ' btn-danger';
            } else if (props.viewSelected === GroceriesConstants.VIEW_COMPLETED) {
                this.style += ' btn-success';
            }
        }
    }

    btnClick() {
        listChange(this.props.viewName);
    } 

    render() {
        return (
            <button 
                onClick={this.btnClick.bind(this)}
                className={this.style}> 
                {this.props.viewName}
            </button>
        );
    }
}

export default Btn;