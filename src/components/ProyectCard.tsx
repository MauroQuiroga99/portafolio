import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Proyects } from "app/db/data";

type ProyectsProps = {
  proyects: Proyects;
};

const ProyectCard = ({ proyects }: ProyectsProps) => {
  return (
    <div>
      <div
        className="max-w-sm w-72 h-60 mx-auto relative group bg-cover bg-center rounded-lg cursor-pointer"
        style={{ backgroundImage: `url(${proyects.image})` }}
      >
        <div className="absolute inset-0 hover:bg-black hover:bg-opacity-50 rounded-lg group-hover:backdrop-blur-sm transition-all duration-300">
          <div className="hidden group-hover:flex flex-col justify-center items-center h-full text-white">
            <div className="text-center px-4 mt-2">
              <h2 className="text-sm font-bold">{proyects.title}</h2>
              <p className="text-xs">{proyects.description}</p>
            </div>
            <div className="text-center px-4 mt-1">
              {proyects.technology.map((tech) => (
                <div
                  key={tech.id}
                  className="mt-2 mx-1 inline-block text-white py-1 px-2 rounded bg-yellow-300 bg-opacity-50 text-xs font-semibold"
                >
                  {tech.name}
                </div>
              ))}
            </div>
            <div className="text-center px-4 mt-2">
              <div className="flex flex-wrap gap-2 justify-center">
                <a
                  href={proyects.url}
                  target="_blank"
                  className="cursor-pointer text-yellow-300 hover:bg-yellow-300 hover:bg-opacity-50 text-xs hover:text-white rounded px-2 py-1"
                >
                  View App
                  <FontAwesomeIcon
                    className="ml-2 w-4 h-4"
                    icon={faArrowUpRightFromSquare}
                  />
                </a>
                <a
                  href={proyects.git}
                  target="_blank"
                  className="cursor-pointer text-yellow-300 hover:bg-yellow-300 hover:bg-opacity-50 text-xs hover:text-white rounded px-2 py-1"
                >
                  GitHub
                  <FontAwesomeIcon className="ml-2 w-4 h-4" icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
