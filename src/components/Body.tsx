import React, { useEffect, useState } from "react";

import Carousel from "./Carousel";
import ProductList from "./ProductList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const isOnline = useOnlineStatus();

  if (isOnline === false) {
    return <h1>Oops! looks like you are not connected to internet !</h1>;
  }

  return (
    <>
      <Carousel />
      <ProductList />
    </>
  );
};

export default Body;
