import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/images.jpeg";
import editor from "../../Assets/Projects/Screenshot 2025-11-11 153413.png";
import chatify from "../../Assets/Projects/Screenshot 2025-11-11 150856.png";

import bitsOfCode from "../../Assets/Projects/Screenshot 2025-11-11 152044.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projects <strong className="purple"> </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Admin Dashboard"
              description="Le tableau de bord administrateur est une interface web réactive et interactive entièrement construite avec React (frontend uniquement)."
              ghLink="https://github.com/haifa2004/Admin-Dashboard-"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="chatbot"
              description="Le chatbot utilise API Gemini pour traiter et comprendre intelligemment les messages des utilisateurs.
Il fournit des réponses rapides, naturelles et contextuelles pour créer une expérience de conversation fluide"
              ghLink="https://github.com/haifa2004/ChatBot"
              demoLink="https://chat-bot-lovat-nu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-commerce"
              description="Cette application E-Commerce est construite avec le stack MERN (MongoDB, Express.js, React, Node.js).
Elle offre une expérience complète de shopping en ligne où les utilisateurs peuvent parcourir les produits, ajouter des articles à leur panier et passer des commandes en toute sécurité.
Le tableau de bord admin permet une gestion facile des produits, catégories et utilisateurs."
              ghLink="https://github.com/haifa2004/E-commerce"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="faceRecognition"
              description="Projet de reconnaissance faciale en Python qui détecte et identifie les visages en utilisant des techniques de vision par ordinateur.
Conçu pour lapprentissage et l expérimentation avec l IA et le traitement d images."
              ghLink="https://github.com/haifa2004/faceRecogniton"
             
            />
          </Col>
          
         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
