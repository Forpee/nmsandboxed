
import { gsap } from "gsap";
import { faBars, faTimes, faCogs } from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faGithub,
  faInstagram,
  faBehance
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
export default function Header() {
  const navRef = useRef(null);
  const closeRef = useRef(null);
  useEffect(() => {
    function animationFx() {
      navigation.reversed() ? navigation.play() : navigation.reverse();
    }
    var navigation = gsap.timeline({ paused: true, reversed: true });
    navigation
      .to("#navigationWrap", 0.5, { opacity: 1, display: "block" })
      .to(".navbar", 0.3, { opacity: 0 }, "-=0.1")
      .to(".close", 0.3, { display: "block", opacity: 1 }, "-=0.1")
      .from(".menu", 0.5, { opacity: 0, y: 30 })
      .from(".social", 0.5, { opacity: 0 });

    closeRef.current.addEventListener("click", animationFx);
    navRef.current.addEventListener("click", animationFx);
  });
  return (
    <div className='border-b border-gray-400 pb-3' >
    <h1 className='text-center text-2xl mt-3 '>Nicohlas Lehmann   <FontAwesomeIcon className='ml-8' icon={faCogs}/></h1>
    
      <div ref={navRef} className="navbar" title="Menu">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div ref={closeRef} className="close">
        <FontAwesomeIcon className="fa" icon={faTimes} />
      </div>

      <div id="navigationWrap" className="z-10">
        <div className="container menu">
          <nav>
            <ul className='ml-10 '>
              <li>
                <a  href="/">Home</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Journal</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="social ml-10">
            <a href="/">
              <FontAwesomeIcon className="fa" icon={faCodepen} />
            </a>
            <a href="/">
              <FontAwesomeIcon className="fa" icon={faGithub} />
            </a>
            <a href="/">
              <FontAwesomeIcon className="fa" icon={faInstagram} />
            </a>
            <a href="/">
              <FontAwesomeIcon className="fa" icon={faBehance} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
