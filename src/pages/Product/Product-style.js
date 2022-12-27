import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

export const Title = styled.h1`
  font-weight: 400;
`;
export const ImgContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
export const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 300;
`;
export const Price = styled.span`
  font-weight: 200;
  font-size: 1.75em;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  width: 40%;
  ${mobile({ width: "100%" })}
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterTitle = styled.span`
  font-size: 1em;
  font-weight: 200;
`;
export const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 3px;
  cursor: pointer;
`;
export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
`;
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
export const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  border-radius: 20px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;
