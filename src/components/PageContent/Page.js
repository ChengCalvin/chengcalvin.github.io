import React, { useEffect } from "react";

import styled from "styled-components";
import Header from "../Header/Header";

import Intro from "../Intro/Intro";
import CustomizedTimeline from "../Timeline/Timeline";

const ProfileIntro = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  padding-top: 4rem;
  z-index: 1;
  width: 100%;
  flex-grow: 1;
`;

const Page = () => {
  // useEffect(() => {
  //   //document.getElementById("intro").scrollIntoView();
  // }, []);

  return (
    <>
      <Header />
      <ProfileIntro>
        <Intro />
        <CustomizedTimeline />
      </ProfileIntro>
    </>
  );
};

export default Page;
