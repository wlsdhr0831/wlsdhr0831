import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/wlsdhr0831" activeStyle={activeStyle} exact style={defaultStyle}>
        Home
      </Link> | 
      <Link to="/component/1" activeStyle={activeStyle} style={defaultStyle}>
        Component
      </Link>
    </div>);
};
export default Home;