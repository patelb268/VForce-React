import logo from "../assets/Logo.svg";
import cart from "../assets/cart.svg";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav>
      <img src={logo} className="logo" alt="logo" />
      <ul>
        <li>Menu</li>
        <li>About</li>
        <li>Orders</li>
        <li>Delevery</li>
        <li>Contact</li>
      </ul>

      <div className="login">
        <img src={cart} className="cart" alt="cart" />
        <p> Login </p>
      </div>
    </nav>
  );
};

export default Nav;
