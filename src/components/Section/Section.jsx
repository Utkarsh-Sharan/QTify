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
  const [songs, setSongs] = useState([]);

  const fetchAllAlbums = async () => {
    try {
      const [topRes, newRes, songs] = await Promise.allSettled([
        axiosInstance.get("/albums/top"),
        axiosInstance.get("/albums/new"),
        axiosInstance.get("/songs"),
      ]);

      setTopAlbums(topRes.value.data);
      setNewAlbums(newRes.value.data);
      setSongs(songs.value.data);
    } catch (error) {
      console.log(error);
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

        <SongsSection songs={songs} />

        <HorizontalDivider />
      </Box>
    </>
  );
}

export default Section;
