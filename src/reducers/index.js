import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'

import {addNewReceipt} from '../actions/addReceipt';
import {viewList} from "../actions/viewList";

const reducers = combineReducers({

    form: formReducer.plugin({
        receipt: (state, action) => {
            switch(action.type) {
                case "addNewReceipt":
                    return undefined;
                default:
                    return state;
            }
        },
        receiptDates:(state, action) => {
            switch(action.type) {
                case "viewList":
                    return undefined;
                default:
                    return state;
            }
        }
    })
});

export default reducers;