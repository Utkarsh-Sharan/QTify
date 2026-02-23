import { Collapse, Grid } from "@mui/material";
import Card from "../Card/Card";
import { useState } from "react";
import AlbumHeader from "../Header/AlbumHeader";
import Carousel from "../Carousel/Carousel";

function TopAlbumsSection({ topAlbums }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AlbumHeader handleToggle={handleToggle} isOpen={isOpen}>
        {"Top Albums"}
      </AlbumHeader>

      <Collapse in={isOpen} timeout={500} unmountOnExit>
        <Grid container mt="10px" spacing={3}>
          {topAlbums.map((album) => (
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

      <Collapse in={!isOpen} timeout={500} unmountOnExit>
        <div>
          <Carousel albums={topAlbums} />
        </div>
      </Collapse>
    </>
  );
}

export default TopAlbumsSection;
