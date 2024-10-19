import { Skills, dataSkills } from "app/db/data";

type SkillsProps = {
  skills: Skills;
};

const SkillsCard = ({ skills }: SkillsProps) => {
  return (
    <div className="w-36 h-36 text-white hover:bg-yellow-300 hover:text-black cursor-pointer bg-gray-600 rounded-md flex flex-col text-center justify-center items-center gap-6     ">
      <div className="w-14 h-14 items-baseline">
        <img src={skills.icon} alt="icono skill" />
      </div>
      <div className=" "> {skills.name} </div>
    </div>
  );
};

export default SkillsCard;
