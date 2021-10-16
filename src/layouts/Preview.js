import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Button from '../components/common/Button';
import View from '../components/preview/View';

const PreviewBox = styled.div`
    display: inline-block;
    width: 50%;
`;

const Preview = ({ code }) => {
    return (
    <PreviewBox>
        <Link to={`/main`}>
            <Button>뒤로 가기</Button>
        </Link>
        <View code={code}/>
    </PreviewBox>);
}

export default Preview;