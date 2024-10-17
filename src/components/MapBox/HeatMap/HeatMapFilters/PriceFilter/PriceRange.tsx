import React from "react";
import { Grid2, TextField, InputAdornment } from "@mui/material";

interface PriceRangeInputProps {
  min: string;
  max: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceRangeInput: React.FC<PriceRangeInputProps> = ({
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
          name="minPrice"
          size="small"
          type="number"
          onChange={onChange}
          fullWidth
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">AED</InputAdornment>,
            },
          }}
        />
      </Grid2>
      <Grid2 size={6}>
        <TextField
          placeholder="Maximum"
          variant="outlined"
          size="small"
          value={max}
          name="maxPrice"
          type="number"
          onChange={onChange}
          fullWidth
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">AED</InputAdornment>,
            },
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default PriceRangeInput;
