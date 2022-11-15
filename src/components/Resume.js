import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resume from "../resKevinJones.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber } = this.state;

    return (
      <main className="flex-grow md:m-16 hidden lg:block">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Resume</h1>
        <br />
        <p className="text-2xl md:text-3xl font-light text-center">
          Professional & school experience.
        </p>
        <div className="flex justify-center sm:p-14">
          <Document file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={1000} />
          </Document>
        </div>
      </main>
    );
  }
}

export default Resume;
