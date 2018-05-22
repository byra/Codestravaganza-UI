import {v4} from "uuid";

export const receipts = (state = {}, action) =>{
    switch (action.type) {

        case "addNewItem":
            // let itemKeys = null;
            // if(state.receipts) {
            //     itemKeys = state.receipts.itemKeys;
            // }
            // else {
            //     itemKeys = [];
            // }
            //
            // itemKeys.concat(v4());
            // let receipts = Object.assign({itemKeys:itemKeys}, state.receipts); Object.assign({receipts:receipts},state);
            console.log(state);
            return state;

        default:
            return state;
    }
};