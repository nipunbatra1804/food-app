import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import RestaurantForm from "./RestaurantForm";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("displays all form fields on load", () => {
  const { getByLabelText } = render(
    <RestaurantForm match={{ path: "/restaurants/new", params: { id: "" } }} />
  );

  expect(getByLabelText("Name")).toHaveAttribute("type", "text");
  expect(getByLabelText("Address")).toHaveAttribute("type", "text");
  expect(getByLabelText("Opening Time")).toHaveAttribute("type", "text");
  expect(getByLabelText("Closing Time")).toHaveAttribute("type", "text");
  expect(getByLabelText("Cuisine")).toBeInTheDocument();
  expect(getByLabelText("Average Price")).toHaveAttribute("type", "number");
  expect(getByLabelText("Image URL")).toHaveAttribute("type", "text");
});

test("displays all form fields on load", () => {
  const { getByLabelText } = render(
    <RestaurantForm
      match={{ path: "/restaurants/123223", params: { id: "123223" } }}
    />
  );

  expect(getByLabelText("Name")).toHaveAttribute("type", "text");
  expect(getByLabelText("Address")).toHaveAttribute("type", "text");
  expect(getByLabelText("Opening Time")).toHaveAttribute("type", "text");
  expect(getByLabelText("Closing Time")).toHaveAttribute("type", "text");
  expect(getByLabelText("Cuisine")).toBeInTheDocument();
  expect(getByLabelText("Average Price")).toHaveAttribute("type", "number");
  expect(getByLabelText("Image URL")).toHaveAttribute("type", "text");
});
