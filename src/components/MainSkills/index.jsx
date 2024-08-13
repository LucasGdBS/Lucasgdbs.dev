import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

function MainSkills() {
  const skills = [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "FastAPI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    },
    {
      name: "StreamLit",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg"
    },
    {
      name: "MySql",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
    },
    {
      name: "Arduino",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg"
    },
    {
      name: "Railway",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original-wordmark.svg"
    },
    {
      name: "Pandas",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
    }
  ];

  return (
    <div className="bg-slate-400 flex items-center justify-center py-16 flex-col h-screen gap-10">
      <div>
        <h2 className="text-2xl font-OleoScript text-cyan-950 sm:text-5xl">
          Top Languages and Tools
        </h2>
      </div>
      
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoplay={{ delay: 2000 }}
        navigation
        pagination={{ clickable: true }}
        a11y={{ enabled: true }}
        rewind={true}
        className="w-full"

      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-y-4 select-none my-12">
              <img src={skill.icon} alt={skill.name} className="w-60 h-60" />
              <p className="text-white font-bold text-lg">{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default MainSkills;
