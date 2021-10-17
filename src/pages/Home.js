import React from "react";
import styled from 'styled-components';
import ProfileImage from "../components/home/ProfileImage";
import Search from "../components/home/Search";
import List from "../components/home/List";
import SearchInput from "../components/home/SearchInput";
import Button from "../components/common/Button";
import Image1 from "../img/1.jpg";
import Image2 from "../img/2.jpg";
import Image3 from "../img/3.jpg";

const HomeBox = styled.div`
  overflow: auto;
`;

const Home = () => {
  return (
  <HomeBox>
    <ProfileImage 
      src={Image1} alt="Profile Image"/>
    {/* <Search>
      <SearchInput/>
    </Search> */}
    <List/>
  </HomeBox>);
};
export default Home;