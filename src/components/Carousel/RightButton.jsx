import rightButton from "../../assets/right-button.svg";

function RightButton() {
  return (
    <button className="swiper-button-next">
      <img src={rightButton} alt="right-button" />
    </button>
  );
}

export default RightButton;
