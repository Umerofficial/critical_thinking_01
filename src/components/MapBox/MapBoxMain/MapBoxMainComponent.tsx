import React, { useContext } from "react";
import AreaMapBox from "../Area/AreaMapBox";
import { Box, Button } from "@mui/material";
import { topButtonsMapping } from "../../../mocks/buttons";
import { MapBoxContext } from "../../../contexts/MapBoxContext";
import HeatMapBox from "../HeatMap/HeatMapBox";

function MapBoxMainComponent() {
  const { handleTabButtonClick, selectedButton } = useContext(MapBoxContext);
  return (
    <React.Fragment>
      <Box mt={2} mb={2}>
        {topButtonsMapping.map((button) => (
          <Button
            variant="contained"
            key={button.value}
            onClick={() => handleTabButtonClick(button.value)}
            color={selectedButton === button.value ? "primary" : "inherit"}
            sx={{ borderRadius: 0 }}
          >
            {button.label}
          </Button>
        ))}
      </Box>
      {selectedButton === "area" ? <AreaMapBox /> : <HeatMapBox />}
    </React.Fragment>
  );
}

export default MapBoxMainComponent;
