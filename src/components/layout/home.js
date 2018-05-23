import React from "react";

import "../../styles/_common.scss"

import img1 from "../../assets/images/bg1.jpg"
import img2 from "../../assets/images/bg2.jpg"
import img3 from "../../assets/images/bg3.jpg"

export default () => (
    <div id="home" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#home" data-slide-to="0" className="active">

            </li>
            <li data-target="#home" data-slide-to="1">

            </li>
            <li data-target="#home" data-slide-to="2">

            </li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src={img1}
                     alt="First slide"/>
                <div className="carousel-caption">
                    <h1 className="display-2 custom-display">Save Receipts</h1>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={img2}
                     alt="Second slide"/>
                <div className="carousel-caption">
                    <h1 className="display-2 custom-display">View Items</h1>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={img3}
                     alt="Third slide"/>
                <div className="carousel-caption">
                    <h1 className="display-2 custom-display">Get Insights</h1>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#home" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true">
                    </span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#home" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true">
                    </span>
            <span className="sr-only">Next</span>
        </a>
    </div>
);