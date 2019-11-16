import React from "react";

import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Underline from "./components/layout/Underline";
import Feedback from "./components/layout/Feedback";
import Landing from "./components/landing/Landing";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Feedback />
      <Navbar />
      <Header />
      <Underline />
      <Landing />
    </div>
  );
};

export default App;
