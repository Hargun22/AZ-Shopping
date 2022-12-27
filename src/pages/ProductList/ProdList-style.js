import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div``;
export const Title = styled.h1`
  margin: 20px;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

export const FilterText = styled.span`
  font-size: 1em;
  font-weight: 600;
  margin-right: 10px;
  ${mobile({ fontSize: "0.8em", marginRight: "0px", marginBottom: "5px" })}
`;

export const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
  ${mobile({ margin: "10px 0px" })}
`;

export const Option = styled.option``;
