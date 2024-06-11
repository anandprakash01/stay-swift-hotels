import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import HotelDetails from "./containers/HotelDetails";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/hotel-details/:id" element={<HotelDetails />}></Route>
          </Routes>
        </BrowserRouter>
        {/* Layout of the app */}
      </div>
    </>
  );
}

export default App;
