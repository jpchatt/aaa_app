import React from 'react';
import GroceriesStore from '../../stores/GroceriesStore.js';
import { GroceriesConstants } from '../../constants/GroceriesConstants';
import Item from './Item.jsx';
import NewItem from './NewItem.jsx';

class List extends React.Component {

    componentWillMount() {
        this.setStyle(this.props);
        this.items = this.getItems(this.props);
    }

    componentWillUpdate(nextProps, nextState) {
        this.setStyle(nextProps);
        this.items = this.getItems(nextProps);
    }

    getItems(props) {
        var items = [];
        var store = GroceriesStore.getGroceries();
        var viewName = props.viewName;

        for (var item of store[viewName]) {
            items.push(<Item itemName={item} viewSelected={props.viewSelected} />);
        }

        if (props.viewSelected === GroceriesConstants.VIEW_NEEDED) {
            items.push(<NewItem viewSelected={props.viewSelected} />)
        }

        return items;
    }

    setStyle(props) {
        this.style = 'panel panel-default col-xs-12';

        if (props.viewSelected !== props.viewName) {
            this.style += ' hidden';
        }
    }

    render() {
        return (
            <div className={this.style}>
                {this.items}
            </div>
            
        );
    }
}

export default List;