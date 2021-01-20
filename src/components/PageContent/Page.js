import React from "react";

import styled from "styled-components";

import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";

const ProfileIntro = styled.main`
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  padding-left: 20vw;
  padding-right: 20vw;

  @media (max-width: 375px) {
    padding-left: 3vw;
    padding-right: 3vw;
  }
`;

const Page = () => (
  <ProfileIntro>
    <Intro />
    <Skills />
  </ProfileIntro>
);

export default Page;
