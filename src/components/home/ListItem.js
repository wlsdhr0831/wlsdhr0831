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
  box-shadow: -10px 25px 50px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in;

  .bg{
    position: fixed;
    top: 0px;
    left: 0px;
    background: transparent;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.5s ease-in;
    opacity: 0;
  }

  &:hover, &:hover .bg {
    opacity: 1;
    color: white;
    background: linear-gradient(
      135deg, 
      ${props => props.theme['colorStart'+props.color]} 0%, 
      ${props => props.theme['colorEnd'+props.color]} 100%
    );
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
    <Item color={item.id}>
      <div className="bg"></div>
      <h3>{item.title}</h3>
    </Item>
  </Link>);
};
export default ListItem;