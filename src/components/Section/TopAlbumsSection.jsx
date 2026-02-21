import { Grid } from "@mui/material";
import Card from "../Card/Card";

function TopAlbumsSection({ topAlbums }) {
  return (
    topAlbums.length &&
    topAlbums.map((album) => {
      return (
        <Grid key={album.id} size={{ xs: 4, md: 3, lg: 2 }} display="flex" justifyContent="center">
          <Card album={album} />
        </Grid>
      );
    })
  );
}

export default TopAlbumsSection;
