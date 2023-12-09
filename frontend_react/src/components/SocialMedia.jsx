import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from 'react-icons/ci';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/fgazzi/" target="_blank">
        <CiLinkedin />
      </a>  
    </div>
    <div>
      <a href="https://github.com/Flavinho385/Portfolio" target="_blank">
        <FaGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;