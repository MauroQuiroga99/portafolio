import { dataSkillsE } from "app/db/data";
import SkillsCardE from "./SkillsCardE";

const SkillsSectionE = () => {
  return (
    <div id="skills" className="w-full mx-auto mb-14">
      <div className="text-center text-4xl text-white font-semibold ">
        My Skills
      </div>
      <div className="flex gap-4 mt-8 justify-center flex-wrap">
        {dataSkillsE.map((skill) => (
          <SkillsCardE key={skill.id} skills={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSectionE;
