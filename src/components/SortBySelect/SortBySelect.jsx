import React from "react";

export default function SortBySelect({
  handleSortSelect,
  selectedSortValue,
  sortOptions
}) {
  return (
    <div>
      <select
        className="custom-select"
        onChange={handleSortSelect}
        value={selectedSortValue}
        title="sort-by"
      >
        {sortOptions.map((option, index) => {
          return (
            <option
              key={index}
              value={option.value}
              className="align-items-stretch"
            >
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
