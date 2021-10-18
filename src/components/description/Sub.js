import React, { useState, useEffect } from 'react';

import SelectObject from '../../txt/select/selectObject.js';

import TodoObject from '../../txt/todo/todoObject.js';
import TodoHtml from '../../txt/todo/indexHtml.js';
import TodoInputCss from '../../txt/todo/inputCss.js';
import TodoAppCss from '../../txt/todo/appCss.js';
import TodoListCss from '../../txt/todo/listCss.js';
import TodoTodoCss from '../../txt/todo/todoCss.js';

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
        {
          fileName: 'index.html',
          code: TodoHtml,
          desc: `inputBox, todoListBox`,
        },
        {
          fileName: 'input.css',
          code: TodoInputCss,
          desc: `inputBox, todoListBox`,
        },
        {
          fileName: 'app.css',
          code: TodoAppCss,
          desc: `inputBox, todoListBox`,
        },
        {
          fileName: 'list.css',
          code: TodoListCss,
          desc: `inputBox, todoListBox`,
        },
        {
          fileName: 'todo.css',
          code: TodoTodoCss,
          desc: `inputBox, todoListBox`,
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