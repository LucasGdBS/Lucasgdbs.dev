import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ArrowDown from "../ArrowDown";
import Container from "../Container";

import topLanguages from "../../../data/topLanguages.json";

function MainSkills() {
  const skills = [
    "Python",
    "JavaScript",
    "React",
    "FastAPI",
    "Django",
    "StreamLit",
    "MySql",
    "Arduino",
    "Railway",
    "Pandas",
    "TailWIndCSS",
  ];

  return (
    <Container className={"bg-slate-400"}>
      <div>
        <h2 className="text-2xl font-OleoScript text-cyan-950 sm:text-5xl">
          Top Languages and Tools
        </h2>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        modules={[Navigation, A11y, Autoplay]}
        autoplay={{ delay: 2000 }}
        navigation
        a11y={{ enabled: true }}
        loop={true}
        className="w-full sm:w-4/5"
      >
        {skills.map((language, index) => {
          const skill = topLanguages.find((skill) => skill.name === language);
          
          if (!skill) {
            return null; // Evita erro caso a skill não seja encontrada
          }

          return (
            <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-y-4 select-none my-12">
              <img src={skill.icon} alt={skill.name} className="w-60 h-60" />
              <p className="text-white font-bold text-lg">{skill.name}</p>
            </div>
          </SwiperSlide>
          )
        })}
      </Swiper>

      <ArrowDown className={"text-black"} />
    </Container>
  );
}

export default MainSkills;
