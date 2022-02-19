import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const getSearchData = (e) => {
        props.setSearchValue(e.target.value)
    }
    const renderContactList = props.contacts.map((contact, index) =>{
        return (
               <ContactCard contact = {contact}  key={index}/>
        )
    })
    return ( 
      <div className="ui card" style={{width: "100%", padding: "10px", marginTop: "20px"}}>
          <div className="content" style={{width: "100%"}}> 
            <Link to="/add">
                <button className="ui button blue  right floated">Add Contact</button>
            </Link>
            <h1 className="header" style={{fontSize: "25px"}} >Contact List</h1>
          </div>
          <div className="ui search" >
              <div className="ui input icon focus" style={{width: "100%"}}>
                  <input type="search" placeholder="Search Contacts" className="prompt" value={props.searchValue} onChange={getSearchData} />
                  <i className="search icon"></i>
              </div>
          </div>
       <div className="ui middle aligned divided list">
             {props.contacts.length > 0 ? renderContactList : 
             
              <div className="ui center aligned meta">
                <span>No contacts available</span>
            </div>}
        </div>
      </div>
    )

}

export default ContactList