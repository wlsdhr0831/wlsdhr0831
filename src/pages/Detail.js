import React, { useEffect } from "react";
import FlexBox from "../components/common/FlexBox";
import Description from "../layouts/Description";
import Preview from "../layouts/Preview";

const Detail = ({ match }) => {
  useEffect(() => {
    console.log(match.params.id);
  }, []);




  return (
    <FlexBox>
      <Preview/>
      <Description/>
    </FlexBox>);
};
export default Detail;