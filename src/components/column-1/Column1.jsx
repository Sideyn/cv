import React from "react";
import moi from "../../assets/moi.jpg"
import carte from "../../assets/voyage.png";
import art from "../../assets/origami.png";
import cinema from "../../assets/cinema.png";
import musique from "../../assets/note-de-musique.png";
import console from "../../assets/console.png";
import adresse from "../../assets/adresse.png";
import telephone from "../../assets/telephone.png";
import email from "../../assets/email.png";
import linkedin from "../../assets/linkedin.png";
import Typical from "react-typical";
import './Column1.css'

function Column1() {
  return (
    <div className="column_1">
      <div className="description">
        <img src={moi} alt="Moi" className="moi" />
        <h3 className="job">
          <Typical loop={1} wrapper="b" steps="Développeur web" />
        </h3>
      </div>
      <div className="tools">
        <h2 className="animation_h2">Outils</h2>
        <ul>
          <div className="spec">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="icones"
              className="icons_dev"
            />
            <li>HTML</li>
          </div>
          <div class="h_line2" />
          <div className="spec">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="icones"
              className="icons_dev"
            />
            <li>CSS 3</li>
          </div>
          <div class="h_line2" />
          <div className="spec">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              alt="icones"
              className="icons_dev"
            />
            <li>JAVASCRIPT</li>
          </div>
          <div class="h_line2" />
          <div className="spec">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="icones"
              className="icons_dev"
            />
            <li>REACT</li>
          </div>
          <div class="h_line2" />
          <div className="spec">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="icones"
              className="icons_dev"
            />
            <li>NODE.JS</li>
          </div>
          <div class="h_line2" />
          <div className="spec">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="icones"
              className="icons_dev"
            />
            <li>MYSQL </li>
          </div>
          <div class="h_line2" />
          <div className="spec">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="icones"
              className="icons_dev"
            />
            <li>GIT</li>
          </div>
          <div class="h_line2" />
        </ul>
      </div>
      <div className="hobbies">
        <h2 className="animation_h2">Hobbies</h2>
        <ul>
          <div className="spec">
            <img src={art} alt="Moi" className="icons_hobbies" />
            <li>ART</li>
          </div>
          <div class="h_line2" />
          <div className="spec">
            <img src={cinema} alt="Moi" className="icons_hobbies" />
            <li>CINÉMA</li>
          </div>
          <div class="h_line2" />
          <div className="spec">
            <img src={musique} alt="Moi" className="icons_hobbies" />
            <li>MUSIQUE</li>
          </div>
          <div class="h_line2" />
          <div className="spec">
            <img src={console} alt="Moi" className="icons_hobbies" />
            <li>JEUX VIDÉOS</li>
          </div>
          <div class="h_line2" />
          <div className="spec">
            <img src={carte} alt="Moi" className="icons_hobbies" />
            <li>VOYAGE</li>
          </div>
          <div class="h_line2" />
        </ul>
      </div>
      <div className="contact">
        <h2 className="animation_h2">Contact</h2>
        <ul>
          <div className="spec_contact">
            <img src={telephone} alt="Moi" className="icons_contact" />
            <li>
              Télèphone: <br /> 07.70.94.06.09
            </li>
          </div>
          <div class="h_line2" />
          <div className="spec_contact">
            <img src={email} alt="Moi" className="icons_contact" />
            <li>
              Email: <br /> sidney.croset <br /> @hotmail.com
            </li>
          </div>
          <div class="h_line2" />
          <div className="spec_contact">
            <img src={linkedin} alt="Moi" className="icons_contact" />
            <li>
              {" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sidney-croset-375b18223/"
                rel="noreferrer"
              >
                Linkedin: <br /> Sidney Croset
              </a>{" "}
            </li>
          </div>
          <div class="h_line2" />
          <div className="spec_contact">
            <img src={adresse} alt="Moi" className="icons_contact" />{" "}
            <li>
              Adresse: <br /> 10 rue de Nogent <br /> 28120 <br /> Montigny Le
              Chartif
            </li>
          </div>
        </ul>
        <div class="h_line2" />
      </div>
    </div>
  );
}

export default Column1;
