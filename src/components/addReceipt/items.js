import React from "react";
import {Component, Fragment} from "react";
import {connect} from "react-redux";

import AddItems from "./addItems";
import Item from "./item";

import {newItem} from "../../actions/addReceipt";

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {itemKeys: []};
    };

    render() {
        return (
            <Fragment>
                <Item/>
                <AddItems itemKeys={this.props.itemKeys}/>
                <div className="form-group col-12  d-flex justify-content-center">
                    <button className="btn btn-dark" type="button" onClick={this.props.addNewItem()}>Add an Item</button>
                </div>
            </Fragment>
        );
    };
}

const mapStateToProps = (state) =>{
    return{
        itemKeys:state.itemKeys
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        addNewItem:() => dispatch(newItem())
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Items);