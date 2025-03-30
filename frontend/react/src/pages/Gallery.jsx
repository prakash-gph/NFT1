import React from 'react'
import "./gallery.css"






const Gallery = () => {
  return (
    <div>
      <div className='head'>
        <h1 style={{textAlign:"center"}}>GALLERY</h1>
      </div>


      <div className="uploading-Images">
        <img src='images/sample.jpg' alt='images'></img>
        <img src='images/sample.jpg' alt='images'></img>
        <img src='images/sample.jpg' alt='images'></img>
        <img src='images/sample.jpg' alt='images'></img>
        <img src='images/sample.jpg' alt='images'></img>
        <img src='images/sample.jpg' alt='images'></img>
        <img src='images/sample.jpg' alt='images'></img>
        <img src='images/sample.jpg' alt='images'></img>
        
      </div>
    </div>

  )
}

export default Gallery;
