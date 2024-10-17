import React, { useContext } from "react";
import DropDown from "../../../../Fields/DropDownComponent";
import { HeatMapContext } from "../../../../../contexts/HeatMapBoxContext";
import { indicatorDropDownOptions } from "../../../../../mocks/dropDownOptions";

function IndicatorDropDown() {
  const { filters, handleFilterChange } = useContext(HeatMapContext);

  return (
    <DropDown
      name="selectedIndicator"
      value={filters.selectedIndicator}
      options={indicatorDropDownOptions}
      handleChange={handleFilterChange}
      minWidth={180}
    />
  );
}

export default IndicatorDropDown;
