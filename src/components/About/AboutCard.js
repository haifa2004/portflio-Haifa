import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Haifa Ouni</span>{" "}
            from <span className="purple">Sousse , Tunisia</span>.
            <br />
            I’m computer science student {" "}
             at{" "}
            <span className="purple">Isitcom</span>.
            
            <br />
            <br />
            
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Passionate about problem-solving 
            </li>
            <li className="about-activity">
              <ImPointRight /> Experience in public speaking at student events and project demonstrations
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteer experience organizing workshops and hackathons at ISITCom
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Haifa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
