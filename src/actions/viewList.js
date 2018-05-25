import fetch from "cross-fetch";

import {baseAPIURL} from "../configurations/essentials";

export const viewList = (values) => {
    return dispatch => {
        fetch(baseAPIURL+"getItemsList?q="+values, {
                method: 'GET'})
            .then(function (res) {
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
            return res.json();
            })
            .then(response => {
                dispatch(receivedData(response))
            })
            .catch(function (err) {

            });
    };
};

const receivedData = (response) => {
    return {
        type: "viewList",
        payload: response
    };
};