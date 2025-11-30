import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Haifa_Ouni_CV_fr  (2).pdf";
import cvVideo from "../../Assets/cv-vedio.mp4";  // 👈 ta vidéo MP4 ici
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Button download */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

       <Row className="resume">
  <Document file={pdf} className="d-flex justify-content-center">
    <Page pageNumber={1} scale={0.9} />   {/* 👈 PDF plus petit */}
  </Document>
</Row>
<h1>cv vedio</h1>
{/* Video CV Section */}
<Row style={{ justifyContent: "center", marginTop: "30px" }}>
  <video
    style={{
      width: "100%",
      maxWidth: "250px",   // 👈 vidéo très petite
      borderRadius: "10px"
    }}
    controls
  >
    <source src={cvVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</Row>

        {/* Bottom download button */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
