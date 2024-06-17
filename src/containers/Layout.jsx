import React, {useEffect} from "react";

import NavBar from "../components/NavBar";
import {auth} from "../firebase";
import {useNavigate} from "react-router";

const Layout = props => {
  //   console.log(props);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default Layout;
