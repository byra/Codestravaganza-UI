import axios from "axios";

import {baseAPIURL} from "../configurations/essentials";

export const viewList = (values) => {
    return dispatch => {
        axios.get(baseAPIURL + "/receipt/getItemsList", {
            params: {
                duration: values
            }
        }).then(function (response) {
            dispatch(receivedData(response))
        }).catch(function (error) {
                console.log(error);
            });
    };
};

const receivedData = (response) => {
    return {
        type: "viewList",
        payload: response
    };
};