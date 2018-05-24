import React from "react";
import {connect} from "react-redux";

import Receipt from "./receipt";
import {addNewReceipt} from "../../actions/addReceipt";

class ContactPage extends React.Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    };

    submit(values){
        event.preventDefault();
        if(values.items){
            this.props.addNewReceipt(values);
        }
        else{
            window.alert("Please add an Item");
        }

    };

    render() {
        return (
            <Receipt onSubmit={this.submit} />
        );
    };
}

const mapStateToProps = () =>{
    return{

    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        addNewReceipt: (values)=>dispatch(addNewReceipt(values))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);