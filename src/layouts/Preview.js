import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Button from '../components/common/Button';
import Iframe from 'react-iframe'

const PreviewBox = styled.div`
    display: inline-block;
    width: calc(50% - 60px);
    height: 100%;
    padding: 30px;
`;

const Preview = ({ url }) => {
    return (
        <PreviewBox>
            <Link to={`/main`}>
                <Button>◀ Back</Button>
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