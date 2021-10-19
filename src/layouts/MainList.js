import React from "react";
import styled from 'styled-components';
import List from "../components/home/List";

const ListBox = styled.div`
  position: absolute;
  top: 20%;
  padding-left: 50px;
`;

const Tab = styled.div`
  color: white;

  & h2{
    display: inline-block;
    padding: 0px 20px 0px 20px;
    border: 1px solid white;
  }
`;

const MainList = () => {
  return (
    <ListBox>
      <Tab>
        <h2>All</h2>
        <h2>List</h2>
        <h2>Calendar</h2>
      </Tab>
      <List/>
    </ListBox>
  );
};

export default MainList;