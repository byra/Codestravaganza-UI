import React from "react";

export default () =>(
    <div className="m-5 m-lg-5 m-md-5 m-sm-5" id="getItems">
        <div className="container-fluid padding">
            <div className="row text-center">
                <div className="col-xg-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h1 className="display-4">
                        View Items
                    </h1>
                </div>
            </div>
        </div>
        <form>
            <div className="form-row">
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Date">From:</label>
                    <input type="date" className="form-control" required/>
                </div>
                <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <label htmlFor="Date">To:</label>
                    <input type="date" className="form-control" required/>
                </div>
                <div className="form-group col-12  d-flex justify-content-between">
                    <button className="btn btn-primary" type="reset">Reset</button>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
)