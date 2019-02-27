import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import { getCuisines, getDefaultCuisine } from "../../services/cuisineService";
import Restaurant from "../Restaurant/Restaurant";
import FilterBar from "../FilterBar/FilterBar";
import SortBySelect from "../SortBySelect/SortBySelect";
import "./HomePage.scss";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants(),
    cuisines: [getDefaultCuisine(), ...getCuisines()],
    selectedCuisine: null,
    selectSort: "restaurantName",
    selectOptions: [
      { name: "Popularity", value: "None" },
      { name: "Restaurant Name", value: "restaurantName" },
      { name: "Average Price", value: "averagePrice" }
    ]
  };

  handleCuisineSelect = cuisine => {
    const finalCuisine = cuisine.name === "All" ? null : cuisine;
    this.setState({
      selectedCuisine: finalCuisine
    });
  };

  handleSortSelect = event => {
    console.log(event.target.value);
    this.setState({ selectSort: event.target.value });
  };

  compareByName = (a, b) => {
    let aN = a.name.toLowerCase();
    let bN = b.name.toLowerCase();
    if (aN > bN) return 1;
    if (aN < bN) return -1;
    return 0;
  };
  compareByPrice = (a, b) => {
    return a.averagePrice - b.averagePrice;
  };

  sortByOption(restaurants, sortByOption) {
    switch (sortByOption) {
      case "restaurantName":
        return restaurants.sort(this.compareByName);
      case "averagePrice":
        return restaurants.sort(this.compareByPrice);
      default:
        return restaurants;
    }
  }

  render() {
    const {
      restaurants,
      cuisines,
      selectedCuisine,
      selectSort,
      selectOptions
    } = this.state;
    const filteredRestaurantList =
      selectedCuisine && selectedCuisine._id
        ? restaurants.filter(res => res.cuisine._id === selectedCuisine._id)
        : restaurants;
    const sortedRestaurantList = this.sortByOption(
      filteredRestaurantList,
      selectSort
    );

    return (
      <div className="container">
        <div className="row justify-content-between align-items-center mt-3">
          <div className="col-sm">
            <FilterBar
              cuisines={cuisines}
              selected={selectedCuisine}
              handleClick={this.handleCuisineSelect}
            />
          </div>

          <div className="justify-content-end align-items-stretch">
            <div className="col-sm">
              <SortBySelect
                handleSortSelect={this.handleSortSelect}
                selectedSortValue={selectSort}
                sortOptions={selectOptions}
              />
            </div>
          </div>
        </div>

        <div className="row">
          {sortedRestaurantList.map(restaurant => (
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
