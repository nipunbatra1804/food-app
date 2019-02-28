import React, { Component } from "react";
import RestaurantTable from "../RestaurantTable/RestaurantTable";
import {
  getRestaurants,
  deleteRestaurant
} from "../../services/restaurantService";
import { Link } from "react-router-dom";
class AdminPage extends Component {
  state = {
    restaurants: getRestaurants()
  };

  handleDelete = restaurantId => {
    deleteRestaurant(restaurantId);
    this.setState({ restaurants: getRestaurants() });
  };

  render() {
    const { restaurants } = this.state;
    return (
      <div data-testid="admin-page">
        <div className="row justify-content-end">
          <Link className="btn btn-primary" to="/restaurants/new">
            Create New
          </Link>
        </div>
        <RestaurantTable
          restaurants={restaurants}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default AdminPage;
