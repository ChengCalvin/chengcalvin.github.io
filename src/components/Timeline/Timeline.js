import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
import Link from "@material-ui/core/Link";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20vw;
  padding-right: 20vw;

  @media (max-width: 768px) {
    padding-left: 3vw;
    padding-right: 3vw;
  }
  @media (max-width: 367px) {
    padding-left: 1vw;
    padding-right: 1vw;
  }
`;

const StyledTypography = styled(Typography)`
  color: black;
`;

const CareerTitle = styled(Typography)`
  color: black;
`;

const TimelineContainer = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const CustomizedTimeline = () => {
  const classes = useStyles();

  return (
    <Container id="timeline">
      <CareerTitle variant="h4">My Career Path</CareerTitle>
      <TimelineContainer>
        <Timeline align="alternate" width="50%">
          <TimelineItem>
            <TimelineContent></TimelineContent>
            <TimelineSeparator>
              <TimelineDot className={classes.secondaryTail}></TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineOppositeContent>
              <Zoom in={true} timeout={2000}>
                <StyledTypography align="left" variant="body1">
                  <b>Today</b>
                </StyledTypography>
              </Zoom>
            </TimelineOppositeContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Zoom in={true} timeout={2000}>
                <StyledTypography variant="body1">
                  <b>Fall, 2020</b>
                </StyledTypography>
              </Zoom>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.secondaryTail}></TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Slide direction="right" in={true} timeout={2000}>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1" align="left">
                    REL Realty Advisors{" "}
                    <Link
                      href="https://relra.com/"
                      target="_blank"
                      rek="noopener"
                    >
                      <LanguageIcon />
                    </Link>
                  </Typography>

                  <Typography align="left">
                    Led the development of REL's founder first website
                  </Typography>
                  <Typography align="left">
                    <b>Technologies</b>: JavaScript, Next, HTML, CSS, Emailjs,
                    ReCaptcha, i18n-next
                  </Typography>
                </Paper>
              </Slide>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Zoom in={true} timeout={2000}>
                <StyledTypography variant="body1">
                  <b>Spring, 2020</b>
                </StyledTypography>
              </Zoom>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.secondaryTail}></TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Slide direction="left" in={true} timeout={2000}>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h6">
                    E-Sport Statistic Tracker{" "}
                    <Link
                      href="https://guesswhoapp.herokuapp.com/"
                      target="_blank"
                      rek="noopener"
                    >
                      <LanguageIcon />
                    </Link>
                    {"  "}
                    <Link
                      href="https://github.com/ChengCalvin/guesswhoApp"
                      target="_blank"
                      rek="noopener"
                    >
                      <GitHubIcon />
                    </Link>
                  </Typography>
                  <Typography align="left">
                    The goal of this project was to get myself familiar with the
                    disciplines involved with building a complete software
                    product and learn how to build an app end-to-end.
                  </Typography>
                  <Typography align="left">
                    <b>Technologies</b>: JavaScript, Python, React, Redux, Node,
                    Express, MongoDB, HTML, CSS
                  </Typography>
                </Paper>
              </Slide>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Zoom in={true} timeout={2000}>
                <StyledTypography variant="body1">
                  <b>Fall, 2019</b>
                </StyledTypography>
              </Zoom>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.secondaryTail}></TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Slide direction="right" in={true} timeout={2000}>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left">
                    Self-taught: JavaScript and Python
                  </Typography>
                </Paper>
              </Slide>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Zoom in={true} timeout={2000}>
                <StyledTypography variant="body1">
                  <b>Summer, 2018</b>
                </StyledTypography>
              </Zoom>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.secondaryTail}></TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Slide direction="left" in={true} timeout={2000}>
                <Paper elevation={3} className={classes.paper}>
                  <Typography align="left" variant="h6" component="h1">
                    My EE Career
                  </Typography>
                  <Typography align="left" variant="body2">
                    Joined Zimmer Biomet, Summer 2018
                  </Typography>
                  <Typography align="left">
                    Worked on System Requirements and Electrical Requirements
                    Compliance
                  </Typography>
                  <Typography align="left" variant="body2">
                    Joined CAE, Spring 2019
                  </Typography>
                  <Typography align="left">
                    Worked on Electrical Systems CAD
                  </Typography>
                </Paper>
              </Slide>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Zoom in={true} timeout={2000}>
                <StyledTypography variant="body1">
                  <b>Spring, 2018</b>
                </StyledTypography>
              </Zoom>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.secondaryTail}></TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Slide direction="right" in={true} timeout={2000}>
                <Paper elevatiion={3} className={classes.paper}>
                  <Typography align="left">
                    Graduation, Bachelor in Electrical Engineering
                  </Typography>
                </Paper>
              </Slide>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </TimelineContainer>
    </Container>
  );
};

export default CustomizedTimeline;
