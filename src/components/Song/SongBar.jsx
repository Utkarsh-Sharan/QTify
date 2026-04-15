import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAlbumsStore } from "../../stores/useAlbumsStore";

function SongBar({ song }) {
  const [duration, setDuration] = useState({
    minutes: 0,
    seconds: 0,
  });
  const {setCurrentSong} = useAlbumsStore();

  const handleClick = () => {
    setCurrentSong(song);
    localStorage.setItem("currentSong", JSON.stringify(song));
  }

  const calculateSongDuration = () => {
    const totalDuration = song.durationInMs;

    const minutes = Math.floor(totalDuration / (1000 * 60));
    const seconds = Math.floor((totalDuration % (1000 * 60)) / 1000);

    return { minutes: minutes, seconds: seconds };
  };

  useEffect(() => {
    const onLoadHandler = () => {
      const totalDuration = calculateSongDuration();

      setDuration((prev) => ({
        ...prev,
        minutes: totalDuration.minutes,
        seconds: totalDuration.seconds,
      }));
    };

    onLoadHandler();
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr auto",
        alignItems: "center",
        paddingY: 2,
        borderBottom: 1,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(52, 201, 75, 0.1)",
        },
      }}

      onClick={handleClick}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <img src={song.image} alt="song-profile" width={60} height={60} />

        <Typography>{song.title}</Typography>
      </Box>

      <Typography sx={{ textAlign: "left" }}>
        {song.artists.length > 1
          ? `${song.artists[0]} + ${song.artists.length - 1} more`
          : `${song.artists[0]}`}
      </Typography>

      <Typography sx={{ textAlign: "right", paddingLeft: 15 }}>
        {duration.minutes}:{duration.seconds}
      </Typography>
    </Box>
  );
}

export default SongBar;
