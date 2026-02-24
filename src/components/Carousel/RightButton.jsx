import rightButton from "../../assets/right-button.svg";
import "./Carousel.css";

function RightButton({ btnName }) {
  return (
    <button className={btnName}>
      <img src={rightButton} alt="right-button" />
    </button>
  );
}

export default RightButton;
