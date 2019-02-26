import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
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
