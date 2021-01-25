import React, { useState } from "react";
import styled from "styled-components";
import Contact from "../Contact/Contact";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const Container = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #337d87;
  color: white;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const UnorderedList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 0;
  height: 100%;
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  font-size: 2rem;
  width: fit-content;
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    height: 100%;
    background-color: rgb(130, 196, 159, 0.5);
    cursor: pointer;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 24vw;
  padding-right: 24vw;

  @media (max-width: 768px) {
    padding-left: 3vw;
    padding-right: 3vw;
  }
  @media (max-width: 367px) {
    padding-left: 1vw;
    padding-right: 1vw;
  }
`;

const StyledModal = styled(Modal)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <ItemContainer>
        <UnorderedList>
          <ListItem
            onClick={() => {
              document
                .getElementById("intro")
                .scrollIntoView({ block: "center", behavior: "smooth" });
            }}
          >
            About
          </ListItem>
          <ListItem
            onClick={() => {
              document
                .getElementById("timeline")
                .scrollIntoView({ block: "start", behavior: "smooth" });
            }}
          >
            Timeline
          </ListItem>
          <ListItem onClick={handleOpen}>Contact</ListItem>
          <StyledModal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Contact />
            </Fade>
          </StyledModal>
        </UnorderedList>
      </ItemContainer>
    </Container>
  );
};

export default Header;
