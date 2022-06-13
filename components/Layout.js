import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      {children}
      <Footer />
    </box>
  );
};

export default Layout;
