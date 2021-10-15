import React from 'react';
import styled from 'styled-components';
import Main from '../components/description/Main';
import Sub from '../components/description/Sub';

const DescriptionBox = styled.div`
    display: inline-block;
    width: 50%;
`;

const Description = ({ data }) => {
    const { title, desc, code} = data;

    return (
    <DescriptionBox>
        <Main title={title} desc={desc}/>
        <Sub code={code}/>
    </DescriptionBox>);
}

export default Description;