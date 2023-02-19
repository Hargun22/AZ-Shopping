import React from "react";
import { categories } from "../data";

import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const Title = styled.h1`
  color: Black;
  font-weight: 700;
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const TitleContainer = styled.div`
  padding: 30px;
  ${mobile({ padding: "10px", textAlign: "center" })}
`;
const Categories = () => {
  return (
    <TitleContainer>
      <Title>Categories</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </TitleContainer>
  );
};

export default Categories;
