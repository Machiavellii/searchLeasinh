import React from "react";

import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Underline from "./components/layout/Underline";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Underline />
    </div>
  );
};

export default App;
