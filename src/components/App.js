import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import { v4 as uuid } from 'uuid';
import axios from "../services/AxiosConfig"
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactDetails from './ContactDetails';
import DeleteContainer from './DeleteContainer';
import EditContact from './EditContact';

function App() {

  const [ contacts , setContacts] = useState([]);
  const [ searchTerm, setSearchTerm] = useState("")
  const [ searchResult, setSearchResult] = useState([])

  //Retrieve Data from API
  const retrieveContactData = async () => {
    const response = await axios.get("/contacts")
    return response.data
  }
  
  const searchHandler =  (term) => {
    setSearchTerm(term);
    
  }


  const addContactHandler = async (contact) => {
    const payload = {
      id : uuid(),
      name: contact.name,
      email: contact.email
    }

    const response = await axios.post("/contacts", payload)
    setContacts([...contacts, response.data])
  }


  const deleteContact = async (id) => {
     
      await axios.delete(`/contacts/${id}`)
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id
      })
      setContacts(newContactList)
  }

  const editContact = async (contact) => {
    const response = await axios.put(`/contacts/${contact.id}`, contact)
    const { id, name, email } = await response.data
    setContacts(contacts.map((contact) => {
      return contact.id === id ? {...response.data} : contact
    }))
  }

  useEffect(()=>{

    // const retrieveContact = JSON.parse(localStorage.getItem("contacts"));
    // if(retrieveContact) setContacts(retrieveContact)

    const getAllData = async () => {
      const allContacts = await retrieveContactData()
      if(allContacts) setContacts(allContacts);
    }

    getAllData()
 },[])

  useEffect(()=>{
    const getSearchResult = () => {
      if(searchTerm !== ""){
        const newData = contacts.filter((item) => {
            return (
              Object.values(item).join().toLowerCase().includes(searchTerm.toLowerCase())
            )
        })
  
        setSearchResult(newData)
      }else {
        setSearchResult(contacts)
      }
    }
    getSearchResult()
  },[searchTerm])
  

  return (
    <div className='ui card container aligned center' style={{width:"40%", marginTop: "20px", backgroundColor: "transparent", padding: "20px"}}>
      <Header />
      <Router>
        <Routes>
          <Route path= "/" element={<ContactList contacts = { searchTerm.length < 1 ? contacts : searchResult } searchValue={searchTerm} setSearchValue={searchHandler} />} />
          <Route path= "/add" element={<AddContact addContactHandler = {addContactHandler} />} />
          <Route path= "/contact/:id" element={<ContactDetails />} />
          <Route path='/contact/:id/delete' element={<DeleteContainer getContactDetail={deleteContact} />} />
          <Route path="/contact/:id/edit" element={<EditContact editContactHandler={editContact}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
