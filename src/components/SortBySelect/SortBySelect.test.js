import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import * as RestaurantService from "../../services/restaurantService";
import SortBySelect from "./SortBySelect";

test("renders a select list from options", () => {
  let selectOptions = [
    { name: "name1", value: "option1" },
    { name: "name2", value: "option2" }
  ];
  const { getByText, getBySelectText } = render(
    <SortBySelect sortOptions={selectOptions} />
  );
  expect(getBySelectText("name1").children.length).toEqual(2);
  expect(getByText(selectOptions[0].name)).toHaveAttribute(
    "value",
    selectOptions[0].value
  );
  expect(getByText(selectOptions[1].name)).toHaveAttribute(
    "value",
    selectOptions[1].value
  );
});

test("Restaurant Name is selected by default", () => {
  let selectOptions = [
    { name: "name1", value: "option1" },
    { name: "name2", value: "option2" }
  ];
  let sortValue = "option2";
  const { getByText, getBySelectText, queryByDisplayValue } = render(
    <SortBySelect
      sortOptions={selectOptions}
      selectedSortValue={sortValue}
      handleSortSelect={() => {}}
    />
  );
  expect(getBySelectText("name2")).toBeVisible();
  //expect(getBySelectText("name1")).toBeDisabled();
});
