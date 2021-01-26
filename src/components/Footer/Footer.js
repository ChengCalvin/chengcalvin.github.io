import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Container = styled.footer`
  height: 4rem;
  background-color: transparent;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  bottom: 0;
`;

const StyledTypography = styled(Typography)`
  && {
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
  }
  color: gray;
`;

const Footer = () => {
  return (
    <Container>
      <StyledTypography>
        &copy; Calvin Cheng 2021 | Updated January 26, 2021
      </StyledTypography>
    </Container>
  );
};

export default Footer;
