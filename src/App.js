import "./App.css";
import Navbar from "./components/navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import Details from "./components/Details";
import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";  /// iski jagah neechay wali line lagai 
import { BrowserRouter as Router, Route, Routes ,Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setalert(null);
  }, 1500);
  const darkmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark Mode On", "success");
      document.title = "React Practice- Blue Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode On", "success");
      document.title = "React Practice-  Light Mode";
    }
  };
  const greenmode = () => {
    if (mode === "light") {
      setmode("success");
      document.body.style.backgroundColor = "darkgreen";
      showalert("Dark Mode On", "success");
      document.title = "React Practice- Green Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode On", "success");
      document.title = "React Practice- Light Mode";
    }
  };

  const yellowmode = () => {
    if (mode === "light") {
      setmode("warning");
      document.body.style.backgroundColor = "#83580b";
      showalert("Dark Mode On", "success");
      document.title = "React Practice- Yellow Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode On", "success");
      document.title = "React Practice- Light Mode";
    }
  };

  const redmode = () => {
    if (mode === "light") {
      setmode("danger");
      document.body.style.backgroundColor = "#bc2525";
      showalert("Dark Mode On", "success");
      document.title = "React Practice- Red Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode On", "success");
      document.title = "React Practice- Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="React App" about="App About"/> */}
         <Router>
        <Navbar
          mode={mode}
          darkmode={darkmode}
          greenmode={greenmode}
          yellowmode={yellowmode}
          redmode={redmode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/details" element={<Details />} />
            <Route path="/" element={<Textform />} />
          </Routes>
        </div>
  </Router> 
    {/*  <Router>
        <Routes>
          <Route path="/about" element={<div>About</div>}></Route>
          <Route path="/users" element={<div>Users</div>}></Route>
          <Route path="/" element={<div>Home</div>}></Route>
        </Routes>
      </Router>*/}
    </>
  );
}


export default App;

// REASON 


  //One of the most exciting changes in v6 is the powerful new <Routes> element. This is a pretty significant upgrade from v5's <Switch> element with some important new features including relative routing and linking, automatic route ranking, and nested routes and layouts.

    // In the latest version of React, 'Switch' is replaced with 'Routes' and 'component' is replaced with 'element'
