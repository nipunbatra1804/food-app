//imports
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";
import React from "react";
import Restaurant from "../Restaurant/Restaurant";

test("Restaurant Component renders with attributes", () => {
  const testRest = {
    _id: "5c342ac9fc13ae39f8000001",
    name: "The Soup Spoon (Tanjong Pagar Exchange)",
    address: "120 Maxwell Road, Tanjong Pagar Xchange, B1-31, 069119 Singapore",
    openingTime: "12:00",
    closingTime: "21:30",
    cuisine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000001.jpg",
    averagePrice: 12
  };
  const { getByText, getByAltText } = render(<Restaurant item={testRest} />);
  expect(getByText(testRest.name)).toBeInTheDocument();
  expect(
    getByText(`${testRest.openingTime} - ${testRest.closingTime}`)
  ).toBeInTheDocument();
  expect(getByText("Order")).toBeInTheDocument();

  expect(getByText(/The Soup Spoon /i)).toBeInTheDocument();

  expect(getByAltText(testRest.name)).toHaveAttribute("src", testRest.imageUrl);
});
