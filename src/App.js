import React from "react";
import AppBar from "./components/AppBar/AppBar";
import Itinerary from "./containers/Itinerary/Itinerary";

function App() {
  return (
    <div className='App'>
      <AppBar />
      <Itinerary />
    </div>
  );
}

export default App;
