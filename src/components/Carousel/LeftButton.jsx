import leftButton from "../../assets/left-button.svg";
import "./Carousel.css";

function LeftButton({ btnName }) {
  return (
    <button className={btnName}>
      <img src={leftButton} alt="left-button" />
    </button>
  );
}

export default LeftButton;
