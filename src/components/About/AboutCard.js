import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous ! Je suis <span className="purple">Haifa Ouni</span>{" "}
            de <span className="purple">Sousse, Tunisie</span>.
            <br />
            Je suis étudiante en informatique à{" "}
            <span className="purple">Isitcom</span>.
            <br />
            <br />
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Passionnée par la résolution de problèmes
            </li>
            <li className="about-activity">
              <ImPointRight /> Expérience en prise de parole en public lors
              d événements étudiants et de présentations de projets
            </li>
            <li className="about-activity">
              <ImPointRight /> Expérience de bénévolat dans l organisation
              d ateliers et de hackathons à ISITCom
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Efforcez-vous de créer des choses qui font la différence !"
          </p>
          <footer className="blockquote-footer">Haifa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
