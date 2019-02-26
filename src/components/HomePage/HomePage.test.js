import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import Restaurant from "../Restaurant/Restaurant";
import HomePage from "../HomePage/HomePage";
import { render, getAllByAltText } from "react-testing-library";
import React from "react";
import { getRestaurants } from "../../services/restaurantService";
import * as RestaurantService from "../../services/restaurantService";

const data = [
  {
    _id: "5c342ac9fc13ae39f8000002",
    name: "Subway (Chinatown Point)",
    address: "133 New Bridge Road, #B1-37 Chinatown Point, 059413 Singapore",
    openingTime: "10:00",
    closingTime: "21:30",
    cuisine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000002.jpg"
  },
  {
    _id: "5c342ac9fc13ae39f8000003",
    name: "Ramen Champion",
    address:
      "#03-89, 6 Eu Tong Sen Street, The Central, Clarke Quay, Lower Central, 059817 Singapore",
    openingTime: "11:00",
    closingTime: "22:00",
    cuisine: { _id: "5c3430ecfc13ae122d000001", name: "Japanese" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000003.jpg"
  }
];
let spy;
beforeEach(() => {
  jest
    .spyOn(RestaurantService, "getRestaurants")
    .mockImplementation(() => data);
});

afterEach(() => {
  RestaurantService.getRestaurants.mockRestore();
});

test("Homepage renders list two of restaurants", () => {
  const { getByText, getAllByText } = render(<HomePage> </HomePage>);

  expect(RestaurantService.getRestaurants).toHaveBeenCalledTimes(1);
  expect(getAllByText("Order").length).toEqual(2);

  console.log(RestaurantService.getRestaurants().length);
});
