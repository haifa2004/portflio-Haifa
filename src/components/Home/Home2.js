import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="d-flex justify-content-center text-center">
          <Col md={8} className="home-about-description mx-auto">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis une étudiante en Informatique motivée et une future
              Développeuse Full-Stack, intéressée par IA et le Machine Learning.
              <br />
              <br />
              Je maîtrise
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Node.js, React.js, SpringBoot, Angular et Java{" "}
                </b>
              </i>
              — et j aime travailler aussi bien sur la partie backend que frontend.
              <br />
              <br />
              Mes principaux centres d intérêt incluent le développement
              <i>
                <b className="purple"> d applications web </b>
              </i>
              ainsi que l exploration de nouvelles façons de connecter
              les systèmes on-chain et off-chain.
              <br />
              <br />
              Dès que possible, j adore créer des projets avec
              <b className="purple"> Node.js </b> et des frameworks modernes tels que{" "}
              <i>
                <b className="purple">React.js</b> et{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
