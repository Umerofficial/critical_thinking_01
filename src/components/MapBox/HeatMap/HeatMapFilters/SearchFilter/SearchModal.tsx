import React, { useContext } from "react";
import {
  Modal,
  Box,
  TextField,
  List,
  ListItem,
  ListItemText,
  Chip,
  Fade,
  Backdrop,
  MenuItem,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { HeatMapContext } from "../../../../../contexts/HeatMapBoxContext";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ffffffed",
  padding: theme.spacing(4),
  borderRadius: "10px",
  zIndex: 2,
  minWidth: "400px",
  width: "50%",
  maxWidth: "800px",
  maxHeight: "80vh", // Ensure the modal doesn't exceed the viewport height
  overflow: "auto", // Allow the modal itself to be scrollable if content overflows
}));

const ScrollableList = styled(List)(({ theme }) => ({
  maxHeight: "300px", // Set the maximum height for the list
  overflowY: "auto", // Add vertical scrolling if list overflows
  marginTop: theme.spacing(2),
}));

function SearchModal() {
  const {
    openSearchModal,
    handleSearchCloseModal,
    filteredSearchItems,
    handleSearchChange,
    filteredSearchData,
    handleSearchMenuItemClick,
  } = useContext(HeatMapContext);

  return (
    <Modal
      open={openSearchModal}
      onClose={handleSearchCloseModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openSearchModal}>
        <ModalContent>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for a project..."
            value={filteredSearchItems.searchItems}
            name="searchItems"
            onChange={handleSearchChange}
            slotProps={{
              input: {
                startAdornment: <SearchIcon sx={{ marginRight: 1 }} />,
              },
            }}
          />
          <ScrollableList>
            {filteredSearchData.map((item: any, index: number) => (
              <MenuItem
                key={index}
                sx={{ padding: 2, marginBottom: 1, backgroundColor: "#FFF" }}
                onClick={handleSearchMenuItemClick(item)}
              >
                <MeetingRoomIcon sx={{ color: "#bfb8b8ed" }} />
                <Typography marginLeft={1} marginRight={2}>
                  {item.project}
                </Typography>
                {item.display_as === "B" ? (
                  <Chip size="small" color="success" label="Building" />
                ) : (
                  <Chip size="small" color="primary" label="Project" />
                )}

                <NavigateNextIcon sx={{ marginLeft: "auto" }} color="info" />
              </MenuItem>
            ))}
          </ScrollableList>
        </ModalContent>
      </Fade>
    </Modal>
  );
}

export default SearchModal;
