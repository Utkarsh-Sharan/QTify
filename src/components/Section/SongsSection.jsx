import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import AlbumHeader from "../Header/AlbumHeader";
import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios.js";

function SongsSection({tabs}) {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [filter, setFilter] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFilter(newValue);
  };

  const fetchAllSongs = async () => {
    try {
      const res = await axiosInstance.get("/songs");

      setSongs(res.data);
    } catch (error) {
      if (error?.response?.status < 500)
        console.log(error?.response?.data?.message);
      else console.log("Something went wrong!");
    }
  };

  useEffect(() => {
    const onLoadHandler = () => {
      fetchAllSongs();
    };

    onLoadHandler();
  }, []);

  useEffect(() => {
    const onLoadHandler = () => {
      if (!filter) setFilteredSongs(songs);
      else {
        const filtered = songs.filter((song) => song.genre.key === filter);
        setFilteredSongs(filtered);
      }
    };

    onLoadHandler();
  }, [songs, filter]);

  return (
    <>
      <AlbumHeader isSongs>{"Songs"}</AlbumHeader>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab
                label="All"
                value=""
                sx={{ color: "text.primary", textTransform: "none" }}
              />
              {Array.isArray(tabs) &&
                tabs.map((tab) => (
                  <Tab
                    label={tab.label}
                    value={tab.key}
                    key={tab.key}
                    sx={{ color: "text.primary", textTransform: "none" }}
                  />
                ))}
            </TabList>
          </Box>

          <TabPanel value="">
            <Box position="relative">
              <Carousel songs={songs} carouselId={"songs"} />
            </Box>
          </TabPanel>
          {Array.isArray(tabs) &&
            tabs.map((tab) => (
              <TabPanel value={tab.key} key={tab.key}>
                <Box position="relative">
                  <Carousel songs={filteredSongs} carouselId={"songs"} />
                </Box>
              </TabPanel>
            ))}
        </TabContext>
      </Box>
    </>
  );
}

export default SongsSection;
