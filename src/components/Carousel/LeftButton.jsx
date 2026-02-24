import leftButton from "../../assets/left-button.svg";

function LeftButton() {
  return (
    <button className="swiper-button-prev">
      <img src={leftButton} alt="left-button" />
    </button>
  );
}

export default LeftButton;
