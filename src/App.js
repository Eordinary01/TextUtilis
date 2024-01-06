import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);

    }, 1200);
  }



  const toggleMode = () => {


    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Router>
        <div className="container my-3">

          <Routes>
            <Route path="/About" element={<About />}>
              
            </Route>

            <Route path="/" element={<TextForm/>}>
              {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
            </Route>
            </Routes>

          
        </div>


      </Router>
    </>


  );
}

export default App;
