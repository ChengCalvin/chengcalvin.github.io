import React, { useState } from "react";
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
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Avatar from "@material-ui/core/Avatar";
import TrackVisibility from "react-on-screen";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: "#337d87",
  },
}));

const Container = styled.div`
  margin-top: 20vh;
  margin-bottom: 20vh;
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

const StyledTypographyTitle = styled(Typography)`
  color: black;
  && {
    margin-bottom: 2rem;
  }
`;

const TypographyGray = styled(Typography)`
  color: gray;
`;

const TimelineItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimelineContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  && {
    background-color: #337d87;
    margin: 0.1rem;
    :hover {
      background-color: rgb(130, 196, 159, 0.7);
    }
  }
`;

const CustomizedTimeline = () => {
  const classes = useStyles();

  const [openExperience, setOpenExperience] = useState("");

  return (
    <Container id="timeline">
      <StyledTypographyTitle variant="h4">My Career Path</StyledTypographyTitle>
      <TrackVisibility style={{ width: "100%" }} partialVisibility>
        {({ isVisible }) => (
          <Zoom in={isVisible} timeout={{ enter: 2000 }}>
            <TimelineContainer>
              <Timeline align="alternate">
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Zoom in={isVisible} timeout={4000}>
                      <StyledTypography variant="body1">
                        <b>Summer, 2021</b>
                      </StyledTypography>
                    </Zoom>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      className={classes.secondaryTail}
                    ></TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Slide direction="right" in={isVisible} timeout={6000}>
                      <Paper elevation={3} className={classes.paper}>
                        <TimelineItemTitle>
                          <Typography variant="h6" component="h1" align="left">
                            Thirdbridge | Software Developer
                          </Typography>
                          <IconBox>
                            {openExperience === "tb" ? (
                              <ArrowDropUpIcon
                                onClick={() => setOpenExperience("")}
                              />
                            ) : (
                              <ArrowDropDownIcon
                                onClick={() => setOpenExperience("tb")}
                              />
                            )}
                          </IconBox>
                        </TimelineItemTitle>

                        {openExperience === "tb" ? (
                          <Zoom in={openExperience === "tb"} timeout={1000}>
                            <div>
                              <Typography align="left">
                                • Developed a feedback modal after a bad rating
                                to prompt users to leave a comment on their
                                experience using Circle K EasyFuel. This
                                information is crucial for Circle K to improve
                                the UX/UI of customers.
                              </Typography>
                              <Typography align="left">
                                • Implemented a Referral method using Firebase
                                Dynamic Links for users to have a method to
                                share the applications with their friends. The
                                Firebase analytical feature are important data
                                used by Circle K to improve their services.
                              </Typography>
                            </div>
                          </Zoom>
                        ) : (
                          <></>
                        )}
                      </Paper>
                    </Slide>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent>
                    <Zoom in={isVisible} timeout={7000}>
                      <StyledTypography variant="body1">
                        <b>Winter, 2021</b>
                      </StyledTypography>
                    </Zoom>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      className={classes.secondaryTail}
                    ></TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Slide direction="left" in={isVisible} timeout={5000}>
                      <Paper elevation={3} className={classes.paper}>
                        <TimelineItemTitle>
                          <Typography align="left" variant="h6">
                            Onepoint @ Société Générale | Operation and Support
                            Analyst
                          </Typography>
                          <IconBox>
                            {openExperience === "onepoint" ? (
                              <ArrowDropUpIcon
                                onClick={() => setOpenExperience("")}
                              />
                            ) : (
                              <ArrowDropDownIcon
                                onClick={() => setOpenExperience("onepoint")}
                              />
                            )}
                          </IconBox>
                        </TimelineItemTitle>
                        {openExperience === "onepoint" ? (
                          <Zoom
                            in={openExperience === "onepoint"}
                            timeout={1000}
                          >
                            <div>
                              <Typography align="left">
                                • Resolve day to day incidents rapidly with the
                                internal trading systems to prevent traders from
                                missing crucial trades throughout the day.
                                Resolved missing data in regulatory reports
                                which prevented the company from receiving
                                high-cost penalty.
                              </Typography>
                              <Typography align="left">
                                • Ensured stock trades regulatory reports are
                                sent out at the end of the day through the
                                internal pipeline.
                              </Typography>
                              <Typography align="left">
                                • Refined the teams’ documentation to allow easy
                                on boarding for the future employees
                              </Typography>
                            </div>
                          </Zoom>
                        ) : (
                          <></>
                        )}
                      </Paper>
                    </Slide>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent>
                    <Zoom in={isVisible} timeout={4000}>
                      <StyledTypography variant="body1">
                        <b>Fall, 2020</b>
                      </StyledTypography>
                    </Zoom>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      className={classes.secondaryTail}
                    ></TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Slide direction="right" in={isVisible} timeout={6000}>
                      <Paper elevation={3} className={classes.paper}>
                        <TimelineItemTitle>
                          <Typography variant="h6" component="h1" align="left">
                            REL Realty Advisors
                          </Typography>
                          <IconBox>
                            <Link
                              href="https://relra.com/"
                              target="_blank"
                              rek="noopener"
                            >
                              <StyledAvatar>
                                <LanguageIcon />
                              </StyledAvatar>
                            </Link>
                            {openExperience === "REL" ? (
                              <ArrowDropUpIcon
                                onClick={() => setOpenExperience("")}
                              />
                            ) : (
                              <ArrowDropDownIcon
                                onClick={() => setOpenExperience("REL")}
                              />
                            )}
                          </IconBox>
                        </TimelineItemTitle>

                        {openExperience === "REL" ? (
                          <Zoom in={openExperience === "REL"} timeout={1000}>
                            <div>
                              <Typography align="left">
                                Led the development of REL's founder first
                                website
                              </Typography>
                              <Typography align="left">
                                <b>Technologies</b>: JavaScript, Next, HTML,
                                CSS, Emailjs, ReCaptcha, i18n-next
                              </Typography>
                            </div>
                          </Zoom>
                        ) : (
                          <></>
                        )}
                      </Paper>
                    </Slide>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Zoom in={isVisible} timeout={7000}>
                      <StyledTypography variant="body1">
                        <b>Spring, 2020</b>
                      </StyledTypography>
                    </Zoom>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      className={classes.secondaryTail}
                    ></TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Slide direction="left" in={isVisible} timeout={5000}>
                      <Paper elevation={3} className={classes.paper}>
                        <TimelineItemTitle>
                          <Typography align="left" variant="h6">
                            E-Sport Statistic Tracker{" "}
                          </Typography>
                          <IconBox>
                            <Link
                              href="https://guesswhoapp.herokuapp.com/"
                              target="_blank"
                              rek="noopener"
                            >
                              <StyledAvatar>
                                <LanguageIcon />
                              </StyledAvatar>
                            </Link>
                            {"  "}
                            <Link
                              href="https://github.com/ChengCalvin/guesswhoApp"
                              target="_blank"
                              rek="noopener"
                            >
                              <StyledAvatar>
                                <GitHubIcon />
                              </StyledAvatar>
                            </Link>
                            {openExperience === "EsportProject" ? (
                              <ArrowDropUpIcon
                                onClick={() => setOpenExperience("")}
                              />
                            ) : (
                              <ArrowDropDownIcon
                                onClick={() =>
                                  setOpenExperience("EsportProject")
                                }
                              />
                            )}
                          </IconBox>
                        </TimelineItemTitle>
                        {openExperience === "EsportProject" ? (
                          <Zoom
                            in={openExperience === "EsportProject"}
                            timeout={1000}
                          >
                            <div>
                              <Typography align="left">
                                The goal of this project was to get myself
                                familiar with the disciplines involved with
                                building a complete software product and learn
                                how to build an app end-to-end.
                              </Typography>
                              <Typography align="left">
                                <b>Technologies</b>: JavaScript, Python, React,
                                Redux, Node, Express, MongoDB, HTML, CSS
                              </Typography>
                            </div>
                          </Zoom>
                        ) : (
                          <></>
                        )}
                      </Paper>
                    </Slide>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Zoom in={isVisible} timeout={6000}>
                      <StyledTypography variant="body1">
                        <b>Fall, 2019</b>
                      </StyledTypography>
                    </Zoom>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      className={classes.secondaryTail}
                    ></TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Slide direction="right" in={isVisible} timeout={4000}>
                      <Paper elevation={3} className={classes.paper}>
                        <Typography align="left">
                          Learned: React, JavaScript and Python
                        </Typography>
                      </Paper>
                    </Slide>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Zoom in={isVisible} timeout={2000}>
                      <StyledTypography variant="body1">
                        <b>Summer, 2018</b>
                      </StyledTypography>
                    </Zoom>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      className={classes.secondaryTail}
                    ></TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Slide direction="left" in={isVisible} timeout={6000}>
                      <Paper elevation={3} className={classes.paper}>
                        <TimelineItemTitle>
                          <Typography align="left" variant="h6" component="h1">
                            Electrical Journey
                          </Typography>
                          <div>
                            {openExperience === "EEJourney" ? (
                              <ArrowDropUpIcon
                                onClick={() => setOpenExperience("")}
                              />
                            ) : (
                              <ArrowDropDownIcon
                                onClick={() => setOpenExperience("EEJourney")}
                              />
                            )}
                          </div>
                        </TimelineItemTitle>
                        {openExperience === "EEJourney" ? (
                          <Zoom
                            in={openExperience === "EEJourney"}
                            timeout={1000}
                          >
                            <div>
                              <TypographyGray align="left" variant="body2">
                                <i>Joined Zimmer Biomet, Summer 2018</i>
                              </TypographyGray>
                              <Typography align="left">
                                Worked on System Requirements and Electrical
                                Requirements Compliance
                              </Typography>
                              <TypographyGray align="left" variant="body2">
                                <i>Joined CAE, Spring 2019</i>
                              </TypographyGray>
                              <Typography align="left">
                                Worked on Electrical Systems CAD
                              </Typography>
                            </div>
                          </Zoom>
                        ) : (
                          <></>
                        )}
                      </Paper>
                    </Slide>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Zoom in={isVisible} timeout={3000}>
                      <StyledTypography variant="body1">
                        <b>Spring, 2018</b>
                      </StyledTypography>
                    </Zoom>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      className={classes.secondaryTail}
                    ></TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>
                    <Slide direction="right" in={isVisible} timeout={5000}>
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
          </Zoom>
        )}
      </TrackVisibility>
    </Container>
  );
};

export default CustomizedTimeline;
