import React from "react";
import Typical from "react-typical";
import "./Column2.css";

function Column2() {
  return (
    <div className="column_2">
      <h1 className="experience">Expérience</h1>
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
            Node JS, SQL. <br /> - Conception de site internet. <br /> - Travail
            sur l'expression orale et la communication. <br /> - Méthodes agile
            et scrum.
          </p>
        </div>
      </div>
      <div className="exp2">
        <h2>Opérateur de production</h2>
        <div className="exp_2">
          <h3>
            <Typical loop={1} wrapper="b" steps="PRODEX | 05-2021 / 09/2021" />
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
            - Élaboration des menus pour toute cible. <br /> - Service pour ≈
            200 personnes. <br /> - Gestion des stocks.
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
            - Alimenter la chaîne de production. <br /> - Contrôle des produits
            sur ligne. <br /> - Dépannage.
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
            traditionnelle et de la gastronomie. <br /> - Présentation des plats
            soigné. <br /> - Maîtrise des normes HACCP.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Column2;
