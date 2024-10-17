import React from "react";
import { Tabs, Tab, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRadius: "14px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  overflow: "hidden",
}));

const StyledTab = styled(Tab)(({ theme }: any) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(14),
  "&.Mui-selected": {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.text.primary,
  },
}));

interface PriceFilterTabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const PriceFilterTabs: React.FC<PriceFilterTabsProps> = ({
  value,
  onChange,
}) => {
  return (
    <StyledTabs value={value} onChange={onChange} variant="fullWidth">
      <StyledTab label="Starting Price" />
      <StyledTab label="Price per Sqft" />
    </StyledTabs>
  );
};

export default PriceFilterTabs;
