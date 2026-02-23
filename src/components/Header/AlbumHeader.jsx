import {
  Box,
  Typography,
  Button,
} from "@mui/material";

function AlbumHeader({ children, handleToggle, isOpen }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
        {children}
      </Typography>
      <Button
        sx={{
          textTransform: "none",
          color: "primary.main",
          fontSize: "20px",
          fontWeight: "600",
        }}
        onClick={handleToggle}
      >
        {isOpen ? "Collapse" : "Show all"}
      </Button>
    </Box>
  );
}

export default AlbumHeader;
