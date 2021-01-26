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
    :hover {
      background-color: rgb(130, 196, 159, 0.7);
    }
  }
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

  const onFormSubmit = (_event) => {
    captchaVerified
      ? emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            contactForm,
            process.env.REACT_APP_USER_ID
          )
          .then((response) => {
            console.log(response);
            setCaptchaVerified(false);
            history.push("/");
          })
      : alert("Please verify that you are not a robot.");
  };

  const captchaIsVerified = () => {
    setCaptchaVerified(true);
  };

  return (
    <Container>
      <Paper elevation={3}>
        <Content>
          <Typography variant="h5">Reach out to me here!</Typography>
          <Form onSubmit={onFormSubmit}>
            <StyledTextField
              name="name"
              label="Name"
              value={contactForm.name}
              onChange={formFieldChangeHandler}
              variant="outlined"
            />
            <StyledTextField
              name="email"
              label="Email"
              value={contactForm.email}
              onChange={formFieldChangeHandler}
              variant="outlined"
            />
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
            contactForm.message !== "" ? (
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                onChange={captchaIsVerified}
              />
            ) : (
              <></>
            )}
            <StyledButton type="submit">Send</StyledButton>
          </Form>
        </Content>
      </Paper>
    </Container>
  );
};

export default Contact;
