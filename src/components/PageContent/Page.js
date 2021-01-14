import React from "react";

import styled from "styled-components";

import Intro from "../Intro/Intro";

const ProfileIntro = styled.main`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Page = () => (
  <ProfileIntro>
    <Intro />
  </ProfileIntro>
);

export default Page;
