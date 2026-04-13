import { Box, Button, Typography } from "@mui/material";
import styles from "./AlbumDetailsHeader.module.css";
import SmallDot from "../../assets/small-dot.png";
import ShuffleIcon from "../../assets/shuffle-icon.svg";
import LibraryIcon from "../../assets/library-icon.svg";
import { useMemo } from "react";

function AlbumDetailsHeader() {
  const currentAlbum = JSON.parse(localStorage.getItem("currentAlbum"));

  const calculateTotalAlbumDuration = () => {
    const totalDuration = currentAlbum.songs.reduce(
      (acc, cur) => acc + cur.durationInMs,
      0,
    );

    const hours = Math.floor(totalDuration / (1000 * 60 * 60));
    const minutes = Math.floor(
      (totalDuration % (1000 * 60 * 60)) / (1000 * 60),
    );

    return {hours: hours, minutes: minutes};
  };

  const totalDuration = useMemo(() => calculateTotalAlbumDuration(), [currentAlbum]);

  return (
    <Box className={styles.header}>
      <img
        src={currentAlbum.image}
        alt="album-image"
        className={styles.profile}
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ fontSize: 25, fontWeight: "medium" }}>
          {currentAlbum.title}
        </Typography>

        <Typography sx={{ fontSize: 15 }}>
          {currentAlbum.description}
        </Typography>

        <Typography sx={{ fontSize: 15 }}>2026</Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ fontSize: 15 }}>
            {currentAlbum.songs.length} songs
          </Typography>

          <img src={SmallDot} alt="divider" width={5} height={5} />

          <Typography sx={{ fontSize: 15 }}>
            {totalDuration?.hours > 0 ? (
              <span>
                {totalDuration?.hours} hours {totalDuration?.minutes} minutes
              </span>
            ) : (
              <span>{totalDuration?.minutes} minutes</span>
            )}
          </Typography>

          <img src={SmallDot} alt="divider" width={5} height={5} />

          <Typography sx={{ fontSize: 15 }}>
            {currentAlbum.follows} follows
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            sx={{
              bgcolor: "primary.main",
              color: "text.primary",
              px: 2,
              py: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <img src={ShuffleIcon} alt="shuffle-icon" />
            <p>Shuffle</p>
          </Button>

          <Button
            sx={{
              bgcolor: "primary.black",
              color: "primary.main",
              px: 2,
              py: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              border: 1,
              borderColor: "primary.main"
            }}
          >
            <img src={LibraryIcon} alt="shuffle-icon" />
            <p>Add to library</p>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AlbumDetailsHeader;
