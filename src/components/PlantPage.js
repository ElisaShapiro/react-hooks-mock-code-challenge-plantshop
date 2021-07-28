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

  function handleDeletePlant(id){
    let deletePlant = plants.filter((plant) => {
    if (plant.id !== id)
      return true
    }) 
    setPlants(deletePlant)
  }
  
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
        handleDeletePlant={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
