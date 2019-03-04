import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import RestaurantForm from "./RestaurantForm";
import { fireEvent } from "react-testing-library/dist";

test("displays all form fields on load", () => {
  const match = { params: { id: 1 } };
  const { getByLabelText } = render(<RestaurantForm match={match} />);

  expect(getByLabelText("Name")).toHaveAttribute("type", "text");
  expect(getByLabelText("Address")).toHaveAttribute("type", "text");
  expect(getByLabelText("Opening Time")).toHaveAttribute("type", "text");
  expect(getByLabelText("Closing Time")).toHaveAttribute("type", "text");
  expect(getByLabelText("Cuisine")).toBeInTheDocument();
  expect(getByLabelText("Average Price")).toHaveAttribute("type", "number");
  expect(getByLabelText("Image URL")).toHaveAttribute("type", "text");
});

test("Save button disabled on page load", () => {
  const match = { params: { id: 1 } };
  const returnPath = "/admin";
  const { getByText } = render(
    <RestaurantForm match={match} returnPath={returnPath} />
  );

  expect(getByText("Save")).toHaveAttribute("disabled");
});

test("Error message appears if text input is invalid", () => {
  const match = { params: { id: 1 } };
  const returnPath = "/admin";
  const { queryByText, getByText, getByLabelText } = render(
    <RestaurantForm match={match} returnPath={returnPath} />
  );

  const nameInput = getByLabelText("Name");
  fireEvent.change(nameInput, { target: { value: "some name" } });
  expect(
    queryByText('"name" is not allowed to be empty')
  ).not.toBeInTheDocument();
  fireEvent.change(nameInput, { target: { value: "" } });
  expect(queryByText('"name" is not allowed to be empty')).toBeInTheDocument();
});

test("Error message disappears if text input is valid", () => {
  const match = { params: { id: 1 } };
  const returnPath = "/admin";
  const { queryByText, getByText, getByLabelText } = render(
    <RestaurantForm match={match} returnPath={returnPath} />
  );

  const nameInput = getByLabelText("Name");
  fireEvent.change(nameInput, { target: { value: "some name" } });
  expect(
    queryByText('"name" is not allowed to be empty')
  ).not.toBeInTheDocument();
  fireEvent.change(nameInput, { target: { value: "" } });
  fireEvent.change(nameInput, { target: { value: "some name" } });
  expect(
    queryByText('"name" is not allowed to be empty')
  ).not.toBeInTheDocument();
});

test("Error message disappears if number input is valid", () => {
  const match = { params: { id: 1 } };
  const returnPath = "/admin";
  const { queryByText, getByText, getByLabelText } = render(
    <RestaurantForm match={match} returnPath={returnPath} />
  );

  const priceInput = getByLabelText("Average Price");
  fireEvent.change(priceInput, { target: { value: 12 } });
  expect(
    queryByText('"name" is not allowed to be empty')
  ).not.toBeInTheDocument();
  fireEvent.change(priceInput, { target: { value: 0 } });
  expect(
    queryByText('"averagePrice" must be larger than or equal to 2')
  ).toBeInTheDocument();
  fireEvent.change(priceInput, { target: { value: 12 } });
  expect(
    queryByText('"averagePrice" must be larger than or equal to 2')
  ).not.toBeInTheDocument();
});
