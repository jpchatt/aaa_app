import React from 'react';
import Btn from './Btn.jsx';
import { GroceriesConstants } from '../../constants/GroceriesConstants';
import GroceriesStore from '../../stores/GroceriesStore.js';

class ListSelector extends React.Component {

    render() {
        return (
            <div>
                <div className="panel col-xs-6">
                    <Btn viewName={GroceriesConstants.VIEW_NEEDED} 
                         viewSelected={this.props.viewSelected} 
                    />
                </div>
                <div className="panel col-xs-6">
                    <Btn viewName={GroceriesConstants.VIEW_COMPLETED} 
                         viewSelected={this.props.viewSelected} 
                    />
                </div>
            </div>
        );
    }
}

export default ListSelector;