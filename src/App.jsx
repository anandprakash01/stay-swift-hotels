import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import HotelDetails from "./containers/HotelDetails";
import Login from "./containers/Login";
import Layout from "./containers/Layout";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route
              path="/home"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            ></Route>
            <Route
              path="/hotel-details/:id"
              element={
                <Layout>
                  <HotelDetails />
                </Layout>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
        {/* Layout of the app */}
      </div>
    </>
  );
}

export default App;
