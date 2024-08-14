import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/autoplay";


function MainProjects() {
  return (
    <Container className={"bg-zinc-600"}>
      <h2 className="text-5xl font-OleoScript text-emerald-600 sm:text-8xl">
        Projects
      </h2>

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        modules={[Autoplay, Pagination, A11y]}
        autoplay={{ delay: 2000 }}
        a11y={{ enabled: true }}
        loop={true}
        pagination={{ clickable: false }}
        className="w-full sm:w-4/5"
      >
        <SwiperSlide className="bg-black">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-orange-500">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-sky-600">Slide 4</SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default MainProjects;
