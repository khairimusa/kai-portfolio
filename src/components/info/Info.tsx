import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Info.css';

function Info() {
  return (
<div className="container">
    <div>
        <a href="https://www.linkedin.com/in/khairimusa/" target="_blank"><FaLinkedin size={70}/></a>
    </div>  
    <div>
        <a href="https://github.com/khairimusa" target="_blank"><FaGithub size={70}/></a>
    </div>
</div>
  );
}

export default Info;