import { Box } from "@mui/material";
import AlbumHeader from "../Header/AlbumHeader";
import Carousel from "../Carousel/Carousel";

function SongsSection({ songs }) {
  return (
    <>
      <AlbumHeader isSongs>
        {"Songs"}
      </AlbumHeader>

      <Box position="relative">
        <Carousel songs={songs} carouselId={"songs"} />
      </Box>
    </>
  );
}

export default SongsSection;
