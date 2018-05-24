import React from "react";
import {Field, FieldArray, reduxForm} from "redux-form";

import MoreItems from "./moreItems";

let Receipt = (props) => {

    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Date">Date</label>
                    <Field type="date" name="date" component="input" className="form-control" value={null} required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Receipt Number">Receipt Number</label>
                    <Field type="text" name="receiptNumber" component="input" className="form-control" placeholder="Receipt Number" value={null} required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Consumer">Consumer</label>
                    <Field type="text" name="consumer" component="input" className="form-control" placeholder="Consumer" value={null} required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Merchant">Merchant</label>
                    <Field type="text" name="merchant" component="input" className="form-control" placeholder="Merchant" value={null} required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Address">Address</label>
                    <Field type="text" name="address1" component="input" className="form-control" placeholder="Street Name 1" value={null} required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Address" className="text-dark">Optional</label>
                    <Field type="text" name="address2" component="input" className="form-control" placeholder="Street Name 2" value={null} required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="City">City</label>
                    <Field type="text" name="city" component="input" className="form-control" placeholder="City" value={null} required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="State">State</label>
                    <Field type="text" name="state" component="input" className="form-control" placeholder="State" value={null} required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Zip Code">Zip Code</label>
                    <Field type="number" name="zipCode" component="input" className="form-control" placeholder="Zip Code" value={null} required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Phone">Phone</label>
                    <Field type="number" name="phone" component="input" className="form-control" placeholder="Phone" required/>
                </div>

                <FieldArray name="items" component={MoreItems} />

                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Tax Amount">Tax Amount</label>
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                        <Field type="number" name="taxAmount" component="input" className="form-control" placeholder="Tax Amount" value={null} required/>
                    </div>
                </div>

                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Total Amount">Total Amount</label>
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                        <Field type="number" name="totalAmount" component="input" className="form-control" placeholder="Total Amount" value={null} required/>
                    </div>
                </div>

                <div className="form-group col-12  d-flex justify-content-between">
                    <button className="btn btn-dark" type="reset" disabled={pristine || submitting} onClick={reset}>Reset</button>
                    <button className="btn btn-dark" type="submit" disabled={submitting} >Submit</button>
                </div>
            </div>
        </form>
    );
};

Receipt = reduxForm({
    form: 'receipt'
})(Receipt);

export default Receipt;