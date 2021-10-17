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
      title: "전체 선택, 일부 선택",
      desc: "전체 선택, 일부 선택",
      url: 'select-option'
    },
    {
      id: 2,
      title: "To-do List",
      desc: "To-do List",
      url: 'to-do'
    }
  ];

  useEffect(() => {
    setCode(codeList[match.params.id-1]);
  }, []);

  useEffect(() => {
    console.log(code);
  }, [code]);

  return (
    <FlexBox>
      <Preview url={code.url}/>
      <Description title={code.title} desc={code.desc} id={code.id}/>
    </FlexBox>);
};
export default Detail;