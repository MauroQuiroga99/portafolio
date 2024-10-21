import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const AboutSection = () => {
  return (
    <>
      <div className="m-14 sm:mx-0 flex flex-col md:flex-row justify-between xl:justify-center w-full mx-auto items-center">
        <div className="text-white sm:text-left md:text-left text-center sm:w-2/4 w-auto ">
          <div className="text-2xl">
            I'm {""}
            <span className="text-5xl text-yellow-300  font-semibold">
              {" "}
              Mauro Quiroga
            </span>{" "}
            <br />
            <div className="mt-3  ">Front-End Developer</div>
          </div>
          <div className="mt-3">
            <a
              target="_blank"
              href=""
              className=" cursor-pointer bg-transparent hover:bg-yellow-300 text-white font-semibold hover:text-white py-1 px-5 border border-yellow-300 hover:border-transparent rounded"
            >
              Contact Me
            </a>
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
      <div className=" relative w-full mx-auto    m-14 ">
        <div className=" absolute bg-yellow-300 w-0.5 h-32 left-8 sm:left-12 sm:w-10 sm:h-0.5 lg:left-0.5 md:left-12  mt-16 "></div>
        <div className="text-4xl text-white font-semibold mx-0  xl:mx-0 lg:mx-0 md:mx-12  sm:mx-12 mb-4  ">
          About
        </div>
        <div className="text-white  text-sm ml-12  xl:mx-14 lg:mx-14 md:mx-[99px]  sm:mx-24">
          I am an Environmental Engineer transitioning into web development,
          with a passion for building engaging and responsive web applications.
          I have strong experience with HTML, CSS, JavaScript, and specialize in
          creating modern user interfaces using React.js, Material-UI, and
          Tailwind CSS. Currently, I am expanding my skill set to become a Full
          Stack Developer. I'm learning about backend technologies such as
          databases (SQL, NoSQL), API development, and Node.js, aiming to build
          robust and scalable web applications from front to back.
        </div>
      </div>
    </>
  );
};

export default AboutSection;
