import styles from "./Carousel.module.css";
import rightButton from "../../assets/right-button.svg";

function RightButton() {
  return (
    <button className={styles.swiperButtonNext}>
      <img src={rightButton} alt="right-button" />
    </button>
  );
}

export default RightButton;
