import React from 'react'

function Example1() {

    const onClick = (e) =>{
        console.log("I am an onclick functionality" ,e);
    }
  return (
    <div>
        <h1>example1</h1>
    <button className="button" onClick={onClick}>Click Me</button>
    </div>
  )
}

export default Example1