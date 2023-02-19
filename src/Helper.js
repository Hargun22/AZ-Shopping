import { publicRequest } from "./requestMethods";

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getProducts = async (category, setProducts) => {
  try {
    const res = await publicRequest.get(
      category ? `/product/?category=${category}` : "/product/"
    );
    res.data.map((item) => (item.createdAt = new Date(item.createdAt)));
    setProducts(res.data);
  } catch (err) {
    console.log(err);
  }
};
