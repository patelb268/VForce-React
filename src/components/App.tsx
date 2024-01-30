import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";

// App Component.
const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
