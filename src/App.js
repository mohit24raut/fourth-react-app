import "bootstrap/dist/css/bootstrap.css";
import {useState} from "react";
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
}

export default App;
