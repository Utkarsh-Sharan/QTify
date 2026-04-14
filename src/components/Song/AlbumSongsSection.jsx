import { Box, Typography } from "@mui/material";
import SongBar from "./SongBar";

function AlbumSongsSection() {
  const songs = JSON.parse(localStorage.getItem("currentAlbum")).songs;

  return (
    <Box sx={{ marginTop: 10 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr auto",
          alignItems: "center",
        }}
      >
        <Typography>Title</Typography>
        <Typography>Artist</Typography>
        <Typography>Duration</Typography>
      </Box>

      {songs.map((song) => (
        <SongBar key={song.id} song={song} />
      ))}
    </Box>
  );
}

export default AlbumSongsSection;
