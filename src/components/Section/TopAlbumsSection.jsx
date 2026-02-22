import { Box, Typography, Grid, Button, Collapse, useMediaQuery, useTheme } from "@mui/material";
import Card from "../Card/Card";
import { useState } from "react";

function TopAlbumsSection({ topAlbums }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  let itemsPerRow = 3;
  if(isMd) itemsPerRow = 4;
  if(isLg) itemsPerRow = 6;

  const firstRow = topAlbums.slice(0, itemsPerRow);
  const restRows = topAlbums.slice(itemsPerRow);

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
          Top Albums
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            color: "primary.main",
            fontSize: "20px",
            fontWeight: "600",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Collapse" : "Show all"}
        </Button>
      </Box>

      <Grid container mt="10px" spacing={3}>
        {firstRow.map((album) => (
          <Grid
            key={album.id}
            size={{ xs: 4, md: 3, lg: 2 }}
            display="flex"
            justifyContent="center"
          >
            <Card album={album} />
          </Grid>
        ))}
      </Grid>

      <Collapse in={isOpen}>
        <Grid container spacing={3} mt="25px">
          {restRows.map((album) => (
            <Grid
              key={album.id}
              size={{ xs: 4, md: 3, lg: 2 }}
              display="flex"
              justifyContent="center"
            >
              <Card album={album} />
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </>
  );
}

export default TopAlbumsSection;
