import React, { Component } from "react";
import { getCuisines } from "../../services/cuisineService";
import {
  getRestaurants,
  saveRestaurant
} from "../../services/restaurantService";
import Input from "../common/Input/Input";
import TimeInput from "../common/Input/TimeInput";
import SelectInput from "../common/Input/SelectInput";
import Joi from "joi-browser";

class RestaurantForm extends Component {
  state = {
    cuisines: getCuisines(),
    data: {
      name: "",
      address: "",
      openingTime: "--:--",
      closingTime: "--:--",
      cuisineId: "",
      averagePrice: "",
      imageUrl: ""
    }
  };

  schema = {
    name: Joi.string().required(),
    address: Joi.string().required(),
    openingTime: Joi.string().required(),
    closingTime: Joi.string().required(),
    cuisineId: Joi.string().required(),
    averagePrice: Joi.number()
      .integer()
      .min(2)
      .required(),
    imageUrl: Joi.string()
      .uri({ allowRelative: true })
      .required()
  };

  validate = () => {
    const opt = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, opt);

    return result.error ? false : true;
  };

  componentDidMount() {
    const id = this.props.match ? this.props.match.params.id : null;
    const restaurantFound = getRestaurants().find(
      restaurant => restaurant._id === id
    );
    if (!restaurantFound) return;
    const newRestaurant = { ...restaurantFound };
    newRestaurant.cuisineId = newRestaurant.cuisine._id;
    delete newRestaurant.cuisine;

    this.setState({ data: newRestaurant });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { cuisineId, averagePrice } = this.state.data;
    const cuisine = getCuisines().find(cuisine => cuisine._id === cuisineId);
    if (this.validate()) {
      console.log("abort");
      return;
    }
    let restaurant = { ...this.state.data };
    //console.log(Joi.validate(restaurant, this.schema));

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
    const { cuisines } = this.state;
    const {
      name,
      address,
      openingTime,
      closingTime,
      cuisineId,
      averagePrice,
      imageUrl
    } = this.state.data;
    return (
      <div data-testid="create-page">
        <h3>
          {this.props.match.params.id ? "Edit Restaurant" : "New Restaurant"}
        </h3>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            label="Name"
            onChange={this.handleChange}
            value={name}
          />
          <Input
            name="address"
            label="Address"
            onChange={this.handleChange}
            value={address}
          />
          <TimeInput
            name="openingTime"
            label="Opening Time"
            onChange={this.handleChange}
            value={openingTime}
          />
          <TimeInput
            name="closingTime"
            label="Closing Time"
            onChange={this.handleChange}
            value={closingTime}
          />
          <SelectInput
            name="cuisineId"
            label="Cuisine"
            options={cuisines}
            onChange={this.handleChange}
            value={cuisineId}
          />
          <Input
            name="averagePrice"
            label="Average Price"
            type="number"
            onChange={this.handleChange}
            value={averagePrice}
          />
          <Input
            name="imageUrl"
            label="Image URL"
            onChange={this.handleChange}
            value={imageUrl}
          />
          <button className="btn btn-primary btn-sm">Save</button>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
