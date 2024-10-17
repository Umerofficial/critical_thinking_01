import React, { useContext } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MapBoxContext } from "../../../../contexts/MapBoxContext";

function MapBoxPopup() {
  const { setPopupInfo, popupInfo } = useContext(MapBoxContext);

  const renderProperty = (key: string, value: any) => {
    if (key === "id" || key === "name" || key === "description") return null;

    const capitalizeWords = (text: string) => {
      return text
        .replace(/\b\w/g, (char) => char.toUpperCase())
        .replace(/_/g, " ");
    };
    let displayValue = value;
    if (typeof value === "number") {
      if (key === "avg_price_per_sqft") {
        displayValue = `AED ${value}`;
      } else if (key === "rental_yield" || key === "capital_appreciation") {
        displayValue = `${value}%`;
      } else {
        displayValue = value;
      }
    } else if (value === null || value === undefined) {
      displayValue = "N/A";
    }

    const formattedKey = capitalizeWords(key.replace(/_/g, " "));

    return (
      <Box
        key={key}
        display="flex"
        alignItems={`center`}
        borderBottom="1px solid #ddd"
        py={1}
      >
        <InputLabel variant="standard">{formattedKey}: </InputLabel>
        <Typography variant="body2" sx={{ marginLeft: 1 }}>
          {displayValue}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 50,
        left: 10,
        backgroundColor: "white",
        pt: 2,
        pb: 2,
        borderRadius: 2,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        width: { xs: "50%", sm: "300px", lg: "400px" },
        height: { xs: "70%", sm: "550px", lg: "550px" },
        overflowY: "auto",
        zIndex: 1000,
        "&::-webkit-scrollbar": { display: "none" },
        "@media (min-width:1500px)": {
          width: "400px",
          height: "550px",
        },
        "@media (min-width:1800px)": {
          width: "400px",
          height: "750px",
        },
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 5,
          right: 5,
        }}
        onClick={() => setPopupInfo(null)}
      >
        <CloseIcon />
      </IconButton>
      <Container maxWidth={false}>
        <Typography textAlign="left" variant="h5">
          {popupInfo.name}
        </Typography>
        {Object.keys(popupInfo).map((key) =>
          renderProperty(key, popupInfo[key])
        )}
        <Box sx={{ mt: 3, textAlign: "left" }}>
          {popupInfo.description ? (
            <>
              <Typography variant="h6" sx={{ mb: 2 }}>
                About {popupInfo.name}
              </Typography>
              <Typography variant="body2">{popupInfo.description}</Typography>
            </>
          ) : (
            "No Description Found"
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default MapBoxPopup;
