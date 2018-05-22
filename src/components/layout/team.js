import React from "react";
import {Component} from "react";

import BW from "../../assets/images/batman.jpg"

class Team extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className="p-4 bg-secondary" id="team">
                <div className="container-fluid padding">
                    <div className="row text-center">
                        <div className="col-xg-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h1 className="display-4">
                                Meet the Team
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container-fluid padding">
                    <div className="row padding">
                        <div className="col-md-4 p-lg-5 p-5 p-sm-5">
                            <div className="card">
                                <img className="card-img-top" src={BW}/>
                                <div className="card-body">
                                    <h4 className="card-title">Manikanta</h4>
                                    <p className="card-text">Manikanta is an excellent UI Developer</p>
                                    <a href="#" className="btn btn-outline-secondary">See Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-lg-5 p-5 p-sm-5">
                            <div className="card">
                                <img className="card-img-top" src={BW}/>
                                <div className="card-body">
                                    <h4 className="card-title">Mahesh</h4>
                                    <p className="card-text">Mahesh is an excellent Backend Developer</p>
                                    <a href="#" className="btn btn-outline-secondary">See Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-lg-5 p-5 p-sm-5">
                            <div className="card">
                                <img className="card-img-top" src={BW}/>
                                <div className="card-body">
                                    <h4 className="card-title">Byra</h4>
                                    <p className="card-text">Byra is an excellent Data Engineer</p>
                                    <a href="#" className="btn btn-outline-secondary">See Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}



export default Team;