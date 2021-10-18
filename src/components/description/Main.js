import React from 'react';
import styled from 'styled-components';

const MainBox = styled.div`
  margin-bottom: 30px;

  div{
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

const Main = ({ title, desc }) => {
  return (
    <MainBox>
      <h1>{title}</h1>
      <div>{desc}</div>
    </MainBox>);
}

export default Main;