import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Item = styled.div`
  display: inline-block;
  width: 350px;
  height: 200px;
  text-align: center;
  margin: 20px 10px;
  border-radius: 10px;
  color: black;
  background-color: white;
  position: relative;

  &:hover {
    color: white;
    background-color: #e77c00;
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