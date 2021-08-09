import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <footer className=" bg-blue-200 border border-b-0 border-white pt-4 border-l-0 border-r-0  text-white overflow-hidden ">
      <div className="sm:flex justify-evenly mt-3">
        <div className=" sm:w-1/4">
          <hr className="border-1 mt-3 border-white"></hr>
        </div>
        <div className="">
          <h1 className="text-3xl text-center">NICOHLAS LEHMANN</h1>
        </div>
        <div className="sm:w-1/4 mt-3">
          <hr className="border-1 border-white"></hr>
        </div>
      </div>
      <div className="sm:flex justify-evenly pt-10">
        <div>
          <ul className="text-center">
            <a href="/">
              <li> HOME</li>
            </a>
            <a href="/project-principles">
              <li>PROJECT PRINCIPLES</li>
            </a>
            <a href="/gallery">
              <li>GALLERY</li>
            </a>
          </ul>
        </div>
        <div className="flex justify-evenly  sm:py-0 py-10">
            <FontAwesomeIcon  icon={faFacebook}/>
            <FontAwesomeIcon className="mx-4" icon={faInstagram}/>
            <FontAwesomeIcon icon={faTwitter}/>
        </div>
        <div>
          <ul className="text-center">
            <a href="/contact-us">
              <li> CONTACT </li>
            </a>
            <a href="/cv">
              <li>COMPANY CV</li>
            </a>
            <a href="/about">
              <li>ABOUT</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="pt-32 mb-3">
        <p className="text-center"> © 2021 | MAINTAINED BY GLASS HOUSE MEDIA</p>
      </div>
    </footer>
  );
}
