import React from "react";
import {Fragment} from "react";

import Title from "./title";
import SelectPage from "./selectPage";
import ResultList from "./resultList";

export default () =>(
    <Fragment>
        <Title/>
        <SelectPage/>
        <ResultList/>
    </Fragment>
);