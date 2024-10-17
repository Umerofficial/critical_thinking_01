import React, { useContext } from "react";
import DropDown from "../../../../Fields/DropDownComponent";
import { HeatMapContext } from "../../../../../contexts/HeatMapBoxContext";
import { statusDropDownOptions } from "../../../../../mocks/dropDownOptions";

function StatusDropDown() {
  const { filters, handleFilterChange } = useContext(HeatMapContext);

  return (
    <DropDown
      name="selectedStatus"
      value={filters.selectedStatus}
      options={statusDropDownOptions}
      handleChange={handleFilterChange}
      minWidth={200}
    />
  );
}

export default StatusDropDown;
