import React, { Component } from "react";
import { getCuisines } from "../../services/cuisineService";
import {
  saveRestaurant,
  getRestaurant
} from "../../services/restaurantService";
import Input from "../common/Input/Input";
import TimeInput from "../common/Input/TimeInput";
import SelectInput from "../common/Input/SelectInput";

class RestaurantForm extends Component {
  state = {
    cuisines: getCuisines(),
    data: {
      name: "",
      address: "",
      openingTime: "",
      closingTime: "",
      cuisineId: "",
      averagePrice: "",
      imageUrl: ""
    }
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    let restaurant = getRestaurant(id);
    if (restaurant) {
      restaurant = { ...restaurant };
      const dataCuisineId = restaurant.cuisine._id;
      delete restaurant.cuisine;
      restaurant.cuisineId = dataCuisineId;
      this.setState({ data: restaurant });
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    const { cuisineId, averagePrice } = this.state.data;
    const cuisine = getCuisines().find(cuisine => cuisine._id === cuisineId);

    const restaurant = { ...this.state.data };
    delete restaurant.cuisineId;
    restaurant.cuisine = cuisine;
    restaurant.averagePrice = parseFloat(averagePrice);

    saveRestaurant(restaurant);
    this.props.history.replace(this.props.returnPath);
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    const { cuisines, data } = this.state;
    const pageTitle = this.props.match.path.includes("new")
      ? "New Restaurant"
      : "Edit Restaurant";
    return (
      <div data-testid="create-page">
        <h3>{pageTitle}</h3>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            label="Name"
            onChange={this.handleChange}
            value={data.name}
          />
          <Input
            name="address"
            label="Address"
            onChange={this.handleChange}
            value={data.address}
          />
          <TimeInput
            name="openingTime"
            label="Opening Time"
            onChange={this.handleChange}
            value={data.openingTime}
          />
          <TimeInput
            name="closingTime"
            label="Closing Time"
            onChange={this.handleChange}
            value={data.closingTime}
          />
          <SelectInput
            name="cuisineId"
            label="Cuisine"
            options={cuisines}
            onChange={this.handleChange}
            value={data.cuisineId}
          />
          <Input
            name="averagePrice"
            label="Average Price"
            type="number"
            onChange={this.handleChange}
            value={data.averagePrice}
          />
          <Input
            name="imageUrl"
            label="Image URL"
            onChange={this.handleChange}
            value={data.imageUrl}
          />
          <button className="btn btn-primary btn-sm">Save</button>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
