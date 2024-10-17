import React from "react";
import { Grid2, TextField, InputAdornment } from "@mui/material";

interface PriceRangeInputProps {
  min: string;
  max: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceSqftRangeInput: React.FC<PriceRangeInputProps> = ({
  min,
  max,
  onChange,
}) => {
  return (
    <Grid2 container spacing={2} alignItems="center" mt={2}>
      <Grid2 size={6}>
        <TextField
          placeholder="Minimum"
          variant="outlined"
          value={min}
          name="minSqft"
          size="small"
          type="number"
          onChange={onChange}
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">AED/SQFT</InputAdornment>
              ),
            },
          }}
        />
      </Grid2>
      <Grid2 size={6}>
        <TextField
          placeholder="Maximum"
          variant="outlined"
          size="small"
          type="number"
          value={max}
          name="maxSqft"
          onChange={onChange}
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">AED/SQFT</InputAdornment>
              ),
            },
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default PriceSqftRangeInput;
