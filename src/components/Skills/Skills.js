import React from "react";
import styled from "styled-components";
import WebIcon from "../../images/webicon.png";
import ReactIcon from "../../images/reacticon.png";
import ReduxIcon from "../../images/reduxicon.png";
import PythonIcon from "../../images/pythonicon.png";
import SocialMedia from "../SocialMedia/SocialMedia";
import Slide from "@material-ui/core/Slide";

const Skills = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `;

  const SkillContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  `;

  const IconIMG = styled.img`
    width: 32%;
  `;

  const SecondarySizeIconIMG = styled(IconIMG)`
    width: 20%;
  `;

  return (
    <Container>
      <h1>Technical Skills</h1>
      <SkillContainer>
        <Slide direction="left" in={true} timeout={1000}>
          <SecondarySizeIconIMG src={ReactIcon} alt="reacticon" />
        </Slide>
        <Slide direction="left" in={true} timeout={2000}>
          <SecondarySizeIconIMG src={ReduxIcon} alt="reduxicon" />
        </Slide>
        <Slide direction="left" in={true} timeout={2500}>
          <IconIMG src={WebIcon} alt="webicon" />
        </Slide>
        <Slide direction="left" in={true} timeout={3000}>
          <SecondarySizeIconIMG src={PythonIcon} alt="pythonicon" />
        </Slide>
      </SkillContainer>

      <SocialMedia />
    </Container>
  );
};

export default Skills;
