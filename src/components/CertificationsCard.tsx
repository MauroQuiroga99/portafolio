import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { Certifications, dataCertifications } from "app/db/data";

type CertificationsProps = {
  cert: Certifications;
};

const CertificationsCard = ({ cert }: CertificationsProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex-shrink-0 rounded">
        <img className="w-12 h-12 mr-2 rounded-md" src={cert.icon} alt="" />
      </div>
      <div className="text-white">
        <p className="text-xl font-semibold">{cert.title} </p>
        <p className=""> {cert.name} </p>
        <p> Expedition: {cert.date} </p>

        <p> Certificate Number: {cert.id} </p>

        <a
          target="_blank"
          href={cert.url}
          className="cursor-pointer text-white bg-yellow-300 bg-opacity-50 hover:text-white rounded px-2 py-1"
        >
          View Certification
          <FontAwesomeIcon
            className="ml-2 w-4 h-4"
            icon={faArrowUpRightFromSquare}
          />
        </a>
      </div>
    </div>
  );
};

export default CertificationsCard;
