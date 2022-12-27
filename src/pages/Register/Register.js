import React from "react";
import * as RegisterStyle from "./Register-style";
const Register = () => {
  return (
    <RegisterStyle.Container>
      <RegisterStyle.Wrapper>
        <RegisterStyle.Title>CREATE AN ACCOUNT</RegisterStyle.Title>
        <RegisterStyle.Form>
          <RegisterStyle.Input placeholder="first name" />
          <RegisterStyle.Input placeholder="last name" />
          <RegisterStyle.Input placeholder="username" />
          <RegisterStyle.Input placeholder="email" />
          <RegisterStyle.Input placeholder="password" />
          <RegisterStyle.Input placeholder="confirm password" />
        </RegisterStyle.Form>
        <RegisterStyle.ButtonContainer>
          <RegisterStyle.Button>CREATE</RegisterStyle.Button>
        </RegisterStyle.ButtonContainer>
      </RegisterStyle.Wrapper>
    </RegisterStyle.Container>
  );
};

export default Register;
