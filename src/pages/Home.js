import React from "react";
import styled from 'styled-components';
import ProfileImage from "../components/home/ProfileImage";
import MainList from '../layouts/MainList';
import Search from "../components/home/Search";
import SearchInput from "../components/home/SearchInput";
import Button from "../components/common/Button";
import Image1 from "../img/1.jpg";
import Image2 from "../img/2.jpg";
import Image3 from "../img/3.jpg";

const HomeBox = styled.div`
  overflow: auto;
  height: 100%;
`;

const Home = () => {
  return (
  <HomeBox>
    <ProfileImage 
      src={Image1} alt="Profile Image"/>
    {/* <Search>
      <SearchInput/>
    </Search> */}
    <MainList></MainList>
  </HomeBox>);
};
export default Home;