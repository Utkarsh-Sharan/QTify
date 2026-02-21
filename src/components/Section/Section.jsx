import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios.js";
import TopAlbumsSection from "./TopAlbumsSection.jsx";

function Section() {
  const [topAlbums, setTopAlbums] = useState([]);

  const fetchTopAlbums = async () => {
    try {
      const res = await axiosInstance.get("/albums/top");
      setTopAlbums(res.data);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const onLoadHandler = () => {
      fetchTopAlbums();
    };

    onLoadHandler();
  }, []);

  return (
    <>
      <Box px="15px">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Top Albums
          </Typography>
          <Button
            sx={{
              textTransform: "none",
              color: "primary.main",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Show all
          </Button>
        </Box>
        <Grid container mt="10px" spacing={3}>
          <TopAlbumsSection topAlbums={topAlbums}/>
        </Grid>
      </Box>
    </>
  );
}

export default Section;
