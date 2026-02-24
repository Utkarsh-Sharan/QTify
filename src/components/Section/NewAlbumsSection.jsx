import { Box, Collapse } from "@mui/material";
import { useState } from "react";
import AlbumHeader from "../Header/AlbumHeader";
import Carousel from "../Carousel/Carousel";
import AlbumGrid from "../Grid/AlbumGrid";

function NewAlbumsSection({newAlbums}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AlbumHeader handleToggle={handleToggle} isOpen={isOpen}>
        {"New Albums"}
      </AlbumHeader>

      <Collapse in={isOpen} timeout={500} unmountOnExit>
        <AlbumGrid albums={newAlbums} />
      </Collapse>

      <Collapse in={!isOpen} timeout={500} unmountOnExit>
        <Box position="relative">
          <Carousel albums={newAlbums} carouselId={"newAlbums"} />
        </Box>
      </Collapse>
    </>
  );
}

export default NewAlbumsSection;
