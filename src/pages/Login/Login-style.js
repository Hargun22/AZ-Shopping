import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(148, 255, 223, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid black;
  ${mobile({ width: "75%" })}
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 2em;
  font-weight: 500;
  text-align: center;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
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
  font-size: 0.8em;
  ${mobile({ width: "50%" })};

  &:hover {
    background-color: black;
    color: white;
    font-weight: 600;
  }
  &:disabled {
    cursor: not-allowed;
    color: gray;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HyperLink = styled.a`
  margin: 5px 0px;
  cursor: pointer;
  font-size: 0.8em;
  text-decoration: underline;
  color: black;
`;

export const Error = styled.div`
  color: red;
  font-size: 0.8em;
  margin: 5px 0px;
`;
