import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "react-testing-library";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./App";
import { fireEvent } from "react-testing-library/dist";

afterEach(cleanup);

test("new test", () => {
  const route = "/home";
  const history = createMemoryHistory({ initialEntries: [route] });
  const ui = <App />;
  const {
    container,
    getByText,
    queryAllByTitle,
    getByTitle,
    queryAllByTestId,
    getByTestId
  } = render(<Router history={history}>{ui}</Router>);
  expect(queryAllByTestId("home-page").length).toEqual(1);
  const orderLink = getByText(/orders/i);
  fireEvent.click(orderLink);
  expect(getByTestId("order-page")).toBeInTheDocument();
  const adminLink = getByText(/admin/i);
  fireEvent.click(adminLink);
  expect(getByTestId("admin-page")).toBeInTheDocument();
});
