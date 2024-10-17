import React, { useContext } from "react";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { HeatMapContext } from "../../../../../contexts/HeatMapBoxContext";

const ApplyButton = styled(Button)({
  backgroundColor: "#000",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#333",
  },
});

interface PriceFilterActionsProps {
  onApply: () => void;
  onReset: () => void;
}

const PriceFilterActions: React.FC<PriceFilterActionsProps> = ({
  onApply,
  onReset,
}) => {
  const { priceFilters } = useContext(HeatMapContext);

  return (
    <Box
      display="flex"
      justifyContent={
        priceFilters.minPrice != "" ||
        priceFilters.maxPrice != "" ||
        priceFilters.minSqft != "" ||
        priceFilters.maxSqft != ""
          ? "space-between"
          : "flex-end"
      }
      mt={2}
    >
      {priceFilters.minPrice != "" ||
      priceFilters.maxPrice != "" ||
      priceFilters.minSqft != "" ||
      priceFilters.maxSqft != "" ? (
        <ApplyButton variant="contained" onClick={onReset}>
          Reset
        </ApplyButton>
      ) : null}

      <ApplyButton variant="contained" onClick={onApply}>
        Apply
      </ApplyButton>
    </Box>
  );
};

export default PriceFilterActions;
