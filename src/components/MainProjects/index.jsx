import Container from "../Container";
import ProjectCard from "../ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/autoplay";


function MainProjects() {

  const projects = [
    {
      name: "Projeto 1",
      subtitle: "Subtítulo do projeto 1",
      link: "https://github.com",
      description: "Descrição do projeto 1",
    },
    {
      name: "Projeto 2",
      subtitle: "Subtítulo do projeto 2",
      link: "https://github.com",
      description: "Descrição do projeto 2",
    },
    {
      name: "Projeto 3",
      subtitle: "Subtítulo do projeto 3",
      link: "https://github.com",
      description: "Descrição do projeto 3",
    },
  ];

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
            <ProjectCard project={project} className="bg-orange-500"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default MainProjects;
