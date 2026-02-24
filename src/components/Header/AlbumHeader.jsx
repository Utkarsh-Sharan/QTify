import {
  Box,
  Typography,
  Button,
} from "@mui/material";

function AlbumHeader({ children, handleToggle, isOpen, isSongs }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography sx={{ fontSize: "20px", fontWeight: "600", pb: "11px" }}>
        {children}
      </Typography>
      {!isSongs ? <Button
        sx={{
          textTransform: "none",
          color: "primary.main",
          fontSize: "20px",
          fontWeight: "600",
        }}
        onClick={handleToggle}
      >
        {isOpen ? "Collapse" : "Show all"}
      </Button> :
      ""}
    </Box>
  );
}

export default AlbumHeader;
