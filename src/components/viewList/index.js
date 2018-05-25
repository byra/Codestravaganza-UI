import React from "react";
import {Fragment} from "react";

import Title from "./title";
import SelectPage from "./selectPage";
import ItemizedList from "./itemizedList";

export default () =>(
    <Fragment>
        <Title/>
        <SelectPage/>
        <ItemizedList/>
    </Fragment>
);