import React from "react";
import ProfileImage from "../components/home/ProfileImage";
import Search from "../components/home/Search";
import List from "../components/home/List";
import SearchInput from "../components/home/SearchInput";
import Button from "../components/common/Button";

const Home = () => {
  return (<>
    <ProfileImage 
      src="https://cdn.mkhealth.co.kr/news/photo/202004/img_MKH200424005_0.jpg"/>
    <Search>
      <SearchInput/>
      <Button>검색</Button>
    </Search>
    <List/>
  </>);
};
export default Home;