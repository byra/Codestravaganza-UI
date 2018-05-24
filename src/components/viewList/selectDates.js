import React from "react";
import {Field, reduxForm} from "redux-form";


let SelectDates =  (props) => {

    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <div className="m-5 m-lg-5 m-md-5 m-sm-5" id="getItems">

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                        <label htmlFor="Date">From:</label>
                        <Field type="date" name="fromDate" component="input" className="form-control" value={null}
                               required/>
                    </div>
                    <div className="form-group col-xg-6 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                        <label htmlFor="Date">To:</label>
                        <Field type="date" name="toDate" component="input" className="form-control" value={null}
                               required/>
                    </div>
                    <div className="form-group col-12  d-flex justify-content-between">
                        <button className="btn btn-dark" type="reset" disabled={pristine || submitting} onClick={reset}>Reset</button>
                        <button className="btn btn-dark" type="submit" disabled={submitting} >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

SelectDates = reduxForm({
    form: 'receiptDates'
})(SelectDates);

export default SelectDates;