import { dataSkills } from "app/db/data";
import SkillsCard from "./SkillsCard";

const SkillsSection = () => {
  return (
    <div className="w-full mx-auto">
      <div className="text-center text-5xl text-white font-semibold ">
        My Skills
      </div>
      <div className="flex gap-4 mt-8 justify-center flex-wrap">
        {dataSkills.map((skill) => (
          <SkillsCard key={skill.id} skills={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
