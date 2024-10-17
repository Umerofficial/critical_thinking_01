import React, { useState, useEffect, useContext } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from "@mui/material";
import { buttonsMapping } from "../../mocks/buttons";
import { fetchMapBoxAreaData } from "../../mocks/fetchMapBoxData";
import { MapBoxContext } from "../../contexts/MapBoxContext";
import MapBoxLayers from "./Area/MapBoxLayers/MapBoxLayers";
import MapBoxPopup from "./Area/MapBoxPopup/MapBoxPopup";

const Token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function MapboxComponent() {
  const {
    data,
    setData,
    selectedProperty,
    handleButtonClick,
    popupInfo,
    handleMouseMove,
    handleMouseLeave,
    handleElementClick,
  } = useContext(MapBoxContext);

  const [viewport, setViewport] = useState({
    latitude: 25.2048,
    longitude: 55.2708,
    zoom: 10,
    width: "100%",
    height: "100%",
  });

  useEffect(() => {
    const fetch = async () => {
      await fetchMapBoxAreaData(setData);
    };
    fetch();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div
        style={{ position: "absolute", top: 25, left: 0, zIndex: 1, right: 0 }}
      >
        {buttonsMapping.map((button: any) => (
          <Button
            variant="contained"
            key={button.value}
            onClick={() => handleButtonClick(button.value)}
            color={selectedProperty === button.value ? "primary" : "inherit"}
            sx={{ borderRadius: 0 }}
          >
            {button.label}
          </Button>
        ))}
      </div>

      <ReactMapGL
        {...viewport}
        mapboxAccessToken={Token}
        mapStyle="mapbox://styles/mapbox/navigation-day-v1"
        onMove={(evt: any) => setViewport(evt.viewState)}
        onClick={handleElementClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {data && <MapBoxLayers />}

        {popupInfo && <MapBoxPopup />}
      </ReactMapGL>
    </div>
  );
}

export default MapboxComponent;
