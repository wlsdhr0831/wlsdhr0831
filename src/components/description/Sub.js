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

import TabAppJs from '../../txt/tab/appJs.js';
import TabHtml from '../../txt/tab/indexHtml.js';
import TabCss from '../../txt/tab/tabCss.js';
import TabAppCss from '../../txt/tab/appCss.js';
import * as TabDesc from '../../txt/tab/tabDesc.js';

import ColorHtml from '../../txt/color/indexHtml.js';
import ColorCss from '../../txt/color/colorCss.js';
import ColorAppCss from '../../txt/color/appCss.js';

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
          fileName: 'index.html',
          code: SelectHtml,
          script: 'html',
        },
        {
          fileName: 'app.css',
          code: SelectAppCss,
          script: 'css',
        },
        {
          fileName: 'select.css',
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
    } else if (id === 5){
      setCodeList([
        {
          fileName: 'index.html',
          code: ColorHtml,
          script: 'html',
        },
        {
          fileName: 'app.css',
          code: ColorAppCss,
          script: 'css',
        },
        {
          fileName: 'color.css',
          code: ColorCss,
          script: 'css',
        },
      ]);
    } else if (id === 6){
      setCodeList([
        {
          fileName: 'Example',
          code: TabAppJs,
          desc: TabDesc.app,
          script: 'javascript',
        },
        {
          fileName: 'index.html',
          code: TabHtml,
          script: 'html',
        },
        {
          fileName: 'app.css',
          code: TabAppCss,
          script: 'css',
        },
        {
          fileName: 'tab.css',
          code: TabCss,
          script: 'css',
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