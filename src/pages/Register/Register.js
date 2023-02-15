import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import * as RegisterStyle from "./Register-style";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setError(true);
      setErrorMessage("Password does not match");
    } else {
      setError(false);
      setErrorMessage("");
    }
  }, [password, confirmPassword]);

  const handleClick = (e) => {
    e.preventDefault();
    const registerUser = async () => {
      try {
        const newUser = {
          username,
          password,
          email,
        };
        const res = await publicRequest.post("/auth/register", newUser);
        login(dispatch, { username, password }, navigate);
      } catch (err) {
        setError(true);
        setErrorMessage(err.message);
      }
    };
    registerUser();
  };

  return (
    <RegisterStyle.Container>
      <RegisterStyle.Wrapper>
        <RegisterStyle.Title>CREATE AN ACCOUNT</RegisterStyle.Title>
        <RegisterStyle.Form>
          <RegisterStyle.Input
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <RegisterStyle.Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <RegisterStyle.Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <RegisterStyle.Input
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </RegisterStyle.Form>
        {error && <RegisterStyle.Error>{errorMessage}</RegisterStyle.Error>}
        <RegisterStyle.ButtonContainer>
          <RegisterStyle.Button onClick={(e) => handleClick(e)}>
            CREATE
          </RegisterStyle.Button>
        </RegisterStyle.ButtonContainer>
      </RegisterStyle.Wrapper>
    </RegisterStyle.Container>
  );
};

export default Register;
