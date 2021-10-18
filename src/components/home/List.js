import React from 'react';
import ListItem from './ListItem';
import FlexBox from '../common/FlexBox';

const List = () => {
  const data = [
    {
      id: 1,
      title: '체크박스 전체 선택 / 전체 해제',
    }, {
      id: 2,
      title: 'To-do List',
    }, {
      id: 3,
      title: 'Calendar',
    }
  ];

  return (
    <FlexBox>
      {data.map(d => (
        <ListItem key={d.id} item={d} />
      ))}
    </FlexBox>);
}

export default List;