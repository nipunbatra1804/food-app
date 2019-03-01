import React, { Component } from "react";
import Input from "../Input/Input";

import { getCuisines, getDefaultCuisine } from "../../services/cuisineService";
import Select from "../Input/Select";
import { saveRestaurant } from "../../services/restaurantService";
import { Redirect } from "react-router-dom";
export class RestaurantForm extends Component {
  state = {
    cuisines: getCuisines(),
    data: {
      name: "",
      address: "",
      openingTime: "",
      closingTime: "",
      cuisineId: "",
      averagePrice: 0,
      imageURL: ""
    }
  };

  handleChange = event => {
    const copy = { ...this.state.data };
    const keyName = event.target.name;
    const value = event.target.value;

    keyName === "averagePrice"
      ? (copy[keyName] = parseFloat(value))
      : (copy[keyName] = value);
    console.log(copy[keyName]);
    this.setState({ data: copy });
  };

  handleSelect = event => {
    const copy = { ...this.state.data };
    const keyName = event.target.name;
    const value = event.target.value;
    copy[keyName] = value;

    console.log(copy[keyName]);
    this.setState({ data: copy });
  };

  handleSubmit = event => {
    event.preventDefault();
    const copy = { ...this.state.data };
    const { cuisines } = this.state;

    const foundCuisine = cuisines.find(
      cuisine => cuisine._id === copy.cuisineId
    );
    delete copy.cuisineId;
    copy.cuisine = foundCuisine;

    saveRestaurant(copy);
    this.props.history.push("/admin");
  };
  render() {
    return (
      <div className="w-75 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Input type={"text"} name="Name" handleChange={this.handleChange} />
            <Input
              type={"text"}
              name="Address"
              handleChange={this.handleChange}
            />
            <Input
              type={"number"}
              name="Average Price"
              handleChange={this.handleChange}
            />
            <Input
              type={"text"}
              name="Image URL"
              handleChange={this.handleChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <Input
                type={"text"}
                name="Opening Time"
                handleChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <Input
                type={"text"}
                name="Closing Time"
                handleChange={this.handleChange}
              />
            </div>
          </div>
          <Select
            name="cuisine"
            options={this.state.cuisines}
            handleChange={this.handleSelect}
            keyName="cuisineId"
          />
          <div className="row justify-content-end">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
