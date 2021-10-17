import React, { useEffect } from 'react';
import styled from 'styled-components';
import Main from '../components/description/Main';
import Sub from '../components/description/Sub';

const DescriptionBox = styled.div`
    display: inline-block;
    width: 50%;
`;

const Description = ({ title, desc, id }) => {
    return (
    <DescriptionBox>
        <Main title={title} desc={desc}/>
        <Sub id={id}/>
    </DescriptionBox>);
}

export default Description;