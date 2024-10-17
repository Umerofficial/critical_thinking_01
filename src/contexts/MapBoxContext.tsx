import React, { createContext, useState } from "react";

export const MapBoxContext = createContext<any | null>(null);

export function MapBoxProvider({ children }: any) {
  const [data, setData] = useState<PropertyItem | null>(null);
  const [selectedProperty, setSelectedProperty] =
    useState<string>("avg_price_per_sqft");

  const [selectedButton, setSelectedButton] = useState<string>("area");

  const [popupInfo, setPopupInfo] = useState<any>(null);
  const [hoveredFeatureId, setHoveredFeatureId] = useState<string | null>("");

  const handleButtonClick = (property: any) => {
    setSelectedProperty(property);
    setPopupInfo(null);
  };

  const handleTabButtonClick = (property: any) => {
    setSelectedButton(property);
  };

  const handleMouseMove = (event: any) => {
    const features = event.target.queryRenderedFeatures(event.point);

    const isFeatures = features && features.length > 0 ? features : null;
    if (isFeatures) {
      const hoveredFeature = features[0];
      if (
        hoveredFeature.properties &&
        Object.keys(hoveredFeature.properties).length > 0
      ) {
        if (
          hoveredFeature.properties.id !== null &&
          hoveredFeature.properties.id !== undefined
        ) {
          setHoveredFeatureId(hoveredFeature.properties.id);
          event.target.getCanvas().style.cursor = "pointer";
        }
      }
    } else {
      setHoveredFeatureId("");
      event.target.getCanvas().style.cursor = "";
    }
  };

  const handleMouseLeave = (event: any) => {
    setHoveredFeatureId("");
    event.target.getCanvas().style.cursor = "";
  };

  const handleElementClick = (e: any) => {
    const features = e.target.queryRenderedFeatures(e.point);

    if (features.length > 0) {
      let feature = features[0];

      if (typeof feature.geometry === "string") {
        try {
          feature.geometry = JSON.parse(feature.geometry);
        } catch (error) {
          console.error("Error parsing geometry:", error);
          return;
        }
      }

      if (feature.properties && Object.keys(feature.properties).length > 0) {
        // Calculate the centroid of the polygon
        const coordinates = feature.geometry.coordinates;
        if (coordinates && coordinates.length > 0) {
          const polygonCoordinates = coordinates[0];

          if (Array.isArray(polygonCoordinates)) {
            const { geometry, color, ...restItems } = feature.properties;

            setPopupInfo({
              ...restItems,
            });
          }
        } else {
          console.error("Invalid polygon coordinates:", coordinates);
        }
      } else if (popupInfo && Object.keys(feature.properties).length === 0) {
        console.warn(
          "Feature properties are empty. Retaining previous popup data."
        );
      } else {
        setPopupInfo(null);
        console.warn(
          "Feature properties are empty and no previous data exists. Closing popup."
        );
      }
    }
  };

  return (
    <MapBoxContext.Provider
      value={{
        data,
        setData,
        selectedProperty,
        popupInfo,
        setPopupInfo,
        hoveredFeatureId,
        handleButtonClick,
        handleMouseMove,
        handleMouseLeave,
        handleElementClick,
        handleTabButtonClick,
        setSelectedButton,
        selectedButton,
      }}
    >
      {children}
    </MapBoxContext.Provider>
  );
}
export interface PropertyItem {
  id: string;
  name: string;
  color: string;
  dld_id: number;
  dld_area: string;
  description?: string;
  geometry: GeoJSON.Geometry;
  sales_volume?: number;
  sales_volume_first_sale?: number;
  sales_volume_re_sale?: number;
  avg_price_per_sqft?: number;
  rental_yield?: number;
  capital_appreciation?: number;
  new_project_count?: number;
  capital_appreciation_date?: string;
  coordinates?: string | null;
  supply?: number;
  dld_area_id?: number | null;
}

export interface HeatMapPropertyItem {
  building_id: number;
  building: string;
  display_as: string;
  buildings: [];
  area_name: string;
  building_coordinates: string;
  dev: string;
  developer_logo_url: string;
  unit_count: number;
  launch_date: string;
  completion_percent: number;
  completion_date: string;
  project: string;
  logo_url?: string | null;
  brochure_url: string | null;
  amenities: string[];
  images: string[];
  building_description: string | null;
  beds: string;
  min_bed: number;
  max_bed: number;
  building_unit_count: number;
  building_min_size: number;
  building_max_size: number;
  building_starting_price: number;
  building_median_price_sqft: number;
  building_sales_volume: number;
  prop_sales_volume: number;
  prop_median_price_sqft: number;
  prop_median_price_per_unit: number;
  prop_median_rent_per_unit: number;
  coordinates: number[];
  building_csv?: [];
}
