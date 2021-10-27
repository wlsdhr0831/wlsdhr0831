import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FlexBox from "../components/common/FlexBox";
import Description from "../layouts/Description";
import Preview from "../layouts/Preview";

const DetailBox = styled.div`
  overflow: auto;
  height: inherit;
  
  &::-webkit-scrollbar {
    width: 40px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(255, 255, 255, 0.8);
    border-radius: 20px;
    background-clip: padding-box;
    border: 13px solid transparent;
  }
`;

const Detail = ({ match }) => {
  const [code, setCode] = useState({
    id: 0,
    title: '',
    desc: '',
    url: '',
  });

  const codeList = [
    {
      id: 1,
      title: "체크박스 전체 선택 / 전체 해제 구현",
      desc: `체크박스를 이용한 전체 선택 및 해제 로직을 구현하였습니다.
            SelectObject 라는 이름의 클래스를 제작하였습니다.
            현재 Chrome에서 최적화 되어 있습니다.`,
      url: 'select-option'
    }, {
      id: 2,
      title: "To-do List 구현",
      desc: `간단한 To do List 로직을 구현하였습니다.
            TodoObject 라는 이름의 클래스를 제작하였습니다.
            현재 Chrome에서 최적화 되어 있습니다.`,
      url: 'to-do'
    }, {
      id: 3,
      title: "달력 구현",
      desc: `간단한 달력을 구현하였습니다.
            CalendarObject 라는 이름의 클래스를 제작하였습니다.
            현재 Chrome에서 최적화 되어 있습니다.`,
      url: 'calendar'
    }, {
      id: 4,
      title: "포트폴리오 제작",
      desc: `github pages를 이용하여 포트폴리오 페이지를 제작하였습니다.
            github actions를 통한 CI/CD를 구축하였습니다.
            현재 Chrome에서 최적화 되어 있습니다.`,
      url: 'wlsdhr0831'
    }
  ];

  useEffect(() => {
    setCode(codeList[match.params.id-1]);
  }, []);

  return (
    <DetailBox>
      <FlexBox>
        <Preview url={code.url}/>
        <Description title={code.title} desc={code.desc} id={code.id}/>
      </FlexBox>
    </DetailBox>);
};
export default Detail;