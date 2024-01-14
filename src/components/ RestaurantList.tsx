import RestaurantCard from "./ RestaurantCard";
import "../styles/RestaurantsList.css";
import { restaurants } from "../constants/service";

const RestaurantList = () => {
  return (
    <div className="restaurants_list">
      {restaurants.map((restaurant, index) => {
        return <RestaurantCard key={index} {...restaurant} />;
      })}
    </div>
  );
};

export default RestaurantList;
