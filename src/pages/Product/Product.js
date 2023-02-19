import { Add, Remove } from "@mui/icons-material";
import React, { useEffect } from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Filter,
  FilterTitle,
  FilterType,
  FilterContainer,
  FilterOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
  Price,
} from "./Product-style";

import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = React.useState({});
  const [quantity, setQuantity] = React.useState(1);
  const [color, setColor] = React.useState("");
  const [size, setSize] = React.useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/" + id);
        console.log(res.data);
        setProduct(res.data);
        setSize(res.data.size[0]);
        setColor(res.data.color[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleChangeQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.imageUrl} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>{`$${product.price}`}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterType onChange={(e) => setColor(e.target.value)}>
                {product.color?.map((c) => (
                  <FilterOption key={c}>{c}</FilterOption>
                ))}
              </FilterType>
            </Filter>
            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilterType onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterOption key={s}>{s}</FilterOption>
                ))}
              </FilterType>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleChangeQuantity("decrease")}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: "pointer", marginRight: "10px" }}
                onClick={() => handleChangeQuantity("increase")}
              />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
