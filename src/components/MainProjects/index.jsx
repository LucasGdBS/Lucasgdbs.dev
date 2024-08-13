import Container from "../Container";
import ProjectCard from "../ProjectCard";

const project = {
  name: "Project Name",
  link: "https://www.github.com",
  description: "Project Description",
};


function MainProjects(){
  return (
    <Container className={"bg-zinc-600"}>
      <h2 className="text-5xl font-OleoScript text-emerald-600 sm:text-8xl">Projects</h2>

      <ProjectCard project={project}/>

    </Container>
  );
}

export default MainProjects;