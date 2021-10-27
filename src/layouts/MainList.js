import React, { useState } from "react";
import styled from 'styled-components';
import List from "../components/home/List";

const ListBox = styled.div`
  position: absolute;
  top: 20%;
  padding: 0px 50px;
  width: 90%;
`;

const Tab = styled.div`
  color: white;
  height: 50px;
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
  const [ hover, setHover ] = useState("");
  const [ selected, setSelected ] = useState("");

  const onMouseMove = (e) => {
    if(e.target.nodeName === 'H2'){
      setHover(e.target.id);
    }
  }

  const onMouseLeave = () => {
    setHover(selected);
  }

  const onClick = (e) => {
    if(e.target.nodeName === 'H2'){
      setSelected(e.target.id);
    }
  }

  const tabList = [
    {
      value: 'All',
      id: '',
    },
    {
      value: 'Check Box',
      id: 'checkbox',
    },
    {
      value: 'To do',
      id: 'todo',
    },
    {
      value: 'Style',
      id: 'style',
    },
    {
      value: 'Portfolio',
      id: 'portfolio',
    }
  ];

  return (
    <ListBox>
      <Tab 
        onMouseMove={onMouseMove} 
        onMouseLeave={onMouseLeave} 
        onClick={onClick}>
        {
          tabList.map(tab => (
            <h2 
              key={tab.id} 
              id={tab.id} 
              className={hover === `${tab.id}` ? "hover" : ''}>
                {tab.value}
            </h2>
          ))
        }
      </Tab>
      <List selected={selected}/>
    </ListBox>
  );
};

export default MainList;