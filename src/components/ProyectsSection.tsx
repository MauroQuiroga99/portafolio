import { dataProyects } from "app/db/data";
import ProyectCard from "./ProyectCard";

const ProyectsSection = () => {
  return (
    <div className="w-full mx-auto mb-14">
      <div className="text-4xl text-center text-white font-semibold mx-0  xl:mx-0 lg:mx-0 md:mx-12  sm:mx-12 mb-4  break-words ">
        Portfolio
      </div>
      <div className="  flex justify-center flex-wrap gap-4 mx-auto">
        {dataProyects.map((proyect) => (
          <ProyectCard key={proyect.id} proyects={proyect} />
        ))}
      </div>
    </div>
  );
};

export default ProyectsSection;