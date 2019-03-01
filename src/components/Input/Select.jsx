import React from "react";

export default function Select({ name, options, keyName, handleChange }) {
  const propertyName = `${name.toLowerCase().replace(/\s/, "-")}`;
  return (
    <div className="form-group">
      <label htmlFor={propertyName}>{name}</label>
      <select
        className="form-control"
        id={propertyName}
        name={keyName}
        onChange={handleChange}
      >
        <option>Choose One</option>
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
