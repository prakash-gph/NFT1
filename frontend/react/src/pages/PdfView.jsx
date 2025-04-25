import React from 'react'
import { useState } from 'react';
import "./PdfView.css"
import { GoChevronDown } from "react-icons/go";
// import {Document,Page, pdfjs } from 'react-pdf';




// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfView = () => {


  const [showPdf, setShowPdf] = useState(true)


  const viewPdf = () => {
    console.log("hoiii")
    setShowPdf(!showPdf)
  }

  // const [numPages, setNumPages] = useState(null);

  // // PDF file path (place your PDF in public folder or use URL)
  // const pdfFile = '/sample.pdf'; 

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    <div>
      
      <div className="pdf-btn">

        <h1 onClick={viewPdf}>NATION'S FIRST TRUST <li> CLIK TO VIEW </li></h1>

      </div>

      {showPdf && <div className="pdf-container">
        <iframe
          src="/sample.pdf"
          width="55%"
          height="800px"
          title="PDF Viewer"
        />
      </div>}




      {/* <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        // Display all pages
        {Array.from(new Array(numPages), (el, index) => (
          <Page 
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={800}
          />
        ))}
      </Document>
      
      <div style={{ marginTop: '10px' }}>
        {numPages ? `Total pages: ${numPages}` : 'Loading PDF...'}
      </div> */}


    </div>
  )
}

export default PdfView
