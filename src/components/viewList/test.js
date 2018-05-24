import React from "react";
import {connect} from "react-redux";

import SelectDates from "./selectDates";
import {viewList} from "../../actions/viewList";

class Test extends React.Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind (this);
    };

    submit(values){
        event.preventDefault();
        this.props.viewList(values);
    };

    render() {
        return (
            <SelectDates onSubmit={this.submit} />
        );
    };
}
const mapStateToProps = () =>{
    return{

    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        viewList: (values)=>dispatch(viewList(values))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);