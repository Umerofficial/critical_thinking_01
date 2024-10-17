import React, { useContext, useState } from "react";
import { Popover, Box, Button } from "@mui/material";
import PriceFilterTabs from "./PriceFilterTabs";
import PriceSqftRangeInput from "./PriceSqftRange";
import PriceFilterActions from "./PriceFilterActions";
import PriceRangeInput from "./PriceRange";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { HeatMapContext } from "../../../../../contexts/HeatMapBoxContext";

const PriceFilter: React.FC = () => {
  const {
    anchorEl,
    priceFilters,
    handlePriceFilterChange,
    tabIndex,
    handleClose,
    handleReset,
    handleApply,
    handleOpen,
    handleTabChange,
    formatNumber,
  } = useContext(HeatMapContext);

  const open = Boolean(anchorEl);

  return (
    <React.Fragment>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleOpen}
        size="large"
        sx={{
          marginTop: 1,
          width: "auto", // Automatically adjust based on content
          backgroundColor: "white",
          textTransform: "inherit",
          color: "black",
          borderRadius: "20px",
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
        endIcon={
          open ? (
            <ExpandLessIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
          ) : (
            <ExpandMoreIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
          )
        }
      >
        {priceFilters.minPrice !== "" ||
        priceFilters.maxPrice !== "" ||
        priceFilters.minSqft !== "" ||
        priceFilters.maxSqft !== ""
          ? tabIndex === 0
            ? `${formatNumber(Number(priceFilters.minPrice))} - ${formatNumber(
                Number(priceFilters.maxPrice)
              )} AED`
            : `${Number(priceFilters.minSqft).toLocaleString()} - ${Number(
                priceFilters.maxSqft
              ).toLocaleString()} AED/SQFT`
          : "Price Range"}
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box p={2} width={450}>
          <PriceFilterTabs value={tabIndex} onChange={handleTabChange} />
          {tabIndex === 1 ? (
            <PriceSqftRangeInput
              min={priceFilters.minSqft}
              max={priceFilters.maxSqft}
              onChange={handlePriceFilterChange}
            />
          ) : (
            <PriceRangeInput
              min={priceFilters.minPrice}
              max={priceFilters.maxPrice}
              onChange={handlePriceFilterChange}
            />
          )}

          <PriceFilterActions onApply={handleApply} onReset={handleReset} />
        </Box>
      </Popover>
    </React.Fragment>
  );
};

export default PriceFilter;
