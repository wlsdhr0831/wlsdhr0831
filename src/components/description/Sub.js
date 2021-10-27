import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import code from '../../txt/index';

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
    if(id) {
      setCodeList(code[id]);
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