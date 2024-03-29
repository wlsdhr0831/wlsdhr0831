import React from 'react';
import ListItem from './ListItem';
import FlexBox from '../common/FlexBox';
import styled from 'styled-components';

const ScrollBox = styled.div`
  width: 100%;
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
      value: 'checkbox',
    }, 
    {
      id: 2,
      title: 'To-do List',
      value: 'todo',
    }, 
    // {
    //   id: 3,
    //   title: 'Calendar',
    // },
    {
      id: 5,
      title: 'Change Color',
      value: 'style',
    },
    {
      id: 6,
      title: 'Tab List',
      value: 'style',
    }, 
    {
      id: 4,
      title: 'Portfolio',
      value: 'portfolio',
    },
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