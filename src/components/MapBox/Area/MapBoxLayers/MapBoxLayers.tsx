import React, { useContext } from "react";
import { Source, Layer } from "react-map-gl";
import { MapBoxContext } from "../../../../contexts/MapBoxContext";

function MapBoxLayers() {
  const { data, selectedProperty, hoveredFeatureId } =
    useContext(MapBoxContext);
  return (
    <Source
      id="property-polygons"
      type="geojson"
      data={{
        type: "FeatureCollection",
        features: data.map((item: any) => ({
          type: "Feature",
          geometry: item.geometry,
          properties: {
            id: item.id,
            name: item.name,
            avg_price_per_sqft: Math.round(item.avg_price_per_sqft),
            color: item.color,
            geometry: item.geometry,
            description: item.description,
            sales_volume: Math.round(item.sales_volume),
            rental_yield: Math.round(item.rental_yield),
            capital_appreciation: Math.round(item.capital_appreciation),
            new_project_count: Math.round(item.new_project_count),
          },
        })),
      }}
    >
      <Layer
        id="property-layer"
        type="fill"
        paint={{
          "fill-color": ["get", "color"],
          "fill-opacity": [
            "case",
            ["==", ["get", "id"], hoveredFeatureId],
            0.6, // Full opacity if hovered
            0.3, // Default opacity if not hovered
          ],
        }}
      />
      <Layer
        id="property-labels"
        type="symbol"
        layout={{
          "text-field": ["get", selectedProperty],
          "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
          "text-size": 15,
        }}
        paint={{
          "text-color": "#000000",
          "text-halo-width": 20,
        }}
      />
    </Source>
  );
}

export default MapBoxLayers;
