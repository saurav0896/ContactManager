import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png"

const ContactCard = (props) => {
    const {id , name, email} = props.contact
    return (
        <div className="item" style={{padding: "15px"}}>
                <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                    <Link to={`/contact/${id}`} state= {{contact: props.contact}}>
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>
                </div>
                <div className="right floated content">
                    <Link to={`/contact/${id}/delete`} state= {{contact: props.contact}}>
                      <i className="trash alternate outline red icon" style={{float:"right", marginTop: "10px"}}></i>
                    </Link>
                    <Link to={`/contact/${id}/edit`} state= {{contact: props.contact}}>
                      <i className="edit alternate outline blue icon" style={{float:"right", marginTop: "10px", marginLeft: "10px"}}></i>
                    </Link>
                </div>
                
        </div>
    )
}

export default ContactCard