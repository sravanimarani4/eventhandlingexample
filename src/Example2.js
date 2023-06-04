import React from 'react'

function Example2() {
    function clickHandle(e,firstName){
        console.log("I am an function example of fucntion calling",e,firstName);
    }
  return (
    <div>
        <h1>Example2</h1>
        {/* <button onClick={clickHandle}>About</button> */}
       <button onClick={function(e){
        return clickHandle(e,"sravani");
       }}>Click Me2</button><br/>
       <button onClick={(e)=>clickHandle(e,"sravaniMaragani")}>Submit3</button>
    </div>
  )
}

export default Example2