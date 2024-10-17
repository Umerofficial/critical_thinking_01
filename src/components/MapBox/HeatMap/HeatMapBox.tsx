import React, { useContext, useEffect, useState } from "react";
import ReactMapGL, { Layer, Source } from "react-map-gl";
import { FormControlLabel, Checkbox, Box } from "@mui/material";
import HeatMapIndicator from "./HeatMapIndicator";
import { fetchMapBoxHeatMapData } from "../../../mocks/fetchMapBoxData";
import HeatMapLayer from "./HeatMapLayers/HeatMapLayer";
import { HeatMapContext } from "../../../contexts/HeatMapBoxContext";
import HeatMapFilters from "./HeatMapFilters/HeatMapFilters";
import bbox from "@turf/bbox";
import HeatMapPopup from "./HeatMapPopup/HeatMapPopup";

const Token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function HeatMapBox() {
  const {
    setHeatMapData,
    setFilteredHeatMapData,
    filteredHeatMapData,
    viewport,
    setViewport,
    mapRef,
    handleElementClick,
    popupPropertiesData,
  } = useContext(HeatMapContext);

  useEffect(() => {
    const fetch = async () => {
      await fetchMapBoxHeatMapData(setHeatMapData, setFilteredHeatMapData);
    };
    fetch();
  }, []);

  const [is3D, setIs3D] = useState(false);

  const handle3DChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const checked = e.target.checked;
    setIs3D(checked);
    setViewport((prev: any) => ({
      ...prev,
      pitch: checked ? 45 : 0,
      bearing: checked ? 20 : 0,
    }));
  };

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100dvh - 69px)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 70,
          right: 10,
          zIndex: 1,
          backgroundColor: "#fff",
          borderRadius: 1,
          paddingLeft: 1,
          paddingRight: 1,
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={is3D}
              onChange={handle3DChange}
              color="primary"
            />
          }
          label="Enable 3D View"
        />
      </Box>
      <HeatMapFilters />
      <HeatMapIndicator />
      <ReactMapGL
        ref={mapRef}
        fadeDuration={2000}
        {...viewport}
        onClick={handleElementClick}
        // key={is3D ? "3d-enabled" : "3d-disabled"}
        mapboxAccessToken={Token}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        onMove={(evt: any) => setViewport(evt.viewState)}
      >
        {filteredHeatMapData && <HeatMapLayer />}
        {/* {is3D && (
          <Source
            id="composite"
            type="vector"
            url="mapbox://mapbox.mapbox-streets-v8"
          >
            <Layer
              id="3d-buildings"
              source="composite"
              source-layer="building"
              type="fill-extrusion"
              minzoom={15}
              paint={{
                "fill-extrusion-color": "#aaa",
                "fill-extrusion-height": [
                  "interpolate",
                  ["linear"],
                  ["zoom"],
                  15,
                  0,
                  15.05,
                  ["get", "height"],
                ],
                "fill-extrusion-base": [
                  "interpolate",
                  ["linear"],
                  ["zoom"],
                  15,
                  0,
                  15.05,
                  ["get", "min_height"],
                ],
                "fill-extrusion-opacity": 0.6,
              }}
            />
          </Source>
        )} */}
        {popupPropertiesData && <HeatMapPopup />}
      </ReactMapGL>
    </div>
  );
}

export default HeatMapBox;
