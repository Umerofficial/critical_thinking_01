import { Button } from "@mui/material";
import React, { useContext } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import { HeatMapContext } from "../../../../../contexts/HeatMapBoxContext";
import SearchModal from "./SearchModal";

function SearchFilter() {
  const { handleSearchOpenModal } = useContext(HeatMapContext);
  return (
    <React.Fragment>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSearchOpenModal}
        size="large"
        sx={{
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
        startIcon={<SearchIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />}
        endIcon={
          <ArrowForwardIosIcon
            sx={{ fontSize: "17px !important", color: "rgba(0, 0, 0, 0.54)" }}
          />
        }
      >
        Find a Project
      </Button>
      <SearchModal />
    </React.Fragment>
  );
}

export default SearchFilter;
