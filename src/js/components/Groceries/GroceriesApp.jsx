import React from 'react';
import GroceriesStore from '../../stores/GroceriesStore.js';
import Header from './Header.jsx';
import Lists from './Lists.jsx';

class GroceriesApp extends React.Component {
    constructor(props) {
        super(props);
        //bind the proper scope to the onchange
        this._onChange = this._onChange.bind(this);
        this.state = GroceriesStore.getGroceries();
    }

    componentDidMount() {
        GroceriesStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        GroceriesStore.removeChangeListener(this._onChange);
    }

    // update state and tigger re-render
    _onChange() {
        this.setState(GroceriesStore.getGroceries());
    }

    render() {
        return (
            <div>
                <Header />
                <Lists viewSelected={this.state.selectedList}/>
            </div>
        );
    }
}

export default GroceriesApp;