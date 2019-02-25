import React from "react";
import "./Restaurant.scss";

export default function Restaurant(props) {
  const {
    _id,
    name,
    address,
    openingTime,
    closingTime,
    cuisine,
    imageUrl,
    averagePrice
  } = props.item;

  return (
    <div className="card-col">
      <div
        className="card"
        style={{
          width: "18rem"
        }}
      >
        <img className="card-img-top" src={imageUrl} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text">
            <div
              className="cuisine-text text-muted"
              style={{ fontSize: "90%" }}
            >
              {" "}
              {cuisine.name}
            </div>
            <div className="opening-hours-text" style={{ fontSize: "90%" }}>
              {" "}
              {openingTime} - {closingTime}
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-primary">Order</button>
        </div>
      </div>
    </div>
  );
}
