import { Box, Chip, Typography } from "@mui/material";
import styles from "./Card.module.css";

function Card({album}) {
  const { image, follows, title } = album;

  return (
    <Box className={styles.card}>
      <Box sx={{ bgcolor: "text.primary" }} borderRadius="10px">
        <img src={image} alt="image" className={styles.image} />

        <Chip
          label={`${follows} follows`}
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
        {`${title}`}
      </Typography>
    </Box>
  );
}

export default Card;
