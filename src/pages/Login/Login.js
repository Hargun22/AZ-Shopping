import React from "react";
import * as LoginStyle from "./Login-style";

const Login = () => {
  return (
    <LoginStyle.Container>
      <LoginStyle.Wrapper>
        <LoginStyle.Title>SIGN IN</LoginStyle.Title>
        <LoginStyle.Form>
          <LoginStyle.Input placeholder="username" />
          <LoginStyle.Input placeholder="password" />
        </LoginStyle.Form>
        <LoginStyle.ButtonContainer>
          <LoginStyle.Button>Sign In</LoginStyle.Button>
        </LoginStyle.ButtonContainer>
        <LoginStyle.LinkContainer>
          <LoginStyle.Link>Forgot Password?</LoginStyle.Link>
          <LoginStyle.Link>Sign Up</LoginStyle.Link>
        </LoginStyle.LinkContainer>
      </LoginStyle.Wrapper>
    </LoginStyle.Container>
  );
};

export default Login;
