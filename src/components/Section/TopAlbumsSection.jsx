import { Box, Collapse } from "@mui/material";
import { useState } from "react";
import AlbumHeader from "../Header/AlbumHeader";
import Carousel from "../Carousel/Carousel";
import AlbumGrid from "../Grid/AlbumGrid";

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
        <AlbumGrid albums={topAlbums} />
      </Collapse>

      <Collapse in={!isOpen} timeout={500} unmountOnExit>
        <Box position="relative">
          <Carousel albums={topAlbums} carouselId={"topAlbums"} />
        </Box>
      </Collapse>
    </>
  );
}

export default TopAlbumsSection;
