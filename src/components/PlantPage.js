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

  const searchedPlants = plants.filter((plant) => 
    plant.name.toLowerCase().includes(input.toLowerCase()))

  return (
    <main>
      <NewPlantForm 
        addPlant={addPlant}
      />
      <Search 
        input={input}
        setInput={setInput}
      />
      <PlantList 
        plants={searchedPlants} 
      />
    </main>
  );
}

export default PlantPage;
