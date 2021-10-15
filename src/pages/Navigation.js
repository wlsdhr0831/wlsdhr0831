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
      <Link to="/wlsdhr0831">
        Home
      </Link> | 
      <Link to="/detail/1">
        Component
      </Link>
    </div>);
};
export default Home;