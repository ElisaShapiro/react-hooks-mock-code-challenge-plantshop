import React, { useState } from "react";

function PlantCard({ plant, handleDeletePlant }) {
  const [stock, setStock] = useState(true)

  function onDeletePlant(){
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
    handleDeletePlant(plant.id)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (
        <button onClick={(e) => setStock(!stock)} className="primary">In Stock</button>
      ) : (
        <button onClick={(e) => setStock(!stock)} >Out of Stock</button>
      )}
      <button onClick={onDeletePlant} className="primary" style={{margin: "10px"}}>Remove</button>
    </li>
  );
}

export default PlantCard;
