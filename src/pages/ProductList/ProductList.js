import React from "react";
import { useLocation } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from "./ProdList-style";

import { capitalizeFirstLetter } from "../../Helper";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = React.useState({});
  const [sort, setSort] = React.useState("newest");

  const handleChange = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Title>{capitalizeFirstLetter(category)}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Prodcuts:</FilterText>
          <Select name="color" onChange={handleChange}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
          </Select>
          <Select name="size" onChange={handleChange}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option disabled>Sort</Option>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (Lowest to Highest)</Option>
            <Option value="desc">Price (Highest to Lowest)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
