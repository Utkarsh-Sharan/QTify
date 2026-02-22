import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios.js";
import TopAlbumsSection from "./TopAlbumsSection.jsx";
import HorizontalDivider from "../Dividers/HorizontalDivider.jsx";

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
        <TopAlbumsSection topAlbums={topAlbums} />

        <HorizontalDivider />
      </Box>
    </>
  );
}

export default Section;
