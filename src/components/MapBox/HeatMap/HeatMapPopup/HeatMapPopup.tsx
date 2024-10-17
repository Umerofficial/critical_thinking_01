import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  Chip,
  LinearProgress,
  linearProgressClasses,
  Grid2,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { HeatMapContext } from "../../../../contexts/HeatMapBoxContext";
import ImageCarousel from "./ImageCarousel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HouseIcon from "@mui/icons-material/House";
import HomeIcon from "@mui/icons-material/Home";
import { format } from "date-fns";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  padding: 17,
  borderRadius: 1,
  position: "relative", // Ensure positioning for the text inside
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    backgroundColor: "#42e57b",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));
function HeatMapPopup() {
  const { setPopupPropertiesData, popupPropertiesData, setClickElement } =
    useContext(HeatMapContext);
  const [showMore, setShowMore] = useState(false);

  const handlePopUpClose = () => {
    setPopupPropertiesData(null);
    setClickElement(0);
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 50,
        left: 10,
        backgroundColor: "white",
        borderRadius: 3,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        width: { xs: "90%", sm: "400px", lg: "480px" },
        height: { xs: "70%", sm: "550px", lg: "800px" },
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        "@media (min-width:1500px)": {
          height: "600px",
        },
        "@media (min-width:1800px)": {
          height: "800px",
        },
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          zIndex: 99999,
          top: 5,
          left: 5,
          backgroundColor: "#00000063",
          mb: 2,
        }}
        onClick={handlePopUpClose}
      >
        <CloseIcon sx={{ color: "#FFF" }} />
      </IconButton>

      {/* Carousel for Images */}
      {/* Fixed Carousel */}
      {popupPropertiesData.images != null ? (
        <Box sx={{ flexShrink: 0 }}>
          <ImageCarousel
            images={popupPropertiesData.images}
            logoUrl={popupPropertiesData.developer_logo_url}
          />
        </Box>
      ) : null}

      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        <Container maxWidth={false}>
          <Box textAlign={`left`}>
            <Typography
              textAlign="left"
              variant="h5"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              {popupPropertiesData.building}
              <Chip
                size="small"
                color={
                  popupPropertiesData.display_as === "B" ? "success" : "primary"
                }
                label={
                  popupPropertiesData.display_as === "B"
                    ? "Building"
                    : "Project"
                }
                sx={{ ml: 1 }}
              />
              <br />
            </Typography>
            <Typography variant="caption" sx={{ fontSize: "14px" }}>
              {popupPropertiesData.area_name} - {popupPropertiesData.dev}
            </Typography>
          </Box>

          {popupPropertiesData.building_starting_price != null ? (
            <Box sx={{ textAlign: "left", mt: 3, mb: 2 }}>
              <Typography className="custom-popup-text">
                Starting From
              </Typography>
              <Typography variant="h5" fontWeight={`bold`}>
                {popupPropertiesData.building_starting_price.toLocaleString()}
                <span style={{ marginLeft: 4 }}>AED</span>
              </Typography>
            </Box>
          ) : null}

          <Box display={`flex`} justifyContent={`start`} gap={2}>
            {popupPropertiesData.prop_sales_volume != null ? (
              <Box>
                <Typography className="custom-popup-text">
                  Sales Volume
                </Typography>
                <Typography sx={{ fontWeight: 700 }}>
                  {popupPropertiesData.prop_sales_volume.toLocaleString()}
                </Typography>
              </Box>
            ) : null}
            {popupPropertiesData.building_unit_count != null ? (
              <Box>
                <React.Fragment>
                  <Typography className="custom-popup-text">
                    Number Of Units
                  </Typography>
                  <Typography sx={{ fontWeight: 700 }}>
                    {popupPropertiesData.building_unit_count.toLocaleString()}
                  </Typography>
                </React.Fragment>
              </Box>
            ) : null}
            {popupPropertiesData.min_bed != 0 &&
            popupPropertiesData.max_bed != 0 ? (
              <Box>
                <React.Fragment>
                  <Typography className="custom-popup-text">
                    Offering (Beds)
                  </Typography>
                  <Typography sx={{ fontWeight: 700 }}>
                    {popupPropertiesData.min_bed} -{" "}
                    {popupPropertiesData.max_bed} Beds
                  </Typography>
                </React.Fragment>
              </Box>
            ) : null}
          </Box>

          {/* Completion Progress Bar */}
          <Box sx={{ mt: 2, textAlign: "left", position: "relative" }}>
            <Typography className="custom-popup-text">
              Construction Progress
            </Typography>
            <Box sx={{ position: "relative" }}>
              {/* Progress Bar */}
              <BorderLinearProgress
                variant="determinate"
                value={popupPropertiesData.completion_percent || 0}
                sx={{ borderRadius: 2 }}
              />
              {/* Centered Text */}
              <Typography
                variant="body2"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {popupPropertiesData.completion_percent || 0}% Completed
              </Typography>
            </Box>
          </Box>
          {/* Launch & Completion Date */}

          <Box display={`flex`} justifyContent={`space-between`} mt={2}>
            {popupPropertiesData.launch_date != null ? (
              <Box>
                <Typography className="custom-popup-text">
                  Launch Date
                </Typography>
                <Typography sx={{ fontWeight: 700 }}>
                  {format(
                    new Date(popupPropertiesData.launch_date),
                    "MMM yyyy"
                  )}
                </Typography>
              </Box>
            ) : null}
            {popupPropertiesData.completion_date != null ? (
              <Box>
                <Typography className="custom-popup-text">
                  Completion Date
                </Typography>
                <Typography sx={{ fontWeight: 700 }}>
                  {format(
                    new Date(popupPropertiesData.completion_date),
                    "MMM yyyy"
                  )}
                </Typography>
              </Box>
            ) : null}
          </Box>

          {/* Description Section */}

          {popupPropertiesData.building_description != null ? (
            <Box
              sx={{
                mt: 3,
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5">Description</Typography>
              <Typography variant="body1">
                {showMore
                  ? popupPropertiesData.building_description
                  : `${popupPropertiesData.building_description?.slice(
                      0,
                      200
                    )}...`}
              </Typography>
              {popupPropertiesData.building_description?.length > 100 && (
                <Button
                  onClick={toggleShowMore}
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  {showMore ? "Show Less" : "Show More"}
                </Button>
              )}
            </Box>
          ) : null}

          {/* Amenities Section */}
          {popupPropertiesData.amenities != null ? (
            <Box sx={{ width: "100%", marginBottom: 2, mt: 2 }}>
              <Typography variant="h6" mb={2} textAlign={`left`}>
                Amenities
              </Typography>
              <Grid2
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {popupPropertiesData.amenities.map(
                  (amenity: any, index: number) => (
                    <Grid2
                      size={6}
                      key={index}
                      display={`flex`}
                      alignItems={`center`}
                    >
                      <CheckCircleOutlineIcon
                        sx={{ mr: 1, color: "#393939" }}
                      />
                      <Typography>{amenity}</Typography>
                    </Grid2>
                  )
                )}
              </Grid2>
            </Box>
          ) : null}
        </Container>
      </Box>
      {/* BOTTTOM BUTTONS......... */}

      {/* Fixed Bottom Buttons */}
      <Box
        sx={{
          flexShrink: 0,
          display: "flex",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          mt: 1,
          boxShadow: 3,
          borderRadius: 2,
          padding: "15px",
        }}
      >
        <Button startIcon={<HouseIcon />} variant="outlined">
          Transactions
        </Button>
        <Button startIcon={<HomeIcon />} variant="outlined">
          Specifications
        </Button>
      </Box>
    </Box>
  );
}

export default HeatMapPopup;
