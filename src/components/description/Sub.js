import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SelectObject from '../../txt/select/selectObject.js';
import SelectHtml from '../../txt/select/indexHtml.js';
import SelectAppCss from '../../txt/select/appCss.js';
import SelectCss from '../../txt/select/selectCss.js';
import SelectAppJs from '../../txt/select/appjs.js';
import * as SelectDesc from '../../txt/select/selectDesc.js';

import TodoObject from '../../txt/todo/todoObject.js';
import TodoHtml from '../../txt/todo/indexHtml.js';
import TodoInputCss from '../../txt/todo/inputCss.js';
import TodoAppCss from '../../txt/todo/appCss.js';
import TodoTodoCss from '../../txt/todo/todoCss.js';
import TodoAppJs from '../../txt/todo/appJs.js';
import * as TodoDesc from '../../txt/todo/todoDesc.js';

import Highlight from 'react-highlight';
import 'highlight.js/scss/night-owl.scss';

const Desc = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding: 30px;
  background-color: rgb(230, 230, 230);
  border-radius: 20px;
  white-space: pre-wrap;
`;

const Sub = ({ id }) => {
  const [codeList, setCodeList] = useState([]);

  useEffect(() => {
    if (id === 1) {
      setCodeList([
        {
          fileName: 'SelectObject.js',
          code: SelectObject,
          desc: SelectDesc.object,
          script: 'javascript',
        },
        {
          fileName: 'Example',
          code: SelectAppJs,
          desc: SelectDesc.appJs,
          script: 'javascript',
        },
        {
          fileName: 'SelectObject.js',
          code: SelectHtml,
          script: 'html',
        },
        {
          fileName: 'SelectObject.js',
          code: SelectAppCss,
          script: 'css',
        },
        {
          fileName: 'SelectObject.js',
          code: SelectCss,
          script: 'css',
        },
      ]);
    } else if (id === 2) {
      setCodeList([
        {
          fileName: 'TodoObject.js',
          code: TodoObject,
          desc: TodoDesc.object,
          script: 'javascript',
        },
        {
          fileName: 'Example',
          code: TodoAppJs,
          desc: TodoDesc.app,
          script: 'javascript',
        },
        {
          fileName: 'index.html',
          code: TodoHtml,
          desc: TodoDesc.html,
          script: 'html',
        },
        {
          fileName: 'app.css',
          code: TodoAppCss,
          desc: TodoDesc.appCss,
          script: 'css',
        },
        {
          fileName: 'input.css',
          code: TodoInputCss,
          desc: TodoDesc.inputCss,
          script: 'css',
        },
        {
          fileName: 'todo.css',
          code: TodoTodoCss,
          desc: TodoDesc.todoCss,
          script: 'css',
        },
      ]);
    } else if (id === 3) {
      setCodeList([
        {
          fileName: 'CalendarObject.js',
          code: '',
          desc: ``,
          script: 'javascript',
        },
      ]);
    }
  }, [id]);

  return (<>
    {codeList.map((codeItem, idx) => (
      <div key={idx}>
        <h2>{codeItem.fileName}</h2>
        <Highlight className={codeItem.script}>{codeItem.code}</Highlight>
        { codeItem.desc && <Desc>{codeItem.desc}</Desc>}
      </div>))
    }
  </>);
}

export default Sub;