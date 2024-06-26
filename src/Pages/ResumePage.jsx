import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import resume from "../assets/pdf/resume.pdf";
import { pdfjs, Document, Page } from "react-pdf";
import Button from "react-bootstrap/Button";

export default function ResumePage() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  const maxWidth = 800;
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [showPDF, setShowPDF] = useState(true);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  const handleDownload = () => {
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = URL.createObjectURL(blob);
        open(fileURL, "_blank"); //alternative to the a link opens embedded adobe viewer
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "PhyllisAnnLataille-resume.pdf";
        alink.click();
      });
    });
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const handleClick = () => {
    setShowPDF(!showPDF);
  };

  return (
    <>
      <div className="pb-2 mx-5">
        <h3 className="pb-2 text-3xl">Resume</h3>
        <h6>
          Toggle here to view my resume as an{" "}
          <a href="#image" onClick={handleClick} className="underline">
            <Link variant="text-decoration-none text-success">image</Link>
          </a>
          .
        </h6>
        <h6>
          Click here to download my resume as a{" "}
          <a href="#download" onClick={handleDownload} className="underline">
            <Link variant="success">PDF</Link>
          </a>
          .
        </h6>
      </div>
      {showPDF ? (
        <div className="receptacle mx-5">
          <div className="">
            <ul className="mx-5">
              <p className="front-end  fw-bold">FRONT-END PROFICIENCIES</p>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>ReactJS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <ul className="mx-5">
              <p className="back-end fw-bold">BACK-END PROFICIENCIES</p>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL & Sequelize</li>
              <li>MongoDB & Mongoose</li>
              <li>REST APIs</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: maxWidth }}>
            <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                width={
                  containerWidth
                    ? Math.min(containerWidth, maxWidth) - 30
                    : maxWidth
                }
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
