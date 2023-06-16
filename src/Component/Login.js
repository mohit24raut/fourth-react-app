import "bootstrap/dist/css/bootstrap.css";
import {useState } from "react";

function Login()
{
  let [todo, setTodo]=useState({user:"", password:""});

  let changeUsername=(e)=>{
      let newUser={...todo, user:e.target.value};
      setTodo(newUser);
  }
  let changePassword=(e)=>{
    let newPassword={...todo, password:e.target.value};
    setTodo(newPassword);
  }
  let loginUser=async ()=>{
    let url=`http://localhost:1000/addLogin?username=${todo.user}&password=${todo.password}`
    await fetch(url);
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
            type="password"
            placeholder="Password" 
            className="form-control my-3 border-dark"
            value={todo.password}
            onChange={changePassword}    
        />
        <input 
            type="button" 
            value="Login" 
            className="bg-primary text-light fs-2"
            onClick={loginUser}
        />
    </div>
  )
}

export default Login;