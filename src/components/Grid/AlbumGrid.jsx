import { Grid } from "@mui/material";
import Card from "../Card/Card";

function AlbumGrid({ albums }) {
  return (
    <Grid container mt="10px" spacing={3}>
      {albums.map((album) => (
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
  );
}

export default AlbumGrid;
