import "./Cv.css";
import moi from "../src/image/moi.jpg";
import carte from "../src/image/voyage.png";
import art from "../src/image/origami.png";
import cinema from "../src/image/cinema.png";
import musique from "../src/image/note-de-musique.png";
import console from "../src/image/console.png";
import adresse from "../src/image/adresse.png";
import telephone from "../src/image/telephone.png";
import email from "../src/image/email.png";
import linkedin from "../src/image/linkedin.png";
import Typical from "react-typical";

function Cv() {
  return (
    <div className="Cv">
      <header>
        <h1 className="title">Sidney Croset</h1>
        <div className="opacity" />
      </header>
      <div className="body">
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
                  className="icons_dev"
                />
                <li>HTML</li>
              </div>
              <div class="h_line2" />
              <div className="spec">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  className="icons_dev"
                />
                <li>CSS 3</li>
              </div>
              <div class="h_line2" />
              <div className="spec">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                  className="icons_dev"
                />
                <li>JAVASCRIPT</li>
              </div>
              <div class="h_line2" />
              <div className="spec">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  className="icons_dev"
                />
                <li>REACT</li>
              </div>
              <div class="h_line2" />
              <div className="spec">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  className="icons_dev"
                />
                <li>NODE.JS</li>
              </div>
              <div class="h_line2" />
              <div className="spec">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  className="icons_dev"
                />
                <li>MYSQL</li>
              </div>
              <div class="h_line2" />
              <div className="spec">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
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
                <li>Cinéma</li>
              </div>
              <div class="h_line2" />
              <div className="spec">
                <img src={musique} alt="Moi" className="icons_hobbies" />
                <li>Musique</li>
              </div>
              <div class="h_line2" />
              <div className="spec">
                <img src={console} alt="Moi" className="icons_hobbies" />
                <li>Jeux vidéos</li>
              </div>
              <div class="h_line2" />
              <div className="spec">
                <img src={carte} alt="Moi" className="icons_hobbies" />
                <li>Voyage</li>
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
                  Email: <br /> sidney.croset@hotmail.com
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
                  Adresse: <br /> 10 rue de Nogent 28120, <br /> Montigny Le
                  Chartif
                </li>
              </div>
            </ul>
            <div class="h_line2" />
          </div>
        </div>
        <div className="column_2">
          <h1>Expérience</h1>
          <div class="h_line2_experience" />
          <div className="exp1">
            <h2>Formation développeur web et web mobile</h2>{" "}
            <div className="exp_1">
              <h3>
                <Typical
                  loop={1}
                  wrapper="b"
                  steps="WILD CODE SCHOOL À LA LOUPE | EN COURS..."
                />
              </h3>
              <p>
                -Apprentissage des langages HTML 5, CSS 3, Javascript, React JS,
                Node JS, SQL. <br /> - Conception de site internet. <br /> -
                Travail sur l'expression orale et la communication. <br /> -
                Méthodes agile et scrum.
              </p>
            </div>
          </div>
          <div className="exp2">
            <h2>Opérateur de production</h2>
            <div className="exp_2">
              <h3>
                <Typical
                  loop={1}
                  wrapper="b"
                  steps="PRODEX | 05-2020 / 09/2020"
                />
              </h3>
              <p>
                - Confection des produits en élastomères. <br /> - Maîtrise du
                logiciel MAPEX. <br /> - Expédition des produits finis.
              </p>
            </div>
          </div>
          <div className="exp3">
            <h2>Cuisinier</h2>
            <div className="exp_3">
              <h3>
                <Typical
                  loop={1}
                  wrapper="b"
                  steps="Ehpad de Mézières en Brenne et Hôpital de Châtillon Sur Indre |
                2019 - 2020"
                />
              </h3>
              <p>
                - Élaboration des menus pour toute cible. <br /> - Service pour
                ≈ 200 personnes. <br /> - Gestion des stocks.
              </p>
            </div>
          </div>
          <div className="exp4">
            <h2>Agent de conditionnement</h2>
            <div className="exp_4">
              <h3>
                <Typical
                  loop={1}
                  wrapper="b"
                  steps="PUIG À CHARTRES | 2017 - 2018"
                />
              </h3>
              <p>
                - Alimenter la chaîne de production. <br /> - Contrôle des
                produits sur ligne. <br /> - Dépannage.
              </p>
            </div>
          </div>
          <div className="exp5">
            <h2>Cuisinier</h2>
            <div className="exp_5">
              <h3>
                <Typical
                  loop={1}
                  wrapper="b"
                  steps="LE GOURMET À BROU | 2012 - 2016"
                />
              </h3>
              <p>
                Élaboration des menus. <br /> - Maîtrise de la cuisine française
                traditionnelle et de la gastronomie. <br /> - Présentation des
                plats soigné. <br /> - Maîtrise des normes HACCP.
              </p>
            </div>
          </div>
        </div>
        <div className="column_3">
          <div className="skills_column_1">
            <h2 className="animation_h2">Compétences :</h2>
            <ul>
              <div className="spec">
                <svg>
                  <circle
                    className="circle"
                    cx="25px"
                    cy="25px"
                    r="25px"
                  ></circle>
                </svg>
                <li>Communication</li>
              </div>
              <div className="spec">
                <svg>
                  <circle
                    className="circle_1"
                    cx="25px"
                    cy="25px"
                    r="25px"
                  ></circle>
                </svg>
                <li>Adaptation</li>
              </div>
              <div className="spec">
                <svg>
                  <circle
                    className="circle_2"
                    cx="25px"
                    cy="25px"
                    r="25px"
                  ></circle>
                </svg>
                <li>Gestion du stress</li>
              </div>
              <div className="spec">
                <svg>
                  <circle
                    className="circle_3"
                    cx="25px"
                    cy="25px"
                    r="25px"
                  ></circle>
                </svg>
                <li>Travail en équipe</li>
              </div>
            </ul>
          </div>
          <div className="skills_column_2">
            <ul>
              <div className="spec">
                <svg>
                  <circle
                    className="circle_4"
                    cx="25px"
                    cy="25px"
                    r="25px"
                  ></circle>
                </svg>
                <li>Ponctuel</li>
              </div>
              <div className="spec">
                <svg>
                  <circle
                    className="circle_5"
                    cx="25px"
                    cy="25px"
                    r="25px"
                  ></circle>
                </svg>
                <li>Rigoureux</li>
              </div>
              <div className="spec">
                <svg>
                  <circle
                    className="circle_6"
                    cx="25px"
                    cy="25px"
                    r="25px"
                  ></circle>
                </svg>
                <li>Assidu</li>
              </div>
              <div className="spec">
                <svg>
                  <circle
                    className="circle_7"
                    cx="25px"
                    cy="25px"
                    r="25px"
                  ></circle>
                </svg>
                <li>Organisation</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div className="opacity" />
      </footer>
    </div>
  );
}

export default Cv;
