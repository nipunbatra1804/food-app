import React from "react";

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
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex mb-4">
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
        <div class="card-footer text-muted">
          <button class="btn btn-primary">Order</button>
        </div>
      </div>
    </div>
  );
}
