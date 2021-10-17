import React, { useState, useEffect } from 'react';
import SelectObject from '../../txt/SelectObject.js';
import TodoObject from '../../txt/TodoObject.js';

const Sub = ({ id }) => {
    const [code, setCode] = useState('');

    useEffect(() => {
        if(id === 1){
            setCode(SelectObject);
        }else if(id === 2){
            setCode(TodoObject);
        }
    }, [id]);

    return (
    <pre>
        <code>{code}</code>
    </pre>);
}

export default Sub;