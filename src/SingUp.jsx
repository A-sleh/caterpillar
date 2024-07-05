import { useState } from "react";


export default function SignUp() {
    
    const [registerInput,setReginsterInput] = useState({name:'',email:'',password: 0,repeatPassword : 0 }); 
    
    function submit(event) {
        event.preventDefault() ;
        console.log(registerInput)
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
    function handelRepeatPasswordInput(currentRepeatPassword) {
        setReginsterInput({...registerInput , repeatPassword : currentRepeatPassword.target.value }) ;
    }

    return (
        <div className="formContainer">
            <form className="register" onSubmit={submit}>
                <label htmlFor="name">Name : </label> <br />
                <input type="text" id="name" placeholder="Name..." value={registerInput.name} onChange={(e) => {handelNameInput(e)}}/> <br />
                <label htmlFor="email">Email : </label> <br />
                <input type="email"  id="email" placeholder="Email..." value={registerInput.email} onChange={(e) => {handelEmailInput(e)}} /> <br />
                <label htmlFor="password">Password : </label> <br />
                <input type="password"  id="password" placeholder="Password..."value={registerInput.password} onChange={(e) => {handelPasswordInput(e)}}  /><br />
                <label htmlFor="repeat">Reapat Password : </label> <br />
                <input type="password"  id="repeat" placeholder="Repeat Password..." value={registerInput.repeatPassword}  onChange={(e) => {handelRepeatPasswordInput(e)}} /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    )   
}