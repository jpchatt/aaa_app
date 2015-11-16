import React from 'react';
import ListSelector from './ListSelector.jsx';
import List from './List.jsx';
import ClearAllBtn from './ClearAllBtn.jsx';
import { GroceriesConstants } from '../../constants/GroceriesConstants';

class Lists extends React.Component {

    render() {
        return (
            <div className="panel panel-default col-xs-6 col-md-offset-3">
                <ListSelector viewSelected={this.props.viewSelected} />
                <List viewSelected={this.props.viewSelected} viewName={GroceriesConstants.VIEW_NEEDED} />
                <List viewSelected={this.props.viewSelected} viewName={GroceriesConstants.VIEW_COMPLETED} />
                <ClearAllBtn />
            </div>
            
        );
    }
}

export default Lists;