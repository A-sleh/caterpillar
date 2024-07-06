import { useState } from "react";
import axios from '../node_modules/axios/index.js'

export default function SignUp() {
    
    const [registerInput,setReginsterInput] = useState({name:'',email:'',password: 0,password_confirmation : 0 } ); 
    const [accept,setAccept] = useState(false);
    const [emailError,setEmailError] = useState("") ;
    
async function submit(event) {
        // to check if the input field are valid
        let flage = false ; 

        // to stop the data from send 
        event.preventDefault() ;

        // the button submite was clicked and then set the state setAcept by true 
        setAccept(true) ;

        // check The Iupt If It Not Vaild 
        if (registerInput.name === '' || registerInput.password.length < 8 || registerInput.password !== registerInput.password_confirmation ) {
            flage = false ;
        }else {
            flage = true ;
        }

        // If The Input Is Valid 
        if( flage ) {
            // Send Data 
            try{
                let res = await axios.post('http://127.0.0.1:8000/api/register',registerInput)
                .then( res => console.log('hello world')) ;
                setEmailError(200)
            }catch (error ){
                setEmailError(error.response.status) ;
            }
        }
    }

    function handelNameInput(currentName) {
        setReginsterInput({...registerInput ,name : currentName.target.value }) ;
    }
    function handelEmailInput(currentEmail) {
        setReginsterInput({...registerInput , email : currentEmail.target.value }) ;
    }
    function handelPasswordInput(currentPassword) {
        setReginsterInput({...registerInput , password : currentPassword.target.value }) ;
    }
    function handelRepeatPasswordInput(currentpassword_confirmation) {
        setReginsterInput({...registerInput , password_confirmation : currentpassword_confirmation.target.value }) ;
    }

    return (
        <div className="formContainer">
            <form className="register" onSubmit={submit}>
                <label htmlFor="name">Name : </label> <br />
                <input type="text" id="name" placeholder="Name..." value={registerInput.name} onChange={(e) => {handelNameInput(e)}}/> <br />
                {
                    accept && registerInput.name === '' && <p className="error">UserName Is Required</p>
                }
                <label htmlFor="email">Email : </label> <br />
                <input type="email"  id="email" placeholder="Email..." value={registerInput.email} onChange={(e) => {handelEmailInput(e)}} /> <br />
                {
                    accept && emailError === 422 && <p className="error">Email already been taken</p>
                }
                <label htmlFor="password">Password : </label> <br />
                <input type="password"  id="password" placeholder="Password..."value={registerInput.password} onChange={(e) => {handelPasswordInput(e)}}  /><br />
                { 
                    registerInput.password.length < 8 && accept && <p className="error">The Password Must Be More Than 8 Charcter</p> 
                }
                <label htmlFor="repeat">Reapat Password : </label> <br />
                <input type="password"  id="repeat" placeholder="Repeat Password..." value={registerInput.password_confirmation}  onChange={(e) => {handelRepeatPasswordInput(e)}} /><br />
                { 
                    registerInput.password !== registerInput.password_confirmation && accept && <p className="error">The Password Dos Not Match</p> 
                }
                <button type="submit">Register</button>
            </form>
        </div>
    )   
}