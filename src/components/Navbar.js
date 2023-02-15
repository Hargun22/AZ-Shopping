import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../redux/userSlice";
import { logout } from "../redux/apiCalls";

const Container = styled.div`
  height: 50px;
  ${mobile({ height: "40px" })}
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "1em" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector(getUser);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch, navigate);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          {/* <SearchContainer>
            <Input
              style={{ color: "gray", fontSize: 12 }}
              placeholder="Search"
            />
            <Search />
          </SearchContainer> */}
        </Left>
        <Center>
          <Logo>AZ Shopping</Logo>
        </Center>
        <Right>
          {!user ? (
            <>
              <MenuItem>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/register"
                >
                  Register
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/login"
                >
                  Sign In
                </Link>
              </MenuItem>
            </>
          ) : (
            <MenuItem onClick={(e) => handleLogout(e)}>Log out</MenuItem>
          )}
          <Badge
            style={{ marginLeft: "10px" }}
            badgeContent={quantity}
            color="primary"
          >
            <Link style={{ color: "black" }} to="/cart">
              <ShoppingCartOutlined />
            </Link>
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
