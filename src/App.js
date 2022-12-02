//import Tweets from "./components/Tweets";

/*function App() {
  const hello = "wale";
  const image =
    "https://images.unsplash.com/photo-1669269972912-cfd59d927630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60";*/

/*
  return (
    <div className="App">
      <Tweets me={hello} img={image} love="Love" />
    </div>*/

/* <div className="App">
      <Tweets />
    </div>
    
    <div className="App">
    <h1>hello</h1>
    </div>
    );
  }
  */

import React from "react";

import Home from "./components/Pages/Home";

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
