import React, { useState, useEffect } from 'react';
import SelectObject from '../../txt/select/SelectObject.js';
import TodoObject from '../../txt/todo/TodoObject.js';
import Highlight from 'react-highlight';
import 'highlight.js/scss/night-owl.scss';

const Sub = ({ id }) => {
  const [codeList, setCodeList] = useState([]);

  useEffect(() => {
    if (id === 1) {
      setCodeList([
        {
          fileName: 'SelectObject.js',
          code: SelectObject,
          desc: `selectAllOptions, deselectAllOptions, selectOption, deselectOption, isSelectedAll`,
        },
      ]);
    } else if (id === 2) {
      setCodeList([
        {
          fileName: 'TodoObject.js',
          code: TodoObject,
          desc: `postTodo, putTodo, deleteTodo`,
        },
      ]);
    } else if (id === 3) {
      setCodeList([
        {
          fileName: 'CalendarObject.js',
          code: '',
          desc: ``,
        },
      ]);
    }
  }, [id]);

  return (<>
    {codeList.map((codeItem, idx) => (
      <div key={idx}>
        <h2>{codeItem.fileName}</h2>
        <Highlight className="javascript">{codeItem.code}</Highlight>
        <div>{codeItem.desc}</div>
      </div>))
    }
  </>);
}

export default Sub;