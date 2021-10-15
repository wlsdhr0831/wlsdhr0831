import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Item = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
  background-color: darkgray;
`;

const ItemTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  margin: 10px;
`;

const ItemBody = styled.div``;

const ListItem = ({ item }) => {
  return (
  <Link to={`/detail/${item.id}`}>
    <Item>
      <ItemTitle>
        {item.title}
      </ItemTitle>
      <ItemBody></ItemBody>
    </Item>
  </Link>);
};
export default ListItem;