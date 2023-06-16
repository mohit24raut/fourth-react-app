import "bootstrap/dist/css/bootstrap.css";
import {useState } from "react";
import { useNavigate } from "react-router-dom";


function Registeration()
{
    let navigate = useNavigate();
  let [todo, setTodo]=useState({user:"", fname:"",lname:"",email:"", password:""});

  let changeUsername=(e)=>{
      let newUser={...todo, user:e.target.value};
      setTodo(newUser);
  }
  let changeFirstName=(e)=>{
    let newfname={...todo, fname:e.target.value};
    setTodo(newfname);
  }
  let changeLastName=(e)=>{
    let newlname={...todo, lname:e.target.value};
    setTodo(newlname);
  }
  let changeEmail=(e)=>{
    let newemailr={...todo, email:e.target.value};
    setTodo(newemailr);
  }
  let changePassword=(e)=>{
    let newPassword={...todo, password:e.target.value};
    setTodo(newPassword);
  }


  let loginUser=async ()=>{
    let url=`http://localhost:1000/register?username=${todo.user}&fname=${todo.fname}&lname=${todo.lname}&email=${todo.email}&password=${todo.password}`;
    await fetch(url);

    let default1={...todo,user:"", fname:"",lname:"",email:"", password:""};
    setTodo(default1);
  }
  return(
    <div className="container">
        <input 
            type="text"
            placeholder="username" 
            className="form-control my-3 border-dark"
            value={todo.user}
            onChange={changeUsername}    
        />
        <input 
            type="text"
            placeholder="First Name" 
            className="form-control my-3 border-dark"
            value={todo.fname}
            onChange={changeFirstName}    
        />
        <input 
            type="text"
            placeholder="Last Name" 
            className="form-control my-3 border-dark"
            value={todo.lname}
            onChange={changeLastName}    
        />
        <input 
            type="email"
            placeholder="Email" 
            className="form-control my-3 border-dark"
            value={todo.email}
            onChange={changeEmail}    
        />
        <input 
            type="password"
            placeholder="Password" 
            className="form-control my-3 border-dark"
            value={todo.password}
            onChange={changePassword}    
        />
        <input 
            type="password"
            placeholder="Conform Password" 
            className="form-control my-3 border-dark"
            value={todo.password}
            onChange={changePassword}    
        />
        <input 
            type="button" 
            value="Sign in" 
            className="bg-primary text-light fs-2"
            onClick={loginUser}
        />
    </div>
  )
}

export default Registeration;