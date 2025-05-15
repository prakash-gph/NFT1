import { useState } from 'react';
import "./PdfView.css"



const PdfView = () => {

  const pdfFile = "./sample.pdf";
  console.log(pdfFile)
  const [showPdf, setShowPdf] = useState(false)
  const viewPdf = () => {
    setShowPdf(!showPdf)
  }
  

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


   
     
    </div>
  )
}



export default PdfView
