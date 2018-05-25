import axios from "axios";

import {baseAPIURL} from "../configurations/essentials";

export const addNewReceipt = (values) => {
    return dispatch => {
        axios.post(baseAPIURL + "/receipt/addReceipts", {
            receipt: values
        }).then(function (response) {
            dispatch(clearReceiptForm());
            dispatch(receivedData(response))
        }).catch(function (error) {
                console.log(error);
            });
    };

};

export const clearReceiptForm = () => {
    return {
        type: "clearReceiptForm",
        payload: null
    };
};

export const receivedData = (response) => {
    return {
        type: "status",
        payload: response.data.message
    };
};