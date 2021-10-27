import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import Button from '../components/common/Button';
import Iframe from 'react-iframe'

const PreviewBox = styled.div`
  display: inline-block;
  width: calc(50% - 60px);
  height: 100%;
  padding: 30px;

  @media ${({ theme }) => theme.laptop} {
    width: 100%;
  }
`;

const Preview = ({ url }) => {
  const history = useHistory();

  return (
    <PreviewBox>
      <Button onClick={() => history.goBack()}>◀ Back</Button>
      {url &&
        <Iframe
          url={"https://wlsdhr0831.github.io/" + url + "/"}
          width="100%"
          height="800px"
          frameBorder="0" />
      }
    </PreviewBox>);
}

export default Preview;