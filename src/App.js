import React from "react";
import {Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Search" element={<Search />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Error" element={<Error />} />
        </Routes>
    </>
  );
};

export default App;
