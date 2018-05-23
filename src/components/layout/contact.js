import React from "react";
import { SocialIcon } from 'react-social-icons';

export default ()=>(
    <div className="container-fluid padding bg-dark p-4" id="contact">
        <div className="row text-center padding">
            <div className="col-xg-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h2>Contact Us</h2>
            </div>
            <div className="col-xg-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <SocialIcon className="m-2" url="http://facebook.com"/>
                <SocialIcon className="m-2" url="http://twitter.com"/>
                <SocialIcon className="m-2" url="http://linkedin.com"/>
                <SocialIcon className="m-2" url="http://youtube.com"/>
                <SocialIcon className="m-2" url="http://plus.google.com"/>
                <SocialIcon className="m-2" url="http://reddit.com"/>
                <SocialIcon className="m-2" url="http://tumblr.com"/>
            </div>
        </div>
    </div>
);