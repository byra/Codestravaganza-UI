import React from "react";
import {Component} from "react";

class Header extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <p className="h2">
                            Receipt Itemizer
                        </p>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#iamBatman">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                    <div className="navbar-collapse collapse" id="iamBatman">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#addReceipts">Add Receipts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#getItems">Get Items</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;