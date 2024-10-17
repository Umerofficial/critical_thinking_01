import React, { useContext } from "react";
import { HeatMapContext } from "../../../../../contexts/HeatMapBoxContext";
import { apartmentDropDownOptions } from "../../../../../mocks/dropDownOptions";
import DropDown from "../../../../Fields/DropDownComponent";

function ApartmentDropDown() {
  const { filters, handleFilterChange } = useContext(HeatMapContext);

  return (
    <DropDown
      name="selectedApartment"
      value={filters.selectedApartment}
      options={apartmentDropDownOptions}
      handleChange={handleFilterChange}
      minWidth={200}
    />
  );
}

export default ApartmentDropDown;
