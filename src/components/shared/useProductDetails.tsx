import { useEffect, useState } from "react";

const useProductDetails = (params) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    const data = await fetch(
      "https://dummyjson.com/products/" + params.productId,
    );
    const dataJson = await data.json();
    setProduct(dataJson);
  };

  return product;
};

export default useProductDetails;
