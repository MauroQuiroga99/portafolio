import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <div>
      <div className="relative w-full mx-auto m-10">
        <div className="absolute bg-yellow-300 w-10 h-0.5 bottom-4"></div>
        <div className="text-4xl text-white font-semibold mx-12">
          Contact Me
        </div>
        <div className="absolute bg-yellow-300 h-0.5 bottom-4 left-64 right-0"></div>
        <div className="text-white text-sm ml-12 xl:mx-14 lg:mx-14 md:mx-[99px] sm:mx-24"></div>
      </div>

      <div className="text-white  flex justify-center items-center flex-wrap gap-4">
        <a
          target="_blank"
          className="cursor-pointer text-white bg-yellow-300 bg-opacity-50 hover:text-white rounded px-4 py-1 "
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
          maauro1999@gmail.com
        </a>
        <a
          target="_blank"
          className="cursor-pointer text-white bg-yellow-300 bg-opacity-50 hover:text-white rounded px-4 py-1"
        >
          <FontAwesomeIcon icon={faPhone} className="mr-4" />
          (+57) 3235884424
        </a>
      </div>
      <div className="text-white  flex justify-center items-center flex-wrap mt-4">
        <a
          target="_blank"
          className="cursor-pointer text-white bg-yellow-300 bg-opacity-50 hover:text-white rounded px-4 py-1"
        >
          <FontAwesomeIcon icon={faLocationDot} className="mr-4" />
          Barranquilla, Colombia.
        </a>
      </div>

      <div className="relative w-full mx-auto m-10  ">
        <div className="absolute bg-yellow-300 h-0.5 bottom-3 left-0 right-36"></div>
        <div className="text-4xl text-white font-semibold mx-11 ">
          <div className=" justify-end items-center flex flex-row gap-2 m-1 ">
            <a
              className="cursor-pointer"
              href="https://www.facebook.com/yato.sama.9022/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white w-4 h-4"
              />
            </a>

            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-white w-4 h-4"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/mauro-alexander-quiroga-borja-751100190/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white w-4 h-4"
              />
            </a>

            <a
              href="https://github.com/MauroQuiroga99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-white w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="absolute bg-yellow-300 h-0.5 bottom-3 w-10 right-0"></div>
      </div>
      <div className="relative w-full mx-auto m-10">
        <div className="text-2xl text-yellow-300 text-opacity-50 text-center  mx-12">
          "Thanks for Scrolling"
        </div>
      </div>
    </div>
  );
};

export default ContactSection;