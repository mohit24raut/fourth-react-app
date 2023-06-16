import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registeration from "./Component/Registeration";
import Login from "./Component/Login";

function App()
{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Regis" element={<Registeration/>}/>;
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;
/*
Login with DB connaction


function App()
{
  return(
    <>
      <h1>Login Form</h1>
      <Login/>
    </>
  )
}

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
export default App;

-----------------------------------------------------------------
function App()
{
  return(
    <>
      <h1>List with Button</h1>
      <ListDemo/>
    </>
  );
}

function ListDemo()
{
  let inpRef=useRef();
  let [list, setList]=useState([]);
  
  let addItem=()=>{
    console.log(inpRef);
    console.log(inpRef.current);
    console.log(inpRef.current.value);
    let inpValue=inpRef.current.value;

    let newList=[inpValue, ...list ];
    setList(newList);

    inpRef.current.value="";
  }
  return(
    <>
      <div className="container">
        <input 
            type="text"
            placeholder="Enter here..." 
            id="id1"
            ref={inpRef}
            className="form-control border-success my-2"
        />
        <input 
            type="button" 
            value="Click Me" 
            className="bg-success text-light fs-2"
            onClick={addItem}
        />

        {list.map( (item)=> <MapList item={item}/>)}
      </div>
    </>
  )
}
function MapList(props)
{
  let [like, setLike]=useState(0);
  let [dislike, setDislike]=useState(0);

  let likeMe=()=>{
    like=like+1;
    setLike(like);
  }
  let dislikeMe=()=>{
    dislike=dislike+1;
    setDislike(dislike);
  }
  return(
    <>
      <h3>{props.item}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor et sed voluptatum quam esse ratione, porro laboriosam ipsam totam dolorum impedit sit dolorem accusamus quis autem necessitatibus quo soluta.</p>
      <div>
          <span><b>{like}</b></span>
          <input type="button" value="&#128077;" onClick={likeMe}/>   
          <span><b>{dislike}</b></span>
          <input type="button" value="&#128078;" onClick={dislikeMe}/>
      </div>
    </>
  )
}
export default App;

function App()
{
  return(
    <>
      <h1>List with Button</h1>
      <ListDemo/>
    </>
  );
}

function ListDemo()
{
  let inpRef=useRef();
  let [list, setList]=useState([]);
  
  let addItem=()=>{
    console.log(inpRef);
    console.log(inpRef.current);
    console.log(inpRef.current.value);
    let inpValue=inpRef.current.value;

    let newList=[...list , inpValue];
    setList(newList);
  }
  return(
    <>
      <div className="container">
        <input 
            type="text"
            placeholder="Enter here..." 
            id="id1"
            ref={inpRef}
            className="form-control border-success my-2"
        />
        <input 
            type="button" 
            value="Click Me" 
            className="bg-success text-light fs-2"
            onClick={addItem}
        />

        {list.map( (item)=> <p>{item}</p>)}
      </div>
    </>
  )
}
export default App;
----------------------------------------------------------------

Not a good way to use DOM as react have virutal DOM use above approch

function App()
{
  return(
    <>
      <h1>List with Button</h1>
      <ListDemo/>
    </>
  )
}

function ListDemo()
{
  let [list, setList]=useState([]);
  
  let addItem=()=>{
    let inpRef=document.querySelector("#id1");
    let inp=inpRef.value;

    let newList=[...list, inp];
    setList(newList);

    inpRef.value="";
  }
  return(
    <>
      <div className="container">
        <input 
            type="text"
            placeholder="Enter here..." 
            id="id1"
            className="form-control border-success my-2"
        />
        <input 
            type="button" 
            value="Click Me" 
            className="bg-success text-light fs-2"
            onClick={addItem}
        />

        {list.map( (item)=> <p>{item}</p>)}
      </div>
    </>
  )
}
export default App;


---------------------------------------------------------------------
function App()
{
  return(
    <>
      <h1>List with Button</h1>
      <ListDemo/>
    </>
  )
}

function ListDemo()
{
  let [list, setList]=useState([]);
  
  let addItem=()=>{
    let newList=[...list, "CDAC"];
    setList(newList);
  }
  return(
    <>
      <input 
          type="button" 
          value="Click Me" 
          className="bg-success text-light fs-2"
          onClick={addItem}
      />

      {list.map( (item)=> <p>{item}</p>)}
    </>
  )
}
export default App;


function App()
{
  return(
    <>
      <ListDemo/>
    </>
  )
}

function ListDemo()
{
  let list=["Mohit", "Have", "Car"];
  for(let i=0; i<10; i++)
  {
    list.push("CDAC")
  }
    return(
      <>
        {list.map( (item)=><p>{item}</p> )}
      </>
    )
}
export default App;

function App()
{
  return(
    <>
      <Para />
      <Para title="Chapter 1"/>
      <Para title="Chapter 2" para="Chal Chalare"/>
      <Para  title="Chapter 3"/>
    </>
  )
}

function Para(props)
/** or function Para({title, para}) //ex for above fun another way to write
{
  return(
    <>
      <div className="alert">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae incidunt a autem? Laudantium error, est et quaerat ad modi.
        </p>
      </div>
    </>
  )
}
export default App;

function App()
{
  return(
    <>
    <div className="container">
      <h1>Message List</h1>
      <WhatApp/>
    </div>
    </>
  )
}

function WhatApp()
{
  let list=["Mohit", "ROhit", "Kohit"];
  let list1=[];
  for(let i=0; i<10; i++)
  {
    list1.push("");
  }
  return(
    <>
      {list1.map((item)=>(
                      <div>
                          <h1>Hello {item}</h1>
                      </div>
                      ))}
    </>
  )
}
export default App;


Like to msg


function App() {
  return(
    <>
      <h1>Message Liker</h1>
      <Liker/>
      <Liker/>
      <Liker/>
    </>
  )
} 

function Liker()
{
  let [counter, setCounter]=useState(0);
  let Inc=()=>{
    counter=counter+1;
    setCounter(counter);
  }
  return(
    <>
      <div className="m-2">
        <p className="alert alert-success">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum fugit sit placeat itaque magni blanditiis veritatis aperiam magnam ratione accusamus neque et possimus dolorem voluptatum ipsa dolores nisi, deserunt perspiciatis dignissimos saepe eveniet, labore voluptates iste a! Nam voluptas praesentium nesciunt tempore culpa, iusto sit possimus. Aliquid, veritatis esse. Recusandae.</p>
        <h3>{counter}</h3>  
        <input type="button" value="&#128077;" onClick={Inc}/>
      </div>
      </>
    
  )
}*/


