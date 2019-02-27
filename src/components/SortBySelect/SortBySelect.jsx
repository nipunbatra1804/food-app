import React from "react";

export default function SortBySelect({
  handleSortSelect,
  selectedSortValue,
  sortOptions
}) {
  return (
    <select
      className="btn btn-primary"
      onChange={handleSortSelect}
      value={selectedSortValue}
    >
      {sortOptions.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
}
