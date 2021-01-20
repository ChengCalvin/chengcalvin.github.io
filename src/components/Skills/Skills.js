import React from "react";
import styled from "styled-components";
import SkillBar from "react-skillbars";

const Skills = () => {
  const Container = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const SkillBarBox = styled.div`
    width: 50%;
  `;

  const skills = [
    {
      type: "React",
      level: "80",
      color: { bar: "#61DBFB", title: { background: "#61DBFB" } },
    },
    {
      type: "JavaScript",
      level: "70",
      color: { bar: "#FFD700", title: { background: "#FFD700" } },
    },
    {
      type: "HTML",
      level: "70",
      color: { bar: "#FF5733", title: { background: "#FF5733" } },
    },
    {
      type: "CSS",
      level: "80",
      color: { bar: "#3380FF", title: { background: "#3380FF" } },
    },
    {
      type: "Python",
      level: "60",
      color: { bar: "#306998", title: { background: "#306998" } },
    },
  ];

  return (
    <Container>
      <h1>My Strong Points</h1>
      <SkillBarBox>
        <SkillBar skills={skills} height={20} />
      </SkillBarBox>
    </Container>
  );
};

export default Skills;
