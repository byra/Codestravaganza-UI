import React from "react";
import {Fragment} from "react";

export default () => (
    <Fragment>
        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
            <label htmlFor="Item Name">Item Name</label>
            <input type="text" className="form-control" placeholder="Item Name" required/>
        </div>
        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
            <label htmlFor="Item Category">Item Category</label>
            <input type="text" className="form-control" placeholder="Item Category" required/>
        </div>
        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
            <label htmlFor="Item Quantity">Item Quantity</label>
            <input type="text" className="form-control" placeholder="Item Quantity" required/>
        </div>
        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
            <label htmlFor="Item Cost">Item Cost</label>
            <div className="input-group-prepend">
                <span className="input-group-text">$</span>
                <input type="text" className="form-control" placeholder="Item Cost" required/>
            </div>
        </div>

    </Fragment>
);