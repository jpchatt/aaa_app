import GroceriesDispatcher from '../dispatchers/GroceriesDispatcher';
import { GroceriesConstants } from '../constants/GroceriesConstants';

/**
 * Set the list in the view
 * 
 * @param  {string} selectedList The list to display in the view
 * @return {null}              
 */
export function listChange(selectedList) {
    GroceriesDispatcher.handleViewAction({
        actionType: GroceriesConstants.VIEW_CHANGE,
        selectedList: selectedList
    });
}

/**
 * Remove the provided item from the procided list
 * 
 * @param  {string} selectedList The list to remove from
 * @param  {string} selectedItem The item to remove
 * @return {null}              
 */
export function itemRemove(selectedList, selectedItem) {
    GroceriesDispatcher.handleViewAction({
        actionType: GroceriesConstants.REMOVE_ITEM,
        selectedList: selectedList,
        selectedItem: selectedItem
    });
}

/**
 * Adds newItemText from app state to the provided list
 * 
 * @param  {string} selectedList List to add the new item to
 * @return {null}
 */
export function itemAdd(selectedList) {
    GroceriesDispatcher.handleViewAction({
        actionType: GroceriesConstants.ADD_ITEM,
        selectedList: selectedList,
    });
}

/**
 * Moves the completed item to the completed list
 * 
 * @param  {string} completedItem Item to be moved
 * 
 * @return {null}
 */
export function itemCompleted(completedItem) {
    GroceriesDispatcher.handleViewAction({
        actionType: GroceriesConstants.COMPLETED_ITEM,
        completedItem: completedItem
    });
}

/**
 * Updates newItemText in state
 * 
 * @param  {string} newItemText The text for the new item
 * 
 * @return {null}
 */
export function updateNewItem(newItemText) {
    GroceriesDispatcher.handleViewAction({
        actionType: GroceriesConstants.NEW_ITEM,
        newItemText: newItemText
    });
} 

/**
 * Clears all items from all lists
 * 
 * @return {null}
 */
export function clearItems() {
    GroceriesDispatcher.handleViewAction({
        actionType: GroceriesConstants.CLEAR_ITEMS
    });
} 