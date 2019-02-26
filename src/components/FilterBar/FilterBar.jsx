import React from "react";

function getClassSelected(Id, selectedId) {
  return Id === selectedId && "active";
}

function getButtonHtml(id, data, handleClick, selectedId) {
  return (
    <button
      key={id}
      type="button"
      onClick={() => handleClick(id, data)}
      className={`btn btn-outline-primary ${getClassSelected(id, selectedId)}`}
    >
      {data}
    </button>
  );
}

export default function FilterBar({ cuisines, handleClick, selectedId }) {
  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example" />
      {cuisines.map(item => {
        return getButtonHtml(item._id, item.name, handleClick, selectedId);
      })}
    </div>
  );
}
