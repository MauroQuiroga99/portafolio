import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const AboutSection = () => {
  return (
    <div className="p-4 m-14 flex flex-col md:flex-row  xl:justify-center lg:justify-center md:justify-between  items-center ">
      <div className="text-white sm:text-left md:text-left text-center">
        <div className="text-2xl">
          I'm {""}
          <span className="text-5xl text-yellow-300  font-semibold">
            {" "}
            Mauro Quiroga
          </span>{" "}
          <br />
          <div className="mt-3 font-xs">Front-End Developer</div>
        </div>
        <div className="mt-3">
          <button className=" cursor-pointer bg-transparent hover:bg-yellow-300 text-white font-semibold hover:text-white p-2 border border-yellow-300 hover:border-transparent rounded">
            Contact Me
          </button>
        </div>
      </div>
      <div className=" top-5 relative bg-[url('/img/perfil.png')] bg-center bg-cover bg-no-repeat w-96 h-80">
        <div className="absolute md:right-[20px] xl:right-[20px] lg:right-[20px] sm:right-[20px] bottom-[130px] right-[60px]  w-0.5 h-20 bg-yellow-300"></div>
        <div className="  absolute md:right-[12.5px] xl:right-[12.5px] lg:right-[12.5px] sm:right-[12.5px]  bottom-[10px] right-[52.5px] flex flex-col space-y-1 z-0">
          <a
            className="cursor-pointer"
            href="https://www.facebook.com/yato.sama.9022/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-white" />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} className="text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/mauro-alexander-quiroga-borja-751100190/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-white" />
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
  );
};

export default AboutSection;
