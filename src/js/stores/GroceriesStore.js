import { Store } from 'flux';
import { EventEmitter } from 'events';
import GroceriesDispatcher from '../dispatchers/GroceriesDispatcher';
import { GroceriesConstants } from '../constants/GroceriesConstants';

let _groceries = {
    newItemText: null,
    selectedList: GroceriesConstants.VIEW_NEEDED
};

_groceries[GroceriesConstants.VIEW_COMPLETED] = ['apples', 'coffee', 'beer'];
_groceries[GroceriesConstants.VIEW_NEEDED] = ['paper towels', 'laundry detergent', 'bread'];

class GroceriesStoreClass extends EventEmitter {

    //bind the change listener for the app
    addChangeListener(callback) {
        this.on(GroceriesConstants.CHANGE_EVENT, callback);
    }

    //unbind the change listener for the app before unmount
    removeChangeListener(callback) {
        this.on(GroceriesConstants.CHANGE_EVENT, callback);
    }

    //get the groceries state object
    getGroceries() {
        return _groceries;
    }
}



const GroceriesStore = new GroceriesStoreClass();

GroceriesDispatcher.register((payload) => {
    const action = payload.action;

    switch (action.actionType) {

        /**
         * Set the list in the view
         *
         * @param  {string} selectedList The list to display in the view
         */
        case GroceriesConstants.VIEW_CHANGE:

            _groceries.selectedList = action.selectedList;
            GroceriesStore.emit(GroceriesConstants.CHANGE_EVENT);
            break;

        /**
         * Remove the provided item from the procided list
         * 
         * @param  {string} selectedList The list to remove from
         * @param  {string} selectedItem The item to remove
         */
        case GroceriesConstants.REMOVE_ITEM:

            for (var i in _groceries[action.selectedList]) {
                if (_groceries[action.selectedList][i] === action.selectedItem) {
                    _groceries[action.selectedList].splice(i, 1);
                    break;
                }
            }

            GroceriesStore.emit(GroceriesConstants.CHANGE_EVENT);
            break;

        /**
         * Adds newItemText from app state to the provided list
         * 
         * @param  {string} selectedList List to add the new item to
         */
        case GroceriesConstants.ADD_ITEM:

            if (typeof _groceries.newItemText === 'string' && 
                _groceries.newItemText.length > 0 &&
                _groceries[action.selectedList].find(function(element) {return element === _groceries.newItemText;}) === undefined
            ) {
                _groceries[action.selectedList].push(_groceries.newItemText);
            }

            _groceries.newItemText = null;

            GroceriesStore.emit(GroceriesConstants.CHANGE_EVENT);
            break;

        /**
         * Updates newItemText in state
         * 
         * @param  {string} newItemText The text for the new item
         */
        case GroceriesConstants.NEW_ITEM:

            _groceries.newItemText = action.newItemText;

            GroceriesStore.emit(GroceriesConstants.CHANGE_EVENT);
            break;

        /**
         * Clears all items from all lists
         */
        case GroceriesConstants.CLEAR_ITEMS:

            _groceries.newItemText = null;
            _groceries[GroceriesConstants.VIEW_COMPLETED] = [];
            _groceries[GroceriesConstants.VIEW_NEEDED] = [];

            GroceriesStore.emit(GroceriesConstants.CHANGE_EVENT);
            break;

        /**
         * Moves the completed item to the completed list
         * 
         * @param  {string} completedItem Item to be moved
         */
        case GroceriesConstants.COMPLETED_ITEM:

            if (_groceries[GroceriesConstants.VIEW_NEEDED].find(function(element) {return element === action.completedItem;}) !== undefined) {
                for (var i in _groceries[GroceriesConstants.VIEW_NEEDED]) {
                    if (_groceries[GroceriesConstants.VIEW_NEEDED][i] === action.completedItem) {
                        _groceries[GroceriesConstants.VIEW_NEEDED].splice(i, 1);
                        break;
                    }
                }
            }

            if (_groceries[GroceriesConstants.VIEW_COMPLETED].find(function(element) {return element === action.completedItem;}) === undefined) {
                _groceries[GroceriesConstants.VIEW_COMPLETED].push(action.completedItem)
            }

            GroceriesStore.emit(GroceriesConstants.CHANGE_EVENT);
            break;

        default:
            return true;
    }   
});

export default GroceriesStore;