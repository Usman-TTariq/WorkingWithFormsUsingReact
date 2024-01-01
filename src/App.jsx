import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const[idNo, setIdNo] = useState();
  const[toDoMessage, setToDoMessage] = useState();

  const onFormSubmit = (e) => {
      e.preventDefault();
      console.log("Thank you for your response.");
      let formBody = {
        name,
        email,
        message,
      }
      console.log(formBody);
  }

  useEffect(() => {
    async function toDoItems(){
      console.log("This message is coming from useEffect.");
      const res = await fetch("https://dummyjson.com/todos/1");
      const response = await res.json();
      console.log(response);
      setIdNo(response.id);
      setToDoMessage(response.todo);
    }
    toDoItems();
  }, []);


  return (
    <>
      
      <h1>Vite + React (Working with Forms)</h1>
      <h4>ID No: {idNo}</h4>
      <h4>Task To Do: {toDoMessage}</h4>

      <div>
        <form onSubmit={onFormSubmit}>
          <div>
              <input onChange={(e) => {setName(e.target.value)}} value={name} className='formInput' type="text" placeholder="Enter Your Name"/>
          </div>

          <div>
            <input onChange={(e) => {setEmail(e.target.value)}} value={email} className='formInput' type="email" placeholder='Enter Your Email Address'/>
          </div>

          <div>
            <textarea onChange={(e) => {setMessage(e.target.value)}} value={message} className='formInput' name="" id="" cols="30" rows="10" placeholder='Comment your feedback here.'></textarea>
          </div>
          <div>
            <input className='actionBtn' type="submit" value="Submit Message"/>
          </div>
        </form>
      </div>
      
    </>
  )
}

export default App
