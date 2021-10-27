import React from 'react';
import ListItem from './ListItem';
import FlexBox from '../common/FlexBox';
import styled from 'styled-components';

const ScrollBox = styled.div`
  height: calc(100vh - 275px);
  overflow: auto;
  padding: 30px;

  &::-webkit-scrollbar {
    width: 40px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(255, 255, 255, 0.8);
    border-radius: 20px;
    background-clip: padding-box;
    border: 13px solid transparent;
  }
`;

const List = ({ selected }) => {
  const data = [
    {
      id: 1,
      title: '체크박스 전체 선택 / 전체 해제',
      value: 'todo',
    }, 
    {
      id: 2,
      title: 'To-do List',
      value: 'list',
    }, 
    {
      id: 4,
      title: 'Portfolio',
      value: 'portfolio',
    },
    // {
    //   id: 3,
    //   title: 'Calendar',
    // }, 
  ];

  return (
    <ScrollBox>
      <FlexBox>
        {data.map(d => (
          d.value.includes(selected) && <ListItem key={d.id} item={d} />))
        }
      </FlexBox>
    </ScrollBox>);
}

export default List;