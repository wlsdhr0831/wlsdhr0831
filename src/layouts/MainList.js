import React, { useState } from "react";
import styled from 'styled-components';
import List from "../components/home/List";

const ListBox = styled.div`
  position: absolute;
  top: 20%;
  padding: 0px 50px;
`;

const Tab = styled.div`
  color: white;
  height: 50px;
  margin-bottom: 20px;
  padding: 10px;

  & h2{
    cursor: pointer;
    color: darkgray;
    font-size: 1.25rem;
    display: inline-block;
    transition: all 0.5s ease-in;
    padding: 0px 10px;
    margin: 0px;
  }

  & .hover{
    color: white;
    font-size: 2.5rem;
  }
`;

const MainList = () => {
  const [ hover, setHover ] = useState("1");
  const [ selected, setSelected ] = useState("1");

  const onMouseMove = (e) => {
    if(e.target.nodeName === 'H2'){
      setHover(e.target.id);
    } else {
      setHover(selected);
    }
  }

  const onClick = (e) => {
    if(e.target.nodeName === 'H2'){
      setSelected(e.target.id);
    }
  }

  return (
    <ListBox>
      <Tab onMouseMove={onMouseMove} onClick={onClick}>
        <h2 id="1" className={hover === "1" ? 'hover' : ''}>All</h2>
        <h2 id="2" className={hover === "2" ? 'hover' : ''}>List</h2>
        <h2 id="3" className={hover === "3" ? 'hover' : ''}>Calendar</h2>
      </Tab>
      <List/>
    </ListBox>
  );
};

export default MainList;