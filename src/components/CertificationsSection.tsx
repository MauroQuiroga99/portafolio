import { dataCertifications } from "app/db/data";
import CertificationsCard from "./CertificationsCard";

const CertificationsSection = () => {
  return (
    <div className="w-full mx-auto mb-14">
      <div className=" w-full mx-auto ">
        <div className="text-4xl text-white font-semibold mx-0  xl:mx-0 lg:mx-0 md:mx-12  sm:mx-12 mb-4  break-words ">
          Certifications
        </div>
        <div className="flex flex-col gap-4">
          {dataCertifications.map((cert) => (
            <CertificationsCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
