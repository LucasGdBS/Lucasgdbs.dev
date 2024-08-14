import PropTypes from "prop-types";
import classNames from "classnames";
import LanguagesBlock from "../LanguagesBlock";

function ProjectCard({ project = {}, className = "bg-black" }) {
  return (
    <div
      className={classNames(
        "text-white p-20 h-full flex flex-col gap-y-80",
        className
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="flex relative">
          <a href={project.link} target="_blank" rel="noreferrer">
            <h3 className="text-6xl underline underline-offset-8 text-blue-500 cursor-pointer">
              {project.name}
            </h3>
          </a>
          <LanguagesBlock languages={project.languages} />
        </div>
        <h4 className="text-4xl ">{project.subtitle}</h4>
      </div>
      <div className="hidden lg:block">
        <p className="text-white text-xl">{project.description}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
  className: PropTypes.string,
};

export default ProjectCard;
