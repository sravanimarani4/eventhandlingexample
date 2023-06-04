import React from "react";
import "./File.css";
import Example1 from "./example1";
import Example2 from './Example2';


function App() {
  function handleClick(){
    console.log("Hello i am an function");
  }
  return (
    <main className='container'>
      {/* <button className="button" onClick={handleClick}>Click Me</button> */}
      <button className="button" onClick={handleClick}>Click Me</button>
      <Example1/>
      <Example2/>
    </main>
  );
}

export default App;
