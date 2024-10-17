import { Box, Typography } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { HeatMapContext } from "../../../contexts/HeatMapBoxContext";
import { indicatorDropDownOptions } from "../../../mocks/dropDownOptions";
function HeatMapIndicator() {
  const { filters, indicatorValues, filteredHeatMapData } =
    useContext(HeatMapContext);

  const selectedData = useMemo(() => {
    return (
      indicatorDropDownOptions &&
      indicatorDropDownOptions.find(
        (data: any) => data.value === filters.selectedIndicator
      )
    );
  }, [filteredHeatMapData, filters.selectedIndicator]);

  const label = selectedData?.label || "Selected Indicator";
  const unit = selectedData?.unit || "Unit";

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        borderRadius: 2,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "16rem",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#333",
          padding: "5px 10px",
          borderRadius: 5,
        }}
      >
        <Typography sx={{ color: "rgb(92, 231, 148)" }}>Low</Typography>
        <Box
          sx={{
            width: "150px",
            height: "20px",
            background: "linear-gradient(to right, lightgreen, gold, red)",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
              textAlign: "center",
              lineHeight: "20px",
            }}
          >
            {label}
          </Typography>
        </Box>
        <Typography sx={{ color: "rgb(233, 30, 99)" }}>High</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            width: 15,
            height: 15,
            backgroundColor: "rgb(233, 30, 99)",
            borderRadius: "50%",
          }}
        />
        <Typography sx={{ color: "rgb(233, 30, 99)" }}>Highest</Typography>
        <Typography sx={{ color: "white" }}>
          {indicatorValues.highest.toLocaleString()} {unit}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            width: 15,
            height: 15,
            backgroundColor: "rgb(201, 221, 64)",
            borderRadius: "50%",
          }}
        />
        <Typography sx={{ color: "rgb(201, 221, 64)" }}>Average</Typography>
        <Typography sx={{ color: "white" }}>
          {Number(indicatorValues.average.toFixed(0)).toLocaleString()} {unit}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            width: 15,
            height: 15,
            backgroundColor: "rgb(92, 231, 148)",
            borderRadius: "50%",
          }}
        />
        <Typography sx={{ color: "rgb(92, 231, 148)" }}>Lowest</Typography>
        <Typography sx={{ color: "white" }}>
          {indicatorValues.lowest.toLocaleString()} {unit}
        </Typography>
      </Box>
    </Box>
  );
}

export default HeatMapIndicator;
