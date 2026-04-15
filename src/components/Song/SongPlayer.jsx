import { Box, Typography } from "@mui/material";
import { useAlbumsStore } from "../../stores/useAlbumsStore.js";
import PlayButton from "../../assets/play-pause-button.svg";
import ProgressBar from "../../assets/progress-bar.svg";
import styles from "./SongPlayer.module.css";

function SongPlayer() {
  const { currentSong: storeSong } = useAlbumsStore();
  const localSong = JSON.parse(localStorage.getItem("currentSong"));

  const currentSong = storeSong || localSong;
  const currentAlbum = JSON.parse(localStorage.getItem("currentAlbum")) || "";

  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        zIndex: 10,
        bgcolor: "background.default",
        width: "100%",
        borderTop: 2,
      }}
    >
      {currentSong ? (
        <Box
          sx={{
            width: "100%",
            padding: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <img
              src={currentSong.image}
              alt="song-image"
              style={{ width: 70, height: 70, borderRadius: 10 }}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography className={styles.songTitle}>
                <span>{currentSong.title}</span>
              </Typography>

              <Typography sx={{ fontSize: 12 }}>
                {currentAlbum.title}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <img src={PlayButton} alt="play-button" width="7%" />
            <img src={ProgressBar} alt="progress-bar" width="80%" />
          </Box>
        </Box>
      ) : (
        <Typography
          sx={{
            fontSize: 20,
            width: "100%",
            textAlign: "center",
            color: "primary.main",
            paddingY: 3,
          }}
        >
          Select a song to play.
        </Typography>
      )}
    </Box>
  );
}

export default SongPlayer;
