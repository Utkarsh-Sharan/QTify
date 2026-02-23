import leftButton from "../../assets/left-button.svg";
import styles from "./Carousel.module.css";

function LeftButton() {
  return (
    <button className={styles.swiperButtonPrev}>
      <img src={leftButton} alt="left-button" />
    </button>
  );
}

export default LeftButton;
