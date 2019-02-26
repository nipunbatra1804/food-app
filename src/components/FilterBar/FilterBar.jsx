import React from "react";

function getButtonHtml(id, data, handleClick) {
  return (
    <button
      key={id}
      type="button"
      className="btn btn-outline-primary"
      onClick={() => handleClick(id, data)}
    >
      {data}
    </button>
  );
}

export default function FilterBar({ cuisines, handleClick }) {
  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example" />
      {cuisines.map(item => {
        return getButtonHtml(item._id, item.name, handleClick);
      })}
    </div>
  );
}
/*
 <button type="button" className="btn btn-primary">
          Left
        </button>
        <button type="button" className="btn btn-primary">
          Middle
        </button>
        <button type="button" className="btn btn-primary">
          Right
        </button>
        */
