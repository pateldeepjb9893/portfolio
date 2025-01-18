import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import { Document, Page, pdfjs } from "react-pdf";

// Setting PDF.js worker to handle PDF rendering
pdfjs.GlobalWorkerOptions.workerSrc = `//cdn.jsdelivr.net/npm/pdfjs-dist@latest/build/pdf.worker.min.js`;

export const Resume = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Resume </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 text-center">
          <p>Download my resume to learn more about my professional journey and skills!</p>
          <a
            href="dataForDeep/Deep_Resume.pdf"
            download="Deep_Resume.pdf"
            className="btn btn-primary mb-4"
          >
            Download Resume
          </a>
          <div className="resume-box">
            <Document
              file="dataForDeep/Deep_Resume.pdf"
              loading="Loading PDF..."
              onLoadError={(error) => console.error("Error loading PDF:", error)}
            >
              <Page pageNumber={1} width={1000} />
            </Document>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
