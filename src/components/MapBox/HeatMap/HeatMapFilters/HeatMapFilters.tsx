import { Box } from "@mui/material";
import React, { useContext } from "react";
import ApartmentDropDown from "./ApartmentDropDown/ApartmentDropDown";
import BedsDropDown from "./BedsDropDown/BedsDropDown";
import PriceFilter from "./PriceFilter/PriceFilter";
import StatusDropDown from "./StatusDropDown/StatusDropDown";
import IndicatorDropDown from "./IndicatorDropDown/IndicatorDropDown";
import SearchFilter from "./SearchFilter/SearchFilter";
import { HeatMapContext } from "../../../../contexts/HeatMapBoxContext";
import ViewSearchItem from "./SearchFilter/ViewSearchItem";

function HeatMapFilters() {
  const { filteredSearchItems } = useContext(HeatMapContext);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 10,
        zIndex: 1,
        borderRadius: 1,
        padding: 1,
      }}
    >
      <SearchFilter />

      {filteredSearchItems.isSearch ? (
        <React.Fragment>
          <ViewSearchItem />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ApartmentDropDown />
          <BedsDropDown />
          <PriceFilter />
          <StatusDropDown />
          <IndicatorDropDown />
        </React.Fragment>
      )}
    </Box>
  );
}

export default HeatMapFilters;
