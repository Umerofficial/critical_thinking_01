import React from "react";
import "./App.css";
import { MapBoxProvider } from "./contexts/MapBoxContext";
import AppRoutes from "./Routes/routes";
// import Layout from "./layouts/Layout";
import { HeatMapProvider } from "./contexts/HeatMapBoxContext";

function App() {
  return (
    <div className="App">
      <MapBoxProvider>
        <HeatMapProvider>
          {/* <Layout /> */}
          <AppRoutes />
        </HeatMapProvider>
      </MapBoxProvider>
    </div>
  );
}

export default App;
