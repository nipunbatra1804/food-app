import React, { Component } from "react";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import OrderPage from "./components/OrderPage/OrderPage";
import AdminPage from "./components/AdminPage/AdminPage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Route path="/home" component={HomePage} />
          <Route path="/orders" component={OrderPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/" exact component={HomePage} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
