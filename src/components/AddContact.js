import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddContact = (props) => {
        let navigate = useNavigate()
        const [ state , setState] = useState({ name: "", email: ""})

        const add = (e) => {
            e.preventDefault();
            if(state.name === "" || state.email === "") {
                alert ("All fields are mandatory")
                return 
            }

            props.addContactHandler(state);
            setState({ name: "", email: ""})
            navigate("/")
            
        }
        const setName = (e) => {
            let updatedValue = {};
            updatedValue = {name:e.target.value};
            setState(state => ({
                ...state,
                ...updatedValue
                }));
        }
        const setEmail = (e) => {
            let updatedValue = {};
            updatedValue = {email:e.target.value};
            setState(state => ({
                ...state,
                ...updatedValue
                }));
        }

        return (
            <div className="ui main center" style={{border: "1px solid grey", padding: "20px", backgroundColor:"white"}}>
                <h2 className="ui aligned center header">Add Contact</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" style={{border:"1px solid grey"}} name="name" value={state.name} placeholder="Name" onChange={ setName} />
                    </div>
                    <div className="field">
                        <label>Emaill</label> 
                        <input type="email" style={{border:"1px solid grey"}} name="email" value={state.email} placeholder="Email"  onChange={ setEmail} />
                    </div>
                    <div style={{display: "flex"}}>
                    <button className="ui button blue">Add Contact</button>
                    <button className="ui button red" onClick={() => navigate("/")}>Cancel</button>
                    </div>
                </form>
            </div>
        )

}

export default AddContact