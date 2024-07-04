

import './assets/all.min.css'
import './App.css'
import React, { useState } from 'react';

export default function App() {
    
    // create use state for input form 
    const [formInput,setFormInput ] = useState({firstName : '' , lastName : '' , email : ''})

    function HandelFirstName(currentValue) {
        setFormInput({...formInput, firstName : currentValue })  ;
    }

    function HandelLastName(currentValue) {
        setFormInput({...formInput , lastName : currentValue }) ;
    }

    function HnadelEmail(currentValue) {
        setFormInput({...formInput , email : currentValue }) ;
    }

    return(
        <div style={{height : '100vh' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
            <form onSubmit={
                (event) => {
                    event.preventDefault() ;
                    console.log(formInput) ;
                }
            }>    
                <label htmlFor="firstName">First Name : </label> <br />
                <input type="text" id='firstName' value={formInput.firstName} onChange={(even) => HandelFirstName(even.target.value)}/> <br />
                <label htmlFor="lastName">Last Name : </label> <br />
                <input type="text"  id="lastName" value={formInput.lastName} onChange={ (even) => HandelLastName(even.target.value)} /> <br />
                <label htmlFor="email">Email : </label> <br />
                <input type="email" id='email' value={formInput.email} onChange={(even) => HnadelEmail(even.target.value)} /> <br />
                <button type="submit">sned</button>
            </form>
        </div>
    )
};