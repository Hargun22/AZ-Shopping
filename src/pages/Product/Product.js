import { Add, Remove } from "@mui/icons-material";
import React from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import * as ProductStyles from "./Product-style";

const Product = () => {
  return (
    <ProductStyles.Container>
      <Navbar />
      <ProductStyles.Wrapper>
        <ProductStyles.ImgContainer>
          <ProductStyles.Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ProductStyles.ImgContainer>
        <ProductStyles.InfoContainer>
          <ProductStyles.Title>Denim Jumpsuit</ProductStyles.Title>
          <ProductStyles.Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ProductStyles.Desc>
          <ProductStyles.Price>$20</ProductStyles.Price>
          <ProductStyles.FilterContainer>
            <ProductStyles.Filter>
              <ProductStyles.FilterTitle>Color:</ProductStyles.FilterTitle>
              <ProductStyles.FilterColor color="black" />
              <ProductStyles.FilterColor color="darkblue" />
              <ProductStyles.FilterColor color="gray" />
            </ProductStyles.Filter>
            <ProductStyles.Filter>
              <ProductStyles.FilterTitle>Size</ProductStyles.FilterTitle>
              <ProductStyles.FilterSize>
                <ProductStyles.FilterSizeOption>
                  XS
                </ProductStyles.FilterSizeOption>
                <ProductStyles.FilterSizeOption>
                  S
                </ProductStyles.FilterSizeOption>
                <ProductStyles.FilterSizeOption>
                  M
                </ProductStyles.FilterSizeOption>
                <ProductStyles.FilterSizeOption>
                  L
                </ProductStyles.FilterSizeOption>
                <ProductStyles.FilterSizeOption>
                  XL
                </ProductStyles.FilterSizeOption>
              </ProductStyles.FilterSize>
            </ProductStyles.Filter>
          </ProductStyles.FilterContainer>
          <ProductStyles.AddContainer>
            <ProductStyles.AmountContainer>
              <Remove />
              <ProductStyles.Amount>1</ProductStyles.Amount>
              <Add />
            </ProductStyles.AmountContainer>
            <ProductStyles.Button>ADD TO CART</ProductStyles.Button>
          </ProductStyles.AddContainer>
        </ProductStyles.InfoContainer>
      </ProductStyles.Wrapper>
      <Newsletter />
      <Footer />
    </ProductStyles.Container>
  );
};

export default Product;
