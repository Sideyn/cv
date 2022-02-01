import React from "react";
import "./Column3.css";

function Column3() {
  return (
    <>
      {/* COMPETENCE FORMAT MOBILE */}
      <div className="column_phone">
        <div className="skills_column_phone">
          <h2>Compétences :</h2>
          <ul>
            <div className="spec">
              <svg>
                <circle id="circle" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Communication</li>
            </div>
            <div className="spec">
              <svg>
                <circle id="circle_1" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Adaptation</li>
            </div>
            <div className="spec">
              <svg>
                <circle id="circle_2" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Gestion du stress</li>
            </div>
            <div className="spec">
              <svg>
                <circle id="circle_3" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Travail en équipe</li>
            </div>
          </ul>
        </div>
        <div className="skills_column_2_phone">
          <ul>
            <div className="spec">
              <svg>
                <circle id="circle_4" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Ponctuel</li>
            </div>
            <div className="spec">
              <svg>
                <circle id="circle_5" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Rigoureux</li>
            </div>
            <div className="spec">
              <svg>
                <circle id="circle_6" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Assidu</li>
            </div>
            <div className="spec">
              <svg>
                <circle id="circle_7" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Organisation</li>
            </div>
          </ul>
        </div>
      </div>
      {/* COMPETENCE FORMAT TABLETTE */}
      <div className="column_tablet">
        <div className="skills_column_tablet">
          <h2>Compétences :</h2>
          <ul>
            <div className="spec">
              <svg>
                <circle id="circle" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Communication</li>
            </div>
            <div className="spec">
              <svg>
                <circle id="circle_1" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Adaptation</li>
            </div>
            <div className="spec">
              <svg>
                <circle id="circle_2" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Gestion du stress</li>
            </div>
            <div className="spec">
              <svg>
                <circle id="circle_3" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Travail en équipe</li>
            </div>
          </ul>
        </div>
        <div className="skills_column_2_tablet">
          <ul>
            <div className="spec">
              <svg>
                <circle id="circle_4" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Ponctuel</li>
            </div>
            <div className="spec">
              <svg>
                <circle id="circle_5" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Rigoureux</li>
            </div>
            <div className="spec">
              <svg>
                <circle id="circle_6" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Assidu</li>
            </div>
            <div className="spec">
              <svg>
                <circle id="circle_7" cx="25px" cy="25px" r="25px"></circle>
              </svg>
              <li>Organisation</li>
            </div>
          </ul>
        </div>
      </div>
      {/* COMPETENCE FORMAT PC */}
      <div className="column_desktop">
        <div className="skills_column_1_desktop">
          <h2 classN>Compétences :</h2>
          <ul>
            <div className="spec">
              <svg className="circle_desktop">
                <circle id="circle" cx="50px" cy="50px" r="50px"></circle>
              </svg>
              <li>Communication</li>
            </div>
            <div className="spec">
              <svg className="circle_desktop">
                <circle id="circle_1" cx="50px" cy="50px" r="50px"></circle>
              </svg>
              <li>Adaptation</li>
            </div>
            <div className="spec">
              <svg className="circle_desktop">
                <circle id="circle_2" cx="50px" cy="50px" r="50px"></circle>
              </svg>
              <li>Gestion du stress</li>
            </div>
            <div className="spec">
              <svg className="circle_desktop">
                <circle id="circle_3" cx="50px" cy="50px" r="50px"></circle>
              </svg>
              <li>Travail en équipe</li>
            </div>
          </ul>
        </div>
        <div className="skills_column_2_desktop">
          <ul>
            <div className="spec">
              <svg className="circle_desktop">
                <circle id="circle_4" cx="50px" cy="50px" r="50px"></circle>
              </svg>
              <li>Ponctuel</li>
            </div>
            <div className="spec">
              <svg className="circle_desktop">
                <circle id="circle_5" cx="50px" cy="50px" r="50px"></circle>
              </svg>
              <li>Rigoureux</li>
            </div>
            <div className="spec">
              <svg className="circle_desktop">
                <circle id="circle_6" cx="50px" cy="50px" r="50px"></circle>
              </svg>
              <li>Assidu</li>
            </div>
            <div className="spec">
              <svg className="circle_desktop">
                <circle id="circle_7" cx="50px" cy="50px" r="50px"></circle>
              </svg>
              <li>Organisation</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Column3;
