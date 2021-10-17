import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Button from '../components/common/Button';
import Iframe from 'react-iframe'

const PreviewBox = styled.div`
    display: inline-block;
    width: 50%;
    height: 100%;
`;

const Preview = ({ url }) => {
    return (
        <PreviewBox>
            <Link to={`/main`}>
                <Button>뒤로 가기</Button>
            </Link>
            {url &&
                <Iframe 
                url={"https://wlsdhr0831.github.io/"+url+"/"}
                width="100%"
                height="800px"
                frameBorder="0"/>
            }
        </PreviewBox>);
}

export default Preview;