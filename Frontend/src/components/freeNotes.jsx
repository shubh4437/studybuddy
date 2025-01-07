import React from "react";
import list from "../list.json";

function FreeNotes() {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);

  return (
    <div>
      <h1>Free Notes</h1>
    </div>
  );
}

export default FreeNotes;
