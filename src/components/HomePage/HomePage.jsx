import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from "../Restaurant/Restaurant";
export default class HomePage extends Component {
  state = {
    restaurants: getRestaurants()
  };

  render() {
    return (
      <div className="row">
        {this.state.restaurants.map(rest => (
          <Restaurant key={rest._id} item={rest} />
        ))}
      </div>
    );
  }
}
