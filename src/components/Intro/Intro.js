import React from "react";
import styled from "styled-components";
import ProfileImg from "../../images/charlevoixprofile.jpg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: start;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0;

  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

const Title = styled.h3`
  margin: 0;
`;

const TextContent = styled.div`
  width: 50%;
  color: white;

  @media (max-width: 375px) {
    font-size: 0.7rem;
  }
`;

const ProfileImageContainer = styled.div`
  width: 35%;
  height: auto;
  display: flex;
  align-items: center;

  @media (max-width: 375px) {
    width: 40%;
  }
`;

const ProfileImage = styled.img`
  width: 80%;
  border: 2px solid black;
`;

const Intro = () => (
  <Container>
    <TextContent>
      <Name>Calvin Cheng</Name>
      <Title>Full-Stack Developer, Montreal</Title>
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
