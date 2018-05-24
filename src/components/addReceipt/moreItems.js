import React from "react";
import {Fragment} from "react";
import {Field} from "redux-form";

const MoreItems = ({fields}) => (
    <Fragment>
        {fields.map((item, index) => (
            <Fragment key={index}>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Item Name">Item #{index + 1} Name</label>
                    <Field type="text" name={`${item}.itemName`} component="input" className="form-control"
                           placeholder="Item Name"
                           value={null} required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Item Category">Item #{index + 1} Category</label>
                    <Field type="text" name={`${item}.itemCategory`} component="input" className="form-control"
                           placeholder="Item Category" value={null} required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Item Quantity">Item #{index + 1} Quantity</label>
                    <Field type="text" name={`${item}.itemQuantity`} component="input" className="form-control"
                           placeholder="Item Quantity" value={null} required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Item Total Cost">Item #{index + 1} Total Cost</label>
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                        <Field type="text" name={`${item}.itemTotalCost`} component="input" className="form-control"
                               placeholder="Item Total Cost"
                               value={null} required/>
                    </div>
                </div>

                <div className="form-group col-12  d-flex justify-content-end text-hide">
                    <button type="button" className="btn btn-dark" onClick={() => fields.remove(index)}>Remove</button>
                </div>
            </Fragment>
        ))}
        <div className="form-group col-12  d-flex justify-content-center">
            <button className="btn btn-dark" type="button" onClick={() => fields.push({})}>Add an Item</button>
        </div>
    </Fragment>
);
export default MoreItems;