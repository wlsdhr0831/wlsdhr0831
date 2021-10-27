import SelectObject from './select/selectObject.js';
import SelectHtml from './select/indexHtml.js';
import SelectAppCss from './select/appCss.js';
import SelectCss from './select/selectCss.js';
import SelectAppJs from './select/appjs.js';
import * as SelectDesc from './select/selectDesc.js';

import TodoObject from './todo/todoObject.js';
import TodoHtml from './todo/indexHtml.js';
import TodoInputCss from './todo/inputCss.js';
import TodoAppCss from './todo/appCss.js';
import TodoTodoCss from './todo/todoCss.js';
import TodoAppJs from './todo/appJs.js';
import * as TodoDesc from './todo/todoDesc.js';

import TabAppJs from './tab/appJs.js';
import TabHtml from './tab/indexHtml.js';
import TabCss from './tab/tabCss.js';
import TabAppCss from './tab/appCss.js';
import * as TabDesc from './tab/tabDesc.js';

import ColorHtml from './color/indexHtml.js';
import ColorCss from './color/colorCss.js';
import ColorAppCss from './color/appCss.js';

const code = new Array(10);
code[1] = [
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
];

code[2] = [
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
];

code[5] = [
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
];

code[6] = [
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
];

code[3] = [
  {
    fileName: 'CalendarObject.js',
    code: '',
    desc: ``,
    script: 'javascript',
  },
];

code[4] = [];

export default code;