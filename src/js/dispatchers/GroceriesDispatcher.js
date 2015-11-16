import { Dispatcher } from 'flux';
import { GroceriesConstants } from '../constants/GroceriesConstants';


/**
 * Flux dispatcher class
 */
class GroceriesDispatcherClass extends Dispatcher {

    //Dispatches onChange events
    handleViewAction(action) {
        this.dispatch({
            source: GroceriesConstants.VIEW_ACTION,
            action: action,
        });
    }

}

const GroceriesDispatcher = new GroceriesDispatcherClass();

export default GroceriesDispatcher;