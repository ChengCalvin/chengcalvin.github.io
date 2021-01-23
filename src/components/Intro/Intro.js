import React, { useEffect } from "react";
import styled from "styled-components";
import ProfileImg from "../../images/charlevoixprofile.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import SocialMedia from "../SocialMedia/SocialMedia";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

const Container = styled.div`
  text-align: center;
  padding-left: 20vw;
  padding-right: 20vw;
  padding-top: 15vh;
  margin-bottom: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding-left: 3vw;
    padding-right: 3vw;
  }
  @media (max-width: 367px) {
    padding-left: 1vw;
    padding-right: 1vw;
  }
`;

const Content = styled.div`
  position: relative;
  margin: 5rem 5rem;
  height: fit-content;
  @media (max-width: 768px) {
    margin: 5rem 0.5rem;
  }
  @media (max-width: 367px) {
    margin: 5rem 0.5rem;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

const Title = styled.h3`
  margin: 0;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Intro = () => {
  const classes = useStyles();

  useEffect(() => {});

  return (
    <Container id="intro">
      <Zoom in={true} timeout={{ enter: 2000, exit: 2000 }}>
        <Paper elevation={5} width="auto">
          <Content>
            <ProfileImageContainer>
              <Avatar
                src={ProfileImg}
                alt="Calvin Cheng"
                className={classes.large}
              />
            </ProfileImageContainer>
            <Name>Calvin Cheng</Name>
            <Title>Full-Stack Developer, Montreal</Title>
            <p>
              I am an Electrical Engineer looking for a career in software
              development, and I am passionate about what I can do to shape the
              world of today.
            </p>
            <SocialMedia />
          </Content>
        </Paper>
      </Zoom>
    </Container>
  );
};

export default Intro;
