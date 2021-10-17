import React from 'react';
import styled from 'styled-components';
import Main from '../components/description/Main';
import Sub from '../components/description/Sub';

const DescriptionBox = styled.div`
    display: inline-block;
    width: calc(50% - 60px);
    height: calc(100vh - 60px);
    overflow-y: auto;
    padding: 30px;
    background-color: white;
`;

const Description = ({ title, desc, id }) => {
    return (
    <DescriptionBox>
        <Main title={title} desc={desc}/>
        <hr/>
        <Sub id={id}/>
    </DescriptionBox>);
}

export default Description;