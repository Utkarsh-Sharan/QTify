import { Box, Chip, Typography } from "@mui/material";
import styles from "./Card.module.css";

function Card({album, song}) {
  let data = null;

  if(album){
    data = {
      image: album.image,
      follows: album.follows,
      title: album.title,
    };
  }
  else{
    data = {
      image: song.image,
      likes: song.likes,
      title: song.title,
    }
  }

  return (
    <Box className={styles.card}>
      <Box sx={{ bgcolor: "text.primary" }} borderRadius="10px">
        <img src={data.image} alt="image" className={styles.image} />

        <Chip
          label={album ? `${data.follows} follows` : `${data.likes} likes`}
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
        {`${data.title}`}
      </Typography>
    </Box>
  );
}

export default Card;
