import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../Responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  font-weight: 300;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) =>
    props.type === "filled" ? "1px solid black" : "1px solid black"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "white")};
  color: ${(props) => props.type === "filled" && "white"};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.type === "filled" ? "rgb(43, 214, 180)" : "rgb(191, 54, 83)"};
    color: white;
    border: ${(props) =>
      props.type === "filled" ? "1px solid white" : "1px solid white"};
  }
`;

const TopTextContainer = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  ${mobile({ width: "100px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  ${mobile({ fontSize: "0.8em" })}
`;

const ProductId = styled.span`
  ${mobile({ fontSize: "0.8em" })}
`;

const ProductColorContainer = styled.span`
  display: flex;
  ${mobile({ fontSize: "0.8em" })}
`;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 5px;
  ${mobile({ width: "15px", height: "15px" })}
`;

const ProductSize = styled.span`
  ${mobile({ fontSize: "0.8em" })}
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 1.5em;
  margin: 5px;
  font-weight: 900;
  ${mobile({ margin: "10px 15px", fontWeight: "700" })}
`;

const ProductPrice = styled.div`
  font-size: 1.5em;
  font-weight: 200;
  ${mobile({ marginBottom: "10px" })}
`;

const Break = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1``;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "1.5em"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid black;

  &:hover {
    background-color: rgb(43, 214, 180);
    border: 1px solid white;
  }
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTextContainer>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTextContainer>

          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                <Details>
                  <ProductName>
                    {" "}
                    <b>Product:</b> Denim Jumpsuit
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 918210121
                  </ProductId>
                  <ProductColorContainer>
                    <b>Color: </b>
                    <ProductColor color="black" />
                  </ProductColorContainer>
                  <ProductSize>
                    <b>Size: </b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Break />
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
