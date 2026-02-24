import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios.js";
import TopAlbumsSection from "./TopAlbumsSection.jsx";
import HorizontalDivider from "../Dividers/HorizontalDivider.jsx";
import NewAlbumsSection from "./NewAlbumsSection.jsx";
import SongsSection from "./SongsSection.jsx";

function Section() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchAllAlbums = async () => {
    try {
      const [topRes, newRes, genresRes] = await Promise.allSettled([
        axiosInstance.get("/albums/top"),
        axiosInstance.get("/albums/new"),
        axiosInstance.get("/genres")
      ]);

      setTopAlbums(topRes.value.data);
      setNewAlbums(newRes.value.data);
      setGenres(genresRes.value.data.data);
    } catch (error) {
      if (error?.response?.status < 500)
        console.log(error?.response?.data?.message);
      else console.log("Something went wrong!");
    }
  };

  useEffect(() => {
    const onLoadHandler = () => {
      fetchAllAlbums();
    };

    onLoadHandler();
  }, []);

  return (
    <>
      <Box px="15px">
        <TopAlbumsSection topAlbums={topAlbums} />

        <HorizontalDivider />

        <NewAlbumsSection newAlbums={newAlbums} />

        <HorizontalDivider />

        <SongsSection tabs={genres} />

        <HorizontalDivider />
      </Box>
    </>
  );
}

export default Section;
