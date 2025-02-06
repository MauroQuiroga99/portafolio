import dataActivities from "app/db/data";
import React from "react";

import ProyectCardE from "./ProyectCardE";

const ProyectsSectionE = () => {
  return (
    <div id="portfolio" className="w-full mx-auto mb-14">
      <div className="text-4xl text-center text-white font-semibold mx-0  xl:mx-0 lg:mx-0 md:mx-12  sm:mx-12 mb-4  break-words ">
        Actividades
      </div>
      <div className="flex justify-center flex-wrap gap-4 mx-auto overflow-y-auto max-h-[calc(3*256px)] sm:overflow-visible sm:max-h-none ">
        {" "}
        {dataActivities.map((activitie) => (
          <ProyectCardE key={activitie.id} activities={activitie} />
        ))}
      </div>
    </div>
  );
};

export default ProyectsSectionE;
