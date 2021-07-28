import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleDeletePlant }) {
  
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return (
          <PlantCard 
            key={plant.id} 
            plant={plant}
            handleDeletePlant={handleDeletePlant}
          />)
      })}
    </ul>
  );
}

export default PlantList;
