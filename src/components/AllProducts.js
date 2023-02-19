import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { getProducts } from "../Helper";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const TitleContainer = styled.div`
  padding: 30px;
  ${mobile({ padding: "10px", textAlign: "center" })}
`;

const Title = styled.h1`
  color: Black;
  font-weight: 700;
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(null, setProducts);
  }, []);

  return (
    <TitleContainer>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Title>All Products</Title>

        <Link to="/products" state={{}}>
          <ArrowForwardIosIcon
            style={{
              fontSize: "30px",
              paddingBottom: 10,
              color: "black",
              marginLeft: 10,
            }}
          />
        </Link>
      </div>
      <Container>
        {products.slice(0, 6).map((item) => (
          <Product item={item} key={item._id} />
        ))}
      </Container>
    </TitleContainer>
  );
};

export default AllProducts;
