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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Admin Dashboard"
              description="The Admin Dashboard is a responsive and interactive web interface built entirely using React (frontend-only)"
              ghLink="https://github.com/haifa2004/Admin-Dashboard-"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="chatbot"
              description="chatbot uses the Gemini API to process and understand user messages intelligently.
It provides fast, natural, and context-aware responses to create a smooth conversational experience."
              ghLink="https://github.com/haifa2004/ChatBot"
              demoLink="https://chat-bot-lovat-nu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-commerce"
              description="This E-Commerce application is built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides a complete online shopping experience where users can browse products, add items to their cart, and securely place orders. The admin dashboard allows easy product, category, and user management."
              ghLink="https://github.com/haifa2004/E-commerce"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="faceRecognition"
              description="A Python-based Face Recognition project that detects and identifies faces using computer vision techniques. Built for learning and experimentation with AI and image processing."
              ghLink="https://github.com/haifa2004/faceRecogniton"
             
            />
          </Col>
          
         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
