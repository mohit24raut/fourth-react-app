import "bootstrap/dist/css/bootstrap.css";
import {useState} from "react";

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

/*
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


