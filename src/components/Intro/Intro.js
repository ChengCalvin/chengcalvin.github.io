import React from "react";
import styled from "styled-components";
import ProfileImg from "../../images/charlevoixprofile.jpg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: start;
  width: 40%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0;
`;

const TextContent = styled.div`
  width: 50%;
`;

const ProfileImageContainer = styled.div`
  width: 40%;
`;

const ProfileImage = styled.img`
  width: 100%;
  border: 2px solid black;
`;

const Intro = () => (
  <Container>
    <TextContent>
      <Name>Calvin Cheng</Name>
      <p>
        I am a passionate self-taught developer that likes to build cool
        projects, enjoying my time with people around me and go on an adventure.
      </p>
    </TextContent>
    <ProfileImageContainer>
      <ProfileImage src={ProfileImg} alt="Calvin Cheng" />
    </ProfileImageContainer>
  </Container>
);

export default Intro;
