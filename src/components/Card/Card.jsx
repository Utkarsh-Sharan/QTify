import { Box, Chip, Typography } from "@mui/material";
import img from "../../assets/hero_headphones.png";
import styles from "./Card.module.css";

function Card() {
  return (
    <Box className={styles.card}>
      <Box sx={{bgcolor: "text.primary"}} borderRadius="10px">
        <img src={img} alt="image" className={styles.image} />

        <Chip label="100 follows" sx={{bgcolor: "background.default", color: "text.primary", mb: "5px", mx: "5px"}} />
      </Box>

      <Typography color="text">New English Songs</Typography>
    </Box>
  );
}

export default Card;
