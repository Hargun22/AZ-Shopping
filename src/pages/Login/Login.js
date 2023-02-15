import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  ButtonContainer,
  Button,
  HyperLink,
  LinkContainer,
  Error,
} from "./Login-style";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password }, navigate);
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <ButtonContainer>
          <Button onClick={handleClick} disabled={isFetching}>
            Sign In
          </Button>
        </ButtonContainer>
        {error && <Error>Something went wrong...</Error>}
        <LinkContainer>
          <HyperLink>Forgot Password?</HyperLink>
          <Link to="/register">
            <HyperLink>Sign Up</HyperLink>
          </Link>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
