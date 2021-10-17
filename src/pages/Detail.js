import React, { useEffect, useState } from "react";
import FlexBox from "../components/common/FlexBox";
import Description from "../layouts/Description";
import Preview from "../layouts/Preview";

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
            SelectObject 라는 이름의 클래스를 제작하였습니다. `,
      url: 'select-option'
    },
    {
      id: 2,
      title: "To-do List 구현",
      desc: `간단한 To do List 로직을 구현하였습니다.
            TodoObject 라는 이름의 클래스를 제작하였습니다.`,
      url: 'to-do'
    },
    {
      id: 3,
      title: "달력 구현",
      desc: `간단한 달력을 구현하였습니다.
            CalendarObject 라는 이름의 클래스를 제작하였습니다.`,
      url: 'calendar'
    }
  ];

  useEffect(() => {
    setCode(codeList[match.params.id-1]);
  }, []);

  return (
    <FlexBox>
      <Preview url={code.url}/>
      <Description title={code.title} desc={code.desc} id={code.id}/>
    </FlexBox>);
};
export default Detail;