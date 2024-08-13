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
  ];

  return (
    <div className="bg-indigo-700 flex items-center justify-center py-16 flex-col gap-y-32">
      <div>
        <h2 className="text-2xl font-Lobster text-white sm:text-5xl">
          Top Languages and Tools
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-32 content-evenly">
        {skills.map((skill, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-60 h-60"
            />
            <span className="text-white font-Lobster text-lg sm:text-xl mt-2">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSkills;
