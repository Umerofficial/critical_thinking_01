import React, { useState } from "react";
import {
  Select,
  FormControl,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface DropDownProps {
  name: string;
  value: string;
  options: { value: string | number; label: string }[];
  handleChange: (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => void;
  minWidth: number;
}

function DropDown({
  name,
  value,
  options,
  handleChange,
  minWidth,
}: DropDownProps) {
  return (
    <FormControl sx={{ m: 1, minWidth: minWidth }} size="small">
      <Select
        labelId={`${name}-label`}
        id={`${name}-select`}
        name={name}
        value={value}
        onChange={handleChange}
        IconComponent={ExpandMoreIcon}
        sx={{
          backgroundColor: "white",
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
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DropDown;
