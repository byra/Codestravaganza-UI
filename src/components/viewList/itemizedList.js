import React from "react";
import {Component} from "react";
import {connect} from "react-redux";

import {clear} from "../../actions/viewList";

class ItemizedList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        if (this.props.itemizedList) {
            return (
                <div className="container-fluid padding">
                    <div className="row text-center">
                        <div className="col-xg-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Consumer</th>
                                    <th scope="col">Total in Selected Dates</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Object.keys(this.props.itemizedList).map(key=>(
                                <tr key={key}>
                                <th scope="row">{key}</th>
                                <td>$ {this.props.itemizedList[key]}</td>
                                </tr>
                                ))}
                                </tbody>
                            </table>
                            <div className="form-group col-12  d-flex justify-content-end">
                                <button className="btn btn-dark" type="button" onClick={()=>this.props.clear()}>Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        itemizedList: state.list.itemizedList
    };

};

const mapDispatchToProps = (dispatch) => {
    return {
        clear: ()=>dispatch(clear())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemizedList);