import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#09D3AC",
};

const defaultStyle = {
  textDecoration: "none",
  color: "black",
};

const Home = () => {
  return (
    <div className="navigation">
      <NavLink to="/" activeStyle={activeStyle} exact style={defaultStyle}>
        Home
      </NavLink>
      <NavLink to="/component" activeStyle={activeStyle} style={defaultStyle}>
        Component
      </NavLink>
    </div>);
};
export default Home;