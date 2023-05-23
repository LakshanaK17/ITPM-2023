import React from "react";
import { useNavigate } from "react-router-dom";

function StationeryItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="stationeryItem"
      onClick={() => {
        navigate("/stationery/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default StationeryItem;
