import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";
import Nav from "./Nav";
import Carousel from "./Carousel";
import ProductCard from "./ProductCard";

import "../styles/App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  //1. lets fetch the Data From API useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        const dataProducts = res.products;
        console.log(dataProducts);
        setProducts(dataProducts);

        const categoriesArray = dataProducts.map((product) => product.category);
        setCategories([...new Set(categoriesArray)]);
        console.log(categoriesArray);
      });
  };

  const filterProducts = (category) => {
    const newProducts = products.filter((product) => {
      if (category === product.category) {
        return product;
      }
    });
    setProducts(newProducts);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />

        <Carousel />

        <div className="row mt-5">
          <div className="col-8">
            <h3>Filter Products</h3>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    filterProducts(category);
                  }}
                >
                  {category.toUpperCase()}
                </button>
              ))}
              <button
                type="button"
                className="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  fetchData();
                }}
              >
                Clear filter
              </button>
            </div>
          </div>
        </div>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
