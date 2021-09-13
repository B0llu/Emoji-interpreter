import React, {useState} from "react";
import "./App.css";


export default function App() {

  var [ userInput, setUserInput ] = useState("")

  function inputChangeHandler(event) {
    console.log(event.target.value);
    setUserInput(event.target.value)
  }
  
  return (
    <div className="App">
      <h1>hello</h1>
      <input onChange={inputChangeHandler} />
      <div>
        Welcome {userInput}
      </div>
    </div>
  )
}

