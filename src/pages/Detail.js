import React, { useEffect, useState } from "react";
import FlexBox from "../components/common/FlexBox";
import Description from "../layouts/Description";
import Preview from "../layouts/Preview";

const Detail = ({ match }) => {
  useEffect(() => {
    setCode(codeList[match.params.id-1]);
  }, []);

  const [code, setCode] = useState({
    id: 0,
    title: '',
    desc: '',
    code: '',
  });

  const codeList = [
    {
      id: 1,
      title: "버튼",
      desc: "버튼",
      code: "<button>예시 버튼</button>"
    },
    {
      id: 2,
      title: "인풋",
      desc: "버튼",
      code: "<input placeholder='예시 인풋'/>"
    }
  ];

  return (
    <FlexBox>
      <Preview code={code.code}/>
      <Description data={code}/>
    </FlexBox>);
};
export default Detail;