import React from "react";
import AppNavbar from "./app-navber";
import Footer from "./footer";
const Layout = (props) => {
  return (
    <>
    <AppNavbar />
      {props.children}
    <Footer />
      
     
    </>
  );
}
export default Layout;