import React from "react";
import {Component, Fragment} from "react";
import {connect} from "react-redux";

import Item from "./item";
import {newItem, removeItem} from "../../actions/addReceipt";

class MoreItems extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.itemKeys){
            return(
                <Fragment>
                    {
                        this.props.itemKeys.map((identifier)=>(
                            <Fragment key={identifier}>
                                <Item/>
                                <div className="form-group col-12  d-flex justify-content-end text-hide">
                                    <button type="button" className="btn btn-dark" onClick={()=>this.props.removeItem(identifier)}>Remove</button>
                                </div>
                            </Fragment>
                        ))
                    }
                    <div className="form-group col-12  d-flex justify-content-center">
                        <button className="btn btn-dark" type="button" onClick={()=>this.props.addNewItem()}>Add an Item</button>
                    </div>
                </Fragment>

            );
        }
        else {
            return(
                <div className="form-group col-12  d-flex justify-content-center">
                    <button className="btn btn-dark" type="button" onClick={()=>this.props.addNewItem()}>Add an Item</button>
                </div>
            )
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
        addNewItem:() => dispatch(newItem()),
        removeItem:(identifier) => dispatch(removeItem(identifier))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreItems);