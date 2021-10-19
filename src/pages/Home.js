import React from "react";
import styled from 'styled-components';
import MainList from '../layouts/MainList';
import Search from "../components/home/Search";
import SearchInput from "../components/home/SearchInput";
import Button from "../components/common/Button";
import Image1 from "../img/1.jpg";
import Image2 from "../img/2.jpg";
import Image3 from "../img/3.jpg";
import logo from '../img/favicon_text.png';

const HomeBox = styled.div`
  overflow: auto;
  height: 100%;
`;

const Profile = styled.div`
  position: fixed;
  top: 30px;
  left: 30px;

  & img{
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 30px;
  };
`;

const Home = () => {
  return (
  <HomeBox>
    <Profile>
      <img 
        src={logo} alt="Profile Image"/>
    </Profile>
    {/* <Search>
      <SearchInput/>
    </Search> */}
    <MainList></MainList>
  </HomeBox>);
};
export default Home;