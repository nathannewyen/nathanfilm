import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useStaticQuery, graphql } from "gatsby";

const Playground = () => {
  const data = useStaticQuery(graphql`
    query PlayGroundPage {
      gcms {
        playgrounds {
          id
          name
          description
          image {
            url
          }
        }
      }
    }
  `);
  const playgrounds = data.gcms.playgrounds;

  return (
    <div>
      <div className="text-sm text-gray mb-5 sm:hidden md:block">
        Most recent works on film
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {playgrounds.map((photo: any, i: number) => {
          return (
            <SwiperSlide className="mt-8" key={i}>
              <img src={photo.image.url} alt={photo.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Playground;
