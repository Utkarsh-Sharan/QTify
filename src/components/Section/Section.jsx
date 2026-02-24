import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios.js";
import TopAlbumsSection from "./TopAlbumsSection.jsx";
import HorizontalDivider from "../Dividers/HorizontalDivider.jsx";
import NewAlbumsSection from "./NewAlbumsSection.jsx";

function Section() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const fetchAllAlbums = async () => {
    try {
      const [topRes, newRes] = await Promise.allSettled([
        axiosInstance.get("/albums/top"),
        axiosInstance.get("/albums/new")
      ]);

      setTopAlbums(topRes.value.data);
      setNewAlbums(newRes.value.data);

      console.log(topRes.value.data);
      console.log(newRes.value.data);
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
      </Box>
    </>
  );
}

export default Section;
