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

export default function FilterBar({
  cuisinesList,
  handleClick,
  selectedCuisineId
}) {
  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example" />
      {cuisinesList.map(item => {
        return getButtonHtml(
          item._id,
          item.name,
          handleClick,
          selectedCuisineId
        );
      })}
    </div>
  );
}
