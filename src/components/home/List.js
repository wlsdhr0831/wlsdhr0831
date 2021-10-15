import React from 'react';
import ListItem from './ListItem';
import FlexBox from '../common/FlexBox';

const List = () => {
    const data = [{
        id: 1,
        title: '전체선택, 부분선택',
    }, {
        id: 2,
        title: 'Todo',
    }];

    return (
    <FlexBox>
        {data.map(d => (
            <ListItem key={d.id} item={d}/>
        ))}
    </FlexBox>);
}

export default List;