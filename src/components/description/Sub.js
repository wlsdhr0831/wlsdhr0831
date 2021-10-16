import React, { useState, useEffect } from 'react';
import SelectObject from '../../txt/SelectObject.js';

const Sub = ({ id }) => {

    const [code, setCode] = useState('');

    useEffect(() => {
        if(id === 1){
            setCode(SelectObject);
        }
    }, []);


    return (
    <>
        <code>{code}</code>
    </>);
}

export default Sub;