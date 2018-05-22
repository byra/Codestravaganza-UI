import {combineReducers} from "redux";

import {receipts} from "./addReceipts";
import {list} from "./viewList";

const reducers = combineReducers({
    receipts:receipts,
    list:list
});

export default reducers;