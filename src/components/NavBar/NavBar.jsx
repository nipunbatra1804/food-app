import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/home">
        FoodApp
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link active" to="/home">
            Home <span class="sr-only">(current)</span>
          </Link>
          <Link class="nav-item nav-link" to="/orders">
            Orders
          </Link>
          <Link class="nav-item nav-link" to="/admin">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
