import React from "react";

function getButtonHtml(id, data) {
  return (
    <button key={id} type="button" className="btn btn-outline-primary">
      {data}
    </button>
  );
}

export default function FilterBar(props) {
  const { cuisines } = props;
  const data = [
    {
      _id: "5c3430ecfc13ae122d000000",
      name: "Western"
    },
    {
      _id: "5c3430ecfc13ae122d000001",
      name: "Japanese"
    }
  ];
  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example" />
      {cuisines.map(item => {
        return getButtonHtml(item._id, item.name);
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
