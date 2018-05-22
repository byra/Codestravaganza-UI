import React from "react";
import {Component} from "react";
import {connect} from "react-redux";

import {removeItem} from "../../actions/addReceipt"

class RemoveButton extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        console.log(props);
        return (
            <div className="form-group col-12  d-flex justify-content-end text-hide">
                <button type="button" className="btn btn-dark" onClick={this.props.removeItem}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{};

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem:()=>dispatch(removeItem())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton);