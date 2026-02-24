import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../Card/Card";
import "./Carousel.css";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

function Carousel({ albums, carouselId }) {
  const prevButton = `${carouselId}-prev`;
  const nextButton = `${carouselId}-next`;

  return (
    <>
      <LeftButton btnName={prevButton} />

      <RightButton btnName={nextButton} />

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.${nextButton}`,
          prevEl: `.${prevButton}`,
        }}
        spaceBetween={3}
        breakpoints={{
          0: { slidesPerView: 3, slidesPerGroup: 3 },
          600: { slidesPerView: 4, slidesPerGroup: 4 },
          1200: { slidesPerView: 6, slidesPerGroup: 6 },
        }}
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id} className="elements">
            <Card album={album} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
