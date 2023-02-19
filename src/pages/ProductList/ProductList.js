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
  const [filters, setFilters] = React.useState({});
  const [sort, setSort] = React.useState("newest");
  const [category, setCategory] = React.useState(
    location.state.item?.category || null
  );

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "All Sizes" || value === "All Colours") {
      const newFilters = { ...filters };
      delete newFilters[e.target.name];
      setFilters(newFilters);
    } else {
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    }
  };

  return (
    <Container>
      <Navbar />
      <FilterContainer>
        <Filter>
          <FilterText>Filter Category:</FilterText>
          <Select
            onChange={(e) => {
              if (e.target.value === "All") {
                setCategory(null);
              } else {
                setCategory(e.target.value.toLowerCase());
              }
            }}
            defaultValue={category || "All"}
          >
            <Option disabled>Category</Option>
            <Option value="All">All</Option>
            <Option value="men">Men</Option>
            <Option value="women">Women</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filter Prodcuts:</FilterText>
          <Select name="color" onChange={(e) => handleChange(e)}>
            <Option disabled>Color</Option>
            <Option>All Colours</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
          </Select>
          <Select name="size" onChange={(e) => handleChange(e)}>
            <Option disabled>Size</Option>
            <Option>All Sizes</Option>
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
