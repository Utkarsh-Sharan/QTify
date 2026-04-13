import { Box } from "@mui/material";
import BackButtonImage from "../assets/back-button.png";
import { useNavigate } from "react-router-dom";
import AlbumDetailsHeader from "../components/Header/AlbumDetailsHeader";
import AlbumSongsSection from "../components/Song/AlbumSongsSection";

function AlbumDetailsPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box px="30px" py="15px">
      <img src={BackButtonImage} alt="back-button" onClick={handleClick} />

      <AlbumDetailsHeader />

      <AlbumSongsSection />
    </Box>
  );
}

export default AlbumDetailsPage;
