import {v4} from "uuid";

export const receipts = (state = {}, action) =>{
    let itemKeys = null;
    let tempItemKeys = null;
    let tempState = null;
    let toBeRemovedItem = null;

    switch (action.type) {

        case "addNewItem":
            if(state.itemKeys) {
                tempItemKeys = state.itemKeys;
            }
            else {
                tempItemKeys = [];
            }
            itemKeys = tempItemKeys.concat(v4());
            tempState = Object.assign({}, state);
            tempState.itemKeys = itemKeys;
            return tempState;

        case "removeItem":
            toBeRemovedItem = action.payload;
            tempItemKeys = state.itemKeys;
            tempState = Object.assign({}, state);
            tempItemKeys.splice(tempItemKeys.indexOf(toBeRemovedItem), 1);
            tempState.itemKeys = tempItemKeys;
            return tempState;

        default:
            return state;
    }
};