import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../Card/Card";
import styles from "./Carousel.module.css";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

function Carousel({ albums }) {
  return (
    <div className={styles.carouselWrapper}>
      <LeftButton />

      <RightButton />

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `swiper-button-next`,
          prevEl: `swiper-button-prev`,
        }}
        spaceBetween={3}
        breakpoints={{
          0: { slidesPerView: 3, slidesPerGroup: 3 },
          600: { slidesPerView: 4, slidesPerGroup: 4 },
          1200: { slidesPerView: 6, slidesPerGroup: 6 },
        }}
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id} className={styles.elements}>
            <Card album={album} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
