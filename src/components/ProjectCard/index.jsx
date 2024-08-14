import PropTypes from "prop-types";
import classNames from "classnames";
import LanguagesBlock from "../LanguagesBlock";

function ProjectCard({ project, className }) {
  return (
   <div className={classNames("text-white p-20 h-full flex flex-col gap-y-80", className)}>
      <div className="flex flex-col gap-6">
        <div className="flex relative">
          <h3 className="text-6xl">{project.name}</h3>
          <LanguagesBlock languages={["Python", "Pandas", "JavaScript", "React"]} />
        </div>
        <h4 className="text-4xl ">{project.subtitle}</h4>
      </div>
      <div>
        <p className="text-white text-xl">{project.description}</p>
      </div>
   </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
  className: PropTypes.string, 
};

ProjectCard.defaultProps = {
  project: {},
  className: "bg-black",
};

export default ProjectCard;
