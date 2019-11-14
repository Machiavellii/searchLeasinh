import React from "react";

import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Underline from "./components/layout/Underline";
import Landing from "./components/landing/Landing";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Underline />
      <Landing />
    </div>
  );
};

export default App;
