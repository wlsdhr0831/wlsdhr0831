import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Item = styled.div`
  display: inline-block;
  width: 350px;
  height: 200px;
  text-align: center;
  margin: 20px 20px;
  border-radius: 10px;
  color: black;
  background-color: white;
  position: relative;
  box-shadow: 1px 1px 5px 5px #eb8d5c;

  &:hover {
    color: white;
    background-color: #eb8d5c;
    box-shadow: 1px 1px 5px 5px white;
  }

  h3{
    width: 90%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ListItem = ({ item }) => {
  return (
  <Link to={`/detail/${item.id}`}>
    <Item>
      <h3>{item.title}</h3>
    </Item>
  </Link>);
};
export default ListItem;