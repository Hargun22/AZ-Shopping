import { mobile } from "../../Responsive";
import styled from "styled-components";

export const Container = styled.div``;
export const Title = styled.h1`
  margin: 20px;
  font-weight: 300;
  text-align: center;
`;

export const Wrapper = styled.div`
  padding: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
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

export const TopTextContainer = styled.div`
  ${mobile({ display: "none" })}
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  ${mobile({ flexDirection: "column" })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
  ${mobile({ width: "100px" })}
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span`
  ${mobile({ fontSize: "0.8em" })}
`;

export const ProductId = styled.span`
  ${mobile({ fontSize: "0.8em" })}
`;

export const ProductColorContainer = styled.span`
  display: flex;
  ${mobile({ fontSize: "0.8em" })}
`;

export const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 5px;
  ${mobile({ width: "15px", height: "15px" })}
`;

export const ProductSize = styled.span`
  ${mobile({ fontSize: "0.8em" })}
`;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: 1.5em;
  margin: 5px;
  font-weight: 900;
  ${mobile({ margin: "10px 15px", fontWeight: "700" })}
`;

export const ProductPrice = styled.div`
  font-size: 1.5em;
  font-weight: 200;
  ${mobile({ marginBottom: "10px" })}
`;

export const Break = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1``;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "1.5em"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
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
