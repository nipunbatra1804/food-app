import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from "../Restaurant/Restaurant";
import "./HomePage.scss";
import FilterBar from "../FilterBar/FilterBar";
import { getCuisines } from "../../services/cuisineService";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants(),
    cuisines: getCuisines()
  };
  render() {
    const { restaurants, cuisines } = this.state;
    return (
      <div className="container">
        <div className="col-4 mx-auto mt-3">
          <FilterBar cuisines={cuisines} />
        </div>
        <div className="row">
          {restaurants.map(restaurant => (
            <div className="card-col" key={restaurant._id}>
              <Restaurant details={restaurant} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
