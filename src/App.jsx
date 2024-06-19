import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  useNavigate,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./containers/Home";
import HotelDetails from "./containers/HotelDetails";
import Login from "./containers/Login";
import CommingSoon from "./containers/CommingSoon";
import ErrorPage from "./containers/ErrorPage";
import UserAccount from "./containers/UserAccount";
import CreateAccount from "./containers/CreateAccount";

const Layout = props => {
  //   console.log(props);
  const navigate = useNavigate();

  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     // console.log(user);
  //     if (user) {
  //       navigate("/");
  //     }
  //   });
  // }, []);

  return (
    <>
      <NavBar />
      {/* {props.children} */}
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          {/* Outlet */}
          <Route index element={<Home />} />
          <Route path="/hotel-details/:id" element={<HotelDetails />} />
          <Route path="/places" element={<CommingSoon />} />
          <Route path="/account" element={<UserAccount />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Route>
    )
  );

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
