import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plantData => console.log(plantData))
  })

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
