import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import HomePage from "./HomePage";
import * as RestaurantService from "../../services/restaurantService";

const sampleData = [
  {
    _id: "5c342ac9fc13ae39f8000000",
    name: "The Burger Bar by Fatboy's Concepts (Boat Quay)",
    address: "35 Boat Quay, 049824 Singapore",
    openingTime: "11:00 AM",
    closingTime: "10:30 PM",
    cuisine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000000.jpg"
  },
  {
    _id: "5c342ac9fc13ae39f8000001",
    name: "The Soup Spoon (Tanjong Pagar Exchange)",
    address: "120 Maxwell Road, Tanjong Pagar Xchange, B1-31, 069119 Singapore",
    openingTime: "12:00 PM",
    closingTime: "9:30 PM",
    cuisine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000001.jpg"
  },
  {
    _id: "5c342ac9fc13ae39f8000003",
    name: "Ramen Champion",
    address:
      "#03-89, 6 Eu Tong Sen Street, The Central, Clarke Quay, Lower Central, 059817 Singapore",
    openingTime: "11:00",
    closingTime: "22:00",
    cuisine: { _id: "5c3430ecfc13ae122d000001", name: "Japanese" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000003.jpg",
    averagePrice: 20
  },
  {
    _id: "5c342ac9fc13ae39f8000004",
    name: "Umi Sushi (One Raffles Place)",
    address:
      "B1-24/25, 1 Raffles Place, OUB Centre, Clarke Quay, Lower Central, 048616 Singapore",
    openingTime: "11:00",
    closingTime: "20:00",
    cuisine: { _id: "5c3430ecfc13ae122d000001", name: "Japanese" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000004.jpg",
    averagePrice: 15
  }
];

beforeEach(() => {
  jest
    .spyOn(RestaurantService, "getRestaurants")
    .mockImplementation(() => sampleData);
});

afterEach(() => {
  RestaurantService.getRestaurants.mockRestore();
});

test("displays list of two restaurants on load", () => {
  const { getAllByText } = render(<HomePage />);

  expect(RestaurantService.getRestaurants).toHaveBeenCalledTimes(1);
  expect(getAllByText("Order").length).toEqual(4);
});

test("Display only japanese rest if japanese is selected", () => {
  const { getByText, queryByText, container } = render(<HomePage />);

  const button = getByText(/japanese/i, "btn");
  console.log(button);

  fireEvent.click(button, { button: 1 });

  expect(getByText(/ramen.*champion/i)).toBeInTheDocument();
  expect(getByText(/Umi.*Sushi/i)).toBeInTheDocument();
  expect(queryByText(/Soup.*Spoon/i)).not.toBeInTheDocument();
});
