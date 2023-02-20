import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faGithub,
  faMedium,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div>
      <p className="social-container">
        <a href="https://www.linkedin.com/in/sarthak-kumar-18515116b/" target="_blank" className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/sarthak503" target="_blank" className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
        <a
          href="https://www.youtube.com/channel/UCVbmYwtXUcNuJgZh8SMpabQ"
          target="_blank" className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
       
        <a
          href="https://www.instagram.com/sarthak_503/"
          target="_blank" className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://twitter.com/Sar_thak_dev" target="_blank" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://medium.com/@sarthak.kumar503" target="_blank" className="medium social">
          <FontAwesomeIcon icon={faMedium} size="2x" />
        </a>
      </p>
    </div>
  );
}
