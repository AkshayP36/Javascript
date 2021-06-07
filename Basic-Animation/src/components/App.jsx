import React from "react";

function App() {
  var [colorOfButton, setMouseover] = React.useState("white");
  var [name, setName] = React.useState("");

  function animationIn(){
      setMouseover("black");
  }
  function animationOut(){
      setMouseover("white");
  }
  function updateName(event){
    setName(name);
  }


  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input type="text" placeholder="What's your name?" name={name} onChange={updateName}/>
      <button onMouseOver={animationIn} onMouseOut={animationOut} style={{backgroundColor: colorOfButton}} onClick={updateName}>Submit</button>
    </div>
  );
}

export default App;

// onChange={updateName}
//(event.target.value)
