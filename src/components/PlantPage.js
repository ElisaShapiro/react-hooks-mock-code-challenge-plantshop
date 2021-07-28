import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  const [input, setInput] = useState("")

  const addPlant = newPlant => {
    setPlants(currentPlants => {
      const newPlants = [...currentPlants]
      newPlants.push(newPlant)
      return newPlants
    })
  }

  return (
    <main>
      <NewPlantForm 
        addPlant={addPlant}
      />
      <Search />
      <PlantList 
        plants={plants} 
      />
    </main>
  );
}

export default PlantPage;
