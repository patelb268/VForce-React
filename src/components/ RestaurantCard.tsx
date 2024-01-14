import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/RestaurantCard.css";
type RestaurantCardProps = {
  cloudinaryImageId: string;
  name: string;
  cuisines: string[];
  avgRating: number;
  costForTwo: string;
  locality: string;
};

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
  locality,
}: RestaurantCardProps) => {
  return (
    <div className="cardStyle">
      <div className="card__imag">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          className="card-img-top"
          alt="..."
        ></img>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{costForTwo}</p>
      </div>
      <div className="">
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="">{avgRating}</p>
        <p className="">{locality}</p>
      </div>
      <div className="card-body">
        <a href="#" className="btn btn-primary">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;
