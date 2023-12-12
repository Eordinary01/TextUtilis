// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";

import TextForm from "./components/TextForm";

function App() {
  const [mode , setMode] = useState('light');

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      
      setMode ('light');
      document.body.style.backgroundColor = 'white';
    }
    
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode}  toggleMode= {toggleMode}/>
      {/* <Navbar/> */}
      <div className="container">
        <TextForm heading= "Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
     
      </div>
    </>
  );
}

export default App;
