import Container from "../Container";
import ProjectCard from "../ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/autoplay";

import projects from "../../../data/projects.json"


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
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} className="bg-neutral-600"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default MainProjects;
