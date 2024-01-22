import { IMG_URL, CRAD_STYLE, CARD_STYLE2 } from "../utilities/constants";

const ProductCard = (props) => {
  const { thumbnail, title, price, description, rating, brand } = props.product;

  //console.log(props.product)

  return (
    <div className="card mt-5" style={CRAD_STYLE}>
      <div className="image-container">
        <img
          src={thumbnail}
          className="card-img-top img-fluid"
          style={CARD_STYLE2}
          alt="..."
        ></img>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{"$" + price}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{description}</li>
        <li className="list-group-item">{rating}</li>
        <li className="list-group-item">{brand}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="btn btn-primary">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
