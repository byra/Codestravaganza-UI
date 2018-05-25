import axios from "axios";

import {baseAPIURL} from "../configurations/essentials";

export const viewList = (values) => {
    return dispatch => {
        axios.get(baseAPIURL + "/receipt/getItemsList", {
            params: {
                fromDate: values.fromDate,
                toDate:values.toDate
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