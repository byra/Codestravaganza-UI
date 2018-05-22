import React from "react";
import {Component} from "react";

import Items from "./items";

class AddReceipt extends Component {
    constructor(props) {
        super(props);

    };

    render() {
        return (
            <div className="p-5 p-lg-5 p-md-5 p-sm-5 bg-secondary" id="addReceipts">
                <div className="container-fluid padding">
                    <div className="row text-center">
                        <div className="col-xg-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h1 className="display-4">
                                Add Receipt
                            </h1>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <label htmlFor="Date">Date</label>
                            <input type="date" className="form-control" required/>
                        </div>
                        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <label htmlFor="Receipt Number">Receipt Number</label>
                            <input type="text" className="form-control" placeholder="Receipt Number" required/>
                        </div>
                        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <label htmlFor="Consumer">Consumer</label>
                            <input type="text" className="form-control" placeholder="Consumer" required/>
                        </div>
                        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <label htmlFor="Consumer">Merchant</label>
                            <input type="text" className="form-control" placeholder="Merchant" required/>
                        </div>
                        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <label htmlFor="Address">Address</label>
                            <input type="text" className="form-control" placeholder="Street Name 1" required/>
                        </div>
                        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <label htmlFor="Address" className="text-dark">Optional</label>
                            <input type="text" className="form-control" placeholder="Street Name 2"/>
                        </div>
                        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <label htmlFor="City">City</label>
                            <input type="text" className="form-control" placeholder="City" required/>
                        </div>
                        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <label htmlFor="State">State</label>
                            <input type="text" className="form-control" placeholder="State" required/>
                        </div>
                        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <label htmlFor="Zip Code">Zip Code</label>
                            <input type="number" className="form-control" placeholder="Zip Code" required/>
                        </div>
                        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <label htmlFor="Phone">Phone</label>
                            <input type="tel" className="form-control" placeholder="Phone" required/>
                        </div>

                        <Items/>

                        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <label htmlFor="Tax Amount">Tax Amount</label>
                            <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                                <input type="number" className="form-control" placeholder="Tax Amount" required/>
                            </div>
                        </div>

                        <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <label htmlFor="Total Amount">Total Amount</label>
                            <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                            </div>
                        </div>

                        <div className="form-group col-12  d-flex justify-content-between">
                            <button className="btn btn-dark" type="reset">Reset</button>
                            <button className="btn btn-dark" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
}

export default AddReceipt;