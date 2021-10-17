import React, { useState, useEffect } from 'react';
import SelectObject from '../../txt/SelectObject.js';
import TodoObject from '../../txt/TodoObject.js';
import Highlight from 'react-highlight';
import 'highlight.js/scss/night-owl.scss';

const Sub = ({ id }) => {
    const [code, setCode] = useState('');

    useEffect(() => {
        if(id === 1){
            setCode(SelectObject);
        }else if(id === 2){
            setCode(TodoObject);
        }
    }, [id]);

    return (<>
        <Highlight className="javascript">{code}</Highlight>
    </>);
}

export default Sub;