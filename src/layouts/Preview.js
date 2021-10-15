import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import View from '../components/preview/View';

const PreviewBox = styled.div`
    display: inline-block;
    width: 50%;
`;

const Preview = () => {
    return (
    <PreviewBox>
        <Button>뒤로 가기</Button>
        <View/>
    </PreviewBox>);
}

export default Preview;