import { Box, Chip, Typography } from "@mui/material";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAlbumsStore } from "../../stores/useAlbumsStore";

function Card({ album, song }) {
  const navigate = useNavigate();
  const [albumData, setAlbumData] = useState({
    image: album?.image,
    follows: album?.follows,
    title: album?.title,
    songs: album?.songs,
  });
  const [songData, setSongData] = useState({
    image: song?.image,
    likes: song?.likes,
    title: song?.title,
  });

  const { setCurrentSong } = useAlbumsStore();

  const handleAlbumClick = () => {
    localStorage.setItem("currentAlbum", JSON.stringify(album));
    navigate("/album");
  };

  const handleSongClick = () => {
    localStorage.setItem("currentSong", JSON.stringify(song));
    localStorage.removeItem("currentAlbum");
    setCurrentSong(song);
  };

  const handleClick = () => {
    if (song) handleSongClick();
    else handleAlbumClick();
  };

  useEffect(() => {
    const onLoadHandler = async () => {
      setAlbumData((prev) => ({
        ...prev,
        image: album?.image,
        follows: album?.follows,
        title: album?.title,
        songs: album?.songs,
      }));

      setSongData((prev) => ({
        ...prev,
        image: song?.image,
        likes: song?.likes,
        title: song?.title,
      }));
    };

    onLoadHandler();
  }, []);

  return (
    <Box className={styles.card} onClick={handleClick}>
      <Box sx={{ bgcolor: "text.primary" }} borderRadius="10px">
        <img
          src={album ? albumData.image : songData.image}
          alt="image"
          className={styles.image}
        />

        <Chip
          label={
            album ? `${albumData.follows} follows` : `${songData.likes} likes`
          }
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
            mb: "5px",
            mx: "5px",
            fontSize: "10px",
          }}
        />
      </Box>

      <Typography sx={{ color: "text.primary", fontSize: "14px" }}>
        {`${album ? albumData.title : songData.title}`}
      </Typography>
    </Box>
  );
}

export default Card;
