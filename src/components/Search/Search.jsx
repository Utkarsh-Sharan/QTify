import styles from "./Search.module.css";
import searchIcon from "../../assets/search-icon.svg";
import {Autocomplete} from "@base-ui/react/autocomplete";
// import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Search({ searchData, placeholder }) {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedValue) navigate(`/album/${selectedValue.slug}`);
    //Process form data, call API, set state etc.
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <Autocomplete.Root
        items={searchData || []}
        onValueChange={(val) => setSelectedValue(val)}
      >
        <label className={styles.Label}>
          <Autocomplete.Input
            placeholder={placeholder}
            className={styles.search}
            required
          />
        </label>

        <button className={styles.searchButton} type="submit">
          <img src={searchIcon} alt="search-icon" />
        </button>

        <Autocomplete.Portal>
          <Autocomplete.Positioner className={styles.Positioner} sideOffset={4}>
            <Autocomplete.Popup className={styles.Popup}>
              <Autocomplete.Empty className={styles.Empty}>
                No albums found.
              </Autocomplete.Empty>
              <Autocomplete.List className={styles.List}>
                {(option) => (
                  <Autocomplete.Item
                    key={option.id}
                    className={styles.listElement}
                    value={option}
                  >
                    <p className={styles.albumTitle}>{option.title}</p>
                    <p className={styles.albumArtists}>
                      {option.songs.flatMap((song) => song.artists).join(", ")}
                    </p>
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    </form>
  );
}

export default Search;
