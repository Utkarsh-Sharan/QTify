import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../Card/Card";
import "./Carousel.css";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

function Carousel({ albums = [], songs = [], carouselId }) {
  const prevButton = `${carouselId}-prev`;
  const nextButton = `${carouselId}-next`;

  const renderAlbums = () => {
    return albums.map((album) => (
      <SwiperSlide key={album.id} className="elements">
        <Card album={album} />
      </SwiperSlide>
    ));
  }

  const renderSongs = () => {
    return songs.map((song) => (
      <SwiperSlide key={song.id} className="elements">
        <Card song={song} />
      </SwiperSlide>
    ))
  }

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
          0: { slidesPerView: 3 },
          600: { slidesPerView: 4 },
          1200: { slidesPerView: 6 },
        }}
      >
        {(albums && albums.length) ? renderAlbums() : renderSongs()}
      </Swiper>
    </>
  );
}

export default Carousel;
