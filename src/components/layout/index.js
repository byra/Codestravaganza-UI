import React, {Fragment} from "react";

import Header from "./header";
import Home from "./home";
import Team from "./Team";
import Contact from "./contact";
import AddReceipt from "../addReceipt";
import ViewList from "../viewList";

export default () => (
    <Fragment>
        <Header/>
        <Home/>
        <AddReceipt/>
        <ViewList/>
        <Team/>
        <Contact/>
    </Fragment>
)