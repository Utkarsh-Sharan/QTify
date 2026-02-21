import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  const handleFeedback = (e) => {
    console.log(e.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button handleClick={handleFeedback}>
        {"Give Feedback"}
      </Button>
    </nav>
  );
}

export default Navbar;
