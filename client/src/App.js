import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
