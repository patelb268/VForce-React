import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";
import Navbar from "./components/Nav";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Error from "./components/Error";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//import ProductCategory from "./src/components/ProductCategory";

// import restaurants from "./src/utils/mock_data";

const ProductCategory = lazy(() => import("./components/ProductCategory"));

// App Component.
const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

// React Router.

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/productDetails/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/ProductCategory",
        element: (
          <Suspense fallback={<Skeleton count={5} />}>
            <ProductCategory />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
