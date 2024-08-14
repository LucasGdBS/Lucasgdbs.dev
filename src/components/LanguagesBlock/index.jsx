import PropTypes from "prop-types";
import languageList from "../../../topLanguages.json";

function LanguagesBlock({ languages }) {
  const skillList = languageList;

  return (
    <div className="grid grid-cols-2 gap-4 border-x-2 absolute right-0 p-6">
      {languages.map((language, index) => {
        const skill = skillList.find((skill) => skill.name === language);

        if (!skill) {
          return null; // Evita erro caso a skill não seja encontrada
        }

        return (
          <div
            key={index}
            className="flex flex-col items-center gap-y-4 select-none"
          >
            <img src={skill.icon} alt={skill.name} className="w-15 h-15 " />
            <p className="text-white font-bold text-sm">{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
}

LanguagesBlock.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string), // Define como um array de strings
};

export default LanguagesBlock;
