import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const AboutSection = () => {
  return (
    <div className="p-4 m-14 flex justify-center items-center">
      <div className="text-white text-center">
        <div className="text-2xl">
          I'm {""}
          <span className="text-4xl text-yellow-300 uppercase font-semibold">
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
      <div className=" relative bg-[url('/img/image.png')] bg-cover bg-no-repeat w-96 h-80 ml-8">
        <div className="absolute bottom-[100px] right-[20px] w-0.5 h-20 bg-yellow-300"></div>
        <div className="  absolute bottom-[50px] right-[10px] flex flex-col space-y-2 z-0">
          <a
            className="cursor-pointer"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-white" />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          ></a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          ></a>

          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
