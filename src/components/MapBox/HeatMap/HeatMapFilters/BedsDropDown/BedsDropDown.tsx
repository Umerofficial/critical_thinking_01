import React, { useContext } from "react";
import DropDown from "../../../../Fields/DropDownComponent";
import { HeatMapContext } from "../../../../../contexts/HeatMapBoxContext";
import { bedsDropDownOptions } from "../../../../../mocks/dropDownOptions";

function BedsDropDown() {
  const { filters, handleFilterChange } = useContext(HeatMapContext);

  return (
    <DropDown
      name="selectedBeds"
      value={filters.selectedBeds}
      options={bedsDropDownOptions}
      handleChange={handleFilterChange}
      minWidth={150}
    />
  );
}

export default BedsDropDown;
