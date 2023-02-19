import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { getProducts } from "../Helper";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts(category, setProducts);
    getProducts(category, setFilteredProducts);
  }, [category]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) => {
        let isMatch = true;
        console.log(filters);
        Object.entries(filters).every(([key, value]) => {
          isMatch = item[key].includes(value) && isMatch;
        });
        return isMatch;
      })
    );
  }, [filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [filters, products, sort]);
  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
