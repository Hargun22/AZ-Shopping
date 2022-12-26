import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(148, 255, 223, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid black;
  ${mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 2em;
  font-weight: 500;
  text-align: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 25%;
  border: none;
  padding: 15px 20px;
  background-color: white;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid black;
  margin: 20px 0px;
  transition: all 0.3s ease;
  font-weight: 400;
  font-size: 1em;
  ${mobile({ width: "50%" })};

  &:hover {
    background-color: black;
    color: white;
    font-weight: 600;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
        </Form>
        <ButtonContainer>
          <Button>CREATE</Button>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Register;
