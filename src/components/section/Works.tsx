import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useStaticQuery, graphql } from "gatsby";

const Works = () => {
  const data = useStaticQuery(graphql`
    query PhotoPage {
      gcms {
        photoID {
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
  const friends = data.gcms.photoID;

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
        {friends.map((photo: any, i: number) => {
          return (
            <SwiperSlide className="mt-8" key={i}>
              <img src={photo.image.url} alt={photo.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="sm:text-sm md:text-base text-gray mb-5 mt-8">
        Just a group of friends chillin'...
      </div>
    </div>
  );
};

export default Works;
