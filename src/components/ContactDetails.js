import React from "react";
import user from "../images/userProfile.png"
import { Link, useLocation } from "react-router-dom";

const ContactDetails = () => {
    let location = useLocation()
    let userDetail = location.state.contact
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user profile" height="200px"/>
                </div>
                <div className="content">
                    <div className="header">{userDetail.name}</div>
                    <div className="meta">
                        <h4>{userDetail.email}</h4>
                    </div>
                    <div className="description">
                        {userDetail.name} is an interior designer living in India.
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                        Joined in 2013
                    </span>
                    <span>
                        <i className="user icon"></i>
                        75 Friends
                    </span>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                 <button className="ui button blue center ">Go Back</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetails