import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from "../Restaurant/Restaurant";
import "./HomePage.scss";
import FilterBar from "../FilterBar/FilterBar";
import { getCuisines, getDefaultCuisine } from "../../services/cuisineService";
import { deepClone } from "lodash";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants(),
    cuisines: [getDefaultCuisine(), ...getCuisines()],
    filterId: getDefaultCuisine()._id
  };
  handleFilterValue = (eveId, data) => {
    this.setState({ filterId: eveId });
  };
  render() {
    const { restaurants, cuisines, filterId } = this.state;
    const renderRestaurants =
      filterId === getDefaultCuisine()._id
        ? restaurants
        : restaurants.filter(item => item.cuisine._id === filterId);
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <FilterBar
            cuisinesList={cuisines}
            handleClick={this.handleFilterValue}
            selectedCuisineId={filterId}
          />
        </div>
        <div className="row">
          {renderRestaurants.map(restaurant => (
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
