import axios from "axios";
import { PropertyItem, HeatMapPropertyItem } from "../contexts/MapBoxContext";
import { heatMapApartmentData, heatMapVillaData } from "./heatMapData";

export const fetchMapBoxAreaData = async (
  setData: React.Dispatch<React.SetStateAction<PropertyItem[]>>
) => {
  try {
    const res = await axios.get(`https://fam-erp.com/property/polygons/ALL`);
    const data = res.data;
    // Format the data
    const formattedData = data.items.map((item: any) => ({
      ...item,
      geometry: JSON.parse(item.geometry),
    }));
    setData(formattedData);
  } catch (err) {
    console.log("Exception In MapBox Data", err);
  }
};

export const fetchMapBoxHeatMapData = async (
  setData: React.Dispatch<React.SetStateAction<any[]>>,
  setFilteredData: React.Dispatch<React.SetStateAction<any[]>>
) => {
  try {
    const getHeatMapData = heatMapApartmentData;
    setFilteredData(getHeatMapData);
    setData(getHeatMapData);
  } catch (err) {
    console.log(err);
  }
};
