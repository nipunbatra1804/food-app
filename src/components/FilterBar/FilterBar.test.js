import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import React from "react";
import { cleanup, render } from "react-testing-library";
import FilterBar from "./FilterBar";

const data = [
  {
    _id: "0011",
    name: "Western"
  },
  {
    _id: "0010",
    name: "Japanese"
  }
];

test("FilterBar renders correct cuisines", () => {
  const { getByText, container } = render(<FilterBar cuisinesList={data} />);
  /** Not advisable. Here for archival only */
  expect(container.querySelectorAll("button").length).toEqual(2);

  expect(getByText(/western/i)).toBeInTheDocument();
  expect(getByText(/japanese/i)).toBeInTheDocument();
});

test("FilterBars renders selected cuisine ID ", () => {
  const selectedCuisine = {
    _id: "0010",
    name: "Japanese"
  };
  const { getByText, debug } = render(
    <FilterBar cuisinesList={data} selectedCuisineId={selectedCuisine._id}>
      {" "}
    </FilterBar>
  );

  //debug();
  expect(getByText(/japanese/i)).toHaveClass("active");
});

test("FilterBars renders selectedCuisineID change/mod ", () => {
  const selectedCuisine1 = {
    _id: "0010",
    name: "Japanese"
  };
  const firstRender = render(
    <FilterBar cuisinesList={data} selectedCuisineId={selectedCuisine1._id}>
      {" "}
    </FilterBar>
  );

  //debug();

  expect(firstRender.getByText(/japanese/i)).toHaveClass("active");
  cleanup();
  const selectedCuisine2 = {
    _id: "0011",
    name: "Western"
  };
  const secondRender = render(
    <FilterBar cuisinesList={data} selectedCuisineId={selectedCuisine2._id}>
      {" "}
    </FilterBar>
  );

  //debug();
  expect(secondRender.getByText(/Western/i)).toHaveClass("active");
  //expect(secondRender.getByText(/japanese/i)).toHaveClass("active");
});
