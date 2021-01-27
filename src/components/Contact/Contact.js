import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
require("dotenv").config();

const Container = styled.div`
  width: 50%;
  height: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Content = styled.div`
  padding: 2rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
`;

const StyledTextField = styled(TextField)`
  width: 70%;
  && {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 95%;
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #337d87;
    margin-top: 1rem;
    margin-bottom: 1rem;
    :hover {
      background-color: rgb(130, 196, 159, 0.7);
    }
  }
`;

const StyledTypography = styled(Typography)`
  color: gray;
`;

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const history = useHistory();

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const formFieldChangeHandler = (event) => {
    setContactForm({
      ...contactForm,
      [event.target.name]: event.target.value,
    });
  };

  const [messageIsSent, setMessageIsSent] = useState(false);

  const [nameIsValidated, setNameIsValidated] = useState(true);
  const [emailIsValidated, setEmailIsValidated] = useState(true);
  const [msgIsValidated, setMsgIsValidated] = useState(true);

  const formInputIsValidated = () => {
    if (contactForm.name === "") setNameIsValidated(false);
    else setNameIsValidated(true);

    if (
      contactForm.email === "" ||
      !contactForm.email.includes("@", ".com", ".ca")
    )
      setEmailIsValidated(false);
    else setEmailIsValidated(true);

    if (contactForm.message === "") setMsgIsValidated(false);
    else setMsgIsValidated(true);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    formInputIsValidated();

    // if(!nameIsValidated &&
    //   !emailIsValidated &&
    //   !msgIsValidated)
    if (
      !captchaVerified &&
      nameIsValidated &&
      !emailIsValidated &&
      msgIsValidated
    )
      alert("Please verify that you are not a robot.");

    if (captchaVerified) {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          contactForm,
          process.env.REACT_APP_USER_ID
        )
        .then((response) => {
          if (response.status === 200) {
            setCaptchaVerified(false);
            setMessageIsSent(true);
            history.go(0);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const captchaIsVerified = () => {
    setCaptchaVerified(true);
  };

  return (
    <Container>
      <Paper elevation={3}>
        <Content>
          <Typography variant="h5">Reach out to me here! 👋</Typography>

          <Form onSubmit={onFormSubmit}>
            {nameIsValidated ? (
              <></>
            ) : (
              <Typography variant="body2" color="secondary">
                Name Required
              </Typography>
            )}
            <StyledTextField
              name="name"
              label="Name"
              value={contactForm.name}
              onChange={formFieldChangeHandler}
              variant="outlined"
            />
            {emailIsValidated ? (
              <></>
            ) : (
              <Typography variant="body2" color="secondary">
                Please Enter a Valid Email
              </Typography>
            )}
            <StyledTextField
              name="email"
              label="Email"
              value={contactForm.email}
              onChange={formFieldChangeHandler}
              variant="outlined"
            />
            {msgIsValidated ? (
              <></>
            ) : (
              <Typography variant="body2" color="secondary">
                Please Leave a Message
              </Typography>
            )}
            <StyledTextField
              name="message"
              label="Message"
              value={contactForm.message}
              onChange={formFieldChangeHandler}
              multiline
              variant="outlined"
            />
            {contactForm.name !== "" &&
            contactForm.email !== "" &&
            contactForm.email.includes("@", ".com", ".ca") &&
            contactForm.message !== "" ? (
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                onChange={captchaIsVerified}
              />
            ) : (
              <></>
            )}
            <StyledButton type="submit">Send</StyledButton>
            {messageIsSent ? (
              <StyledTypography variant="body1">
                Message Sent, Thank you!
              </StyledTypography>
            ) : (
              <></>
            )}
          </Form>
        </Content>
      </Paper>
    </Container>
  );
};

export default Contact;
