import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../resumeKevinJones.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class App extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber } = this.state;

    return (
      <div className="flex justify-center">
        <Document file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={1000} />
        </Document>
      </div>
    );
  }
}

export default App;
