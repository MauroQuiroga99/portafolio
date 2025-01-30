import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const AboutSectionE = () => {
  return (
    <>
      <div
        id="about"
        className="m-14 sm:mx-0 flex flex-col md:flex-row justify-between xl:justify-center w-full mx-auto items-center"
      >
        <div className="text-white sm:text-left md:text-left text-center sm:w-2/4 w-auto ">
          <div className="text-2xl">
            Soy {""}
            <span className="text-5xl text-yellow-300  font-semibold">
              {" "}
              Mauro Quiroga
            </span>{" "}
            <br />
            <div className="mt-3 ">Ingeniero Ambiental y Sanitario</div>
          </div>
          <div className="mt-3">
            <a
              target="_blank"
              href="/CV-mauroquiroga.pdf"
              className=" cursor-pointer bg-transparent hover:bg-yellow-300 text-white font-semibold hover:text-white py-1 px-5 border border-yellow-300 hover:border-transparent rounded"
            >
              Download CV
              <FontAwesomeIcon
                icon={faCircleArrowDown}
                className="ml-2 w-4 h-4"
              />
            </a>
          </div>
        </div>
        <div className=" top-5 relative bg-[url('/img/perfil.png')] bg-center bg-cover bg-no-repeat w-96 h-80">
          <div className="absolute md:right-[20px] xl:right-[20px] lg:right-[20px] sm:right-[20px] bottom-[130px] right-[60px]  w-0.5 h-20 bg-yellow-300"></div>
          <div className="  absolute md:right-[12.5px] xl:right-[12.5px] lg:right-[12.5px] sm:right-[12.5px]  bottom-[10px] right-[52.5px] flex flex-col space-y-1 z-0">
            <a
              href="https://www.linkedin.com/in/mauro-alexander-quiroga-borja-751100190/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-white" />
            </a>
            <a
              className="cursor-pointer"
              href="https://api.whatsapp.com/send/?phone=573235884424&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
            </a>

            <a
              href="https://github.com/MauroQuiroga99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className=" relative w-full mx-auto    m-14 ">
        <div className=" absolute bg-yellow-300 w-0.5 h-32 left-8 sm:left-12 sm:w-10 sm:h-0.5 lg:left-0.5 md:left-12  mt-16 "></div>
        <div className="text-4xl text-white font-semibold mx-0  xl:mx-0 lg:mx-0 md:mx-12  sm:mx-12 mb-4  ">
          About
        </div>
        <div className="text-white  text-sm ml-12  xl:mx-14 lg:mx-14 md:mx-[99px]  sm:mx-24">
          Soy Ingeniero Ambiental con más de un año de experiencia en el sector
          Oil & Gas, especializado en gestión ambiental, cumplimiento normativo
          y elaboración de informes técnicos. He trabajado en el análisis de
          Informes de Cumplimiento Ambiental (ICA), manejo de residuos, planes
          de manejo ambiental, y gestión de emisiones, incluyendo inventarios de
          CO2 y cálculo de huella de carbono. Me apasiona optimizar procesos
          mediante tecnología, aplicando mis habilidades en HTML, CSS,
          JavaScript, React.js, Material-UI, Tailwind CSS, SQL, NoSQL,
          desarrollo de APIs y Node.js para mejorar la gestión y análisis de
          datos ambientales, facilitando la toma de decisiones y el cumplimiento
          normativo en proyectos sostenibles.
        </div>
      </div>
    </>
  );
};

export default AboutSectionE;
