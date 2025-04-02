import React from "react";
import PropTypes from "prop-types";

const SkillGrid = ({ skills = [] }) => {
  const defaultSkills = [
    { id: 1, title: "C#", poster: "path/to/default/csharp.png" },
    { id: 2, title: "JavaScript", poster: "path/to/default/javascript.png" },
  ];

  const skillList = skills.length > 0 ? skills : defaultSkills;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {skillList.map((skill) => (
        <div key={skill.id} className="flex flex-col items-center">
          <img src={skill.poster} alt={skill.title} className="w-20 h-20 object-contain" />
          <p className="mt-2 text-lg font-semibold">{skill.title}</p>
        </div>
      ))}
    </div>
  );
};

SkillGrid.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    })
  ),
};

export default SkillGrid;
