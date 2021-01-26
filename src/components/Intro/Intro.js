import React from "react";
import styled from "styled-components";
import ProfileImg from "../../images/profile.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import SocialMedia from "../SocialMedia/SocialMedia";
import Zoom from "@material-ui/core/Zoom";
import TrackVisibility from "react-on-screen";

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
  paper: {
    padding: "0.8rem",
  },
}));

const Container = styled.div`
  text-align: center;
  padding-left: 24vw;
  padding-right: 24vw;
  padding-top: 10vh;
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

  p {
    width: 80%;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

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

  return (
    <Container id="intro">
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <Zoom in={isVisible} timeout={{ enter: 2000 }}>
            <Paper elevation={5} width="auto" className={classes.paper}>
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
                  I am Full-Stack Software Developer with an Electrical
                  Engineering background, and I am always thinking about things
                  I can do to shape the world of today. <br />
                  <br />I enjoy to sports, exploring new food and places,
                  learning about business and investments, and coding.
                </p>
                <SocialMedia />
              </Content>
            </Paper>
          </Zoom>
        )}
      </TrackVisibility>
    </Container>
  );
};

export default Intro;
