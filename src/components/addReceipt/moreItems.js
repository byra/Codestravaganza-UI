import React from "react";
import {Component, Fragment} from "react";
import {connect} from "react-redux";

import Item from "./item";
import {removeItem} from "../../actions/addReceipt";

class MoreItems extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.itemKeys){
            return(
                this.props.itemKeys.map((identifier)=>(
                    <Fragment key={identifier}>
                        <Item/>
                        <div className="form-group col-12  d-flex justify-content-end text-hide">
                            <button type="button" className="btn btn-dark" onClick={()=>this.props.removeItem(identifier)}>Remove</button>
                        </div>
                    </Fragment>
                ))
            );
        }
        else {
            return(null)
        }
    }

}

const mapStateToProps = (state) =>{
    return{
        itemKeys:state.receipts.itemKeys
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        removeItem:(identifier) => dispatch(removeItem(identifier))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreItems);