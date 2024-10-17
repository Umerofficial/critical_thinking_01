import { Button } from "@mui/material";
import React, { useContext } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { HeatMapContext } from "../../../../../contexts/HeatMapBoxContext";
function ViewSearchItem() {
  const { handleReset, filteredSearchItems } = useContext(HeatMapContext);

  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      onClick={handleReset}
      size="large"
      sx={{
        marginLeft: 3,
        marginTop: 1,
        width: "auto",
        backgroundColor: "white",
        color: "black",
        borderRadius: "20px",
        textTransform: "inherit",
        transition: "border-radius 0.3s ease, border-color 0.3s ease",
        "&:hover": {
          borderRadius: "0px",
          transitionDelay: "0.2s",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgba(0, 0, 0, 0.23)",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgba(0, 0, 0, 0.87)",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main",
        },
      }}
      startIcon={<ClearIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />}
    >
      Viewing <b style={{ marginLeft: 3 }}>{filteredSearchItems.itemName}</b>
    </Button>
  );
}

export default ViewSearchItem;
