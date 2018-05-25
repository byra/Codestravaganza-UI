import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'

import {receipts} from "./addReceipt";
import {list} from "./viewList";

import {clearReceiptForm} from '../actions/addReceipt';
import {clearViewListForm} from "../actions/viewList";

const reducers = combineReducers({
    receipts:receipts,
    list:list,
    form: formReducer.plugin({
        receipt: (state, action) => {
            switch(action.type) {
                case "clearReceiptForm":
                    return undefined;
                default:
                    return state;
            }
        },
        receiptDates:(state, action) => {
            switch(action.type) {
                case "clearViewListForm":
                    return undefined;
                default:
                    return state;
            }
        }
    })
});

export default reducers;