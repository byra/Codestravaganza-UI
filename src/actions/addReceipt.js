import axios from "axios";

import {baseAPIURL} from "../configurations/essentials";

export const addNewReceipt = (values) => {
    return dispatch => {
        axios.post(baseAPIURL + "/receipt/addReceipts", {
            receipt: values
        }).then(function (response) {
            dispatch(receivedData(response))
        }).catch(function (error) {
                console.log(error);
            });
    };

};

const receivedData = (response) => {
    return {
        type: "addNewReceipt",
        payload: null
    };
};