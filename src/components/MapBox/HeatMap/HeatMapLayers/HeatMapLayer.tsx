import React, { useContext } from "react";
import { Source, Layer } from "react-map-gl";
import { HeatMapContext } from "../../../../contexts/HeatMapBoxContext";

function HeatMapLayer() {
  const { filteredHeatMapData, filters, indicatorValues, clickElement } =
    useContext(HeatMapContext);
  // Function to calculate color based on value

  const getColorForValue = (value: number) => {
    const { highest, average, lowest } = indicatorValues;

    // Define color stops
    const lowColor = "rgba(92, 231, 148, 0.4)";
    const midColor = "rgba(201, 221, 64, 0.6)";
    const highColor = "rgba(233, 30, 99, 0.8)";

    // Interpolate between colors
    if (value >= highest) return highColor;
    if (value >= average) return midColor;
    return lowColor;
  };

  const geoJsonData = {
    type: "FeatureCollection",
    features: filteredHeatMapData.map((building: any) => ({
      type: "Feature",
      properties: {
        building: building.building,
        prop_sales_volume: building.prop_sales_volume,
        building_median_price_sqft: building.building_median_price_sqft,
        building_starting_price: building.building_starting_price,
        coordinates: building.coordinates,
        amenities: building.amenities,
        images: building.images,
        completion_percent: building.completion_percent,
        building_description: building.building_description,
        min_bed: building.min_bed,
        max_bed: building.max_bed,
        building_unit_count: building.building_unit_count,
        project: building.project,
        dev: building.dev,
        area_name: building.area_name,
        developer_logo_url: building.developer_logo_url,
        launch_date: building.launch_date,
        completion_date: building.completion_date,
        id: building.building_id,
      },
      geometry: {
        type: "Point",
        coordinates: building.coordinates,
      },
    })),
  };

  return (
    <Source id="heatMapData" type="geojson" data={geoJsonData}>
      <Layer
        id="heatmap"
        type="circle"
        paint={{
          "circle-radius": 8,
          "circle-color": [
            "step",
            // Use `coalesce` to fall back to a default value (e.g., 0) if the property is null
            ["coalesce", ["number", ["get", filters.selectedIndicator], 0], 0],
            getColorForValue(indicatorValues.lowest), // Lowest color
            indicatorValues.average != null
              ? indicatorValues.average
              : Number.MAX_SAFE_INTEGER,
            getColorForValue(indicatorValues.average), // Average color
            indicatorValues.highest != null
              ? indicatorValues.highest
              : Number.MAX_SAFE_INTEGER,
            getColorForValue(indicatorValues.highest), // Highest color
          ],
        }}
      />

      {clickElement && (
        <Layer
          id="selected-feature-border"
          type="circle"
          paint={{
            "circle-radius": 20,
            "circle-color": "rgba(128, 237, 153, 0.26)",
            "circle-stroke-width": 1,
            "circle-stroke-color": "rgb(128, 237, 153)",
          }}
          filter={["==", "id", clickElement]} // Filter to highlight only the clicked feature
        />
      )}
    </Source>
  );
}

export default HeatMapLayer;
