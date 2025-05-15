import { useState } from "react"
import "./gallery.css"
import { Lightbox } from "./Galleryanima";





const Gallery = () => {


  const images = [
    { id: 1, url: 'images/Nft-Images/1.jpg', title: "Nation's First Trust" },
    { id: 2, url: 'images/Nft-Images/2.jpg', title: "Nation's First Trust" },
    { id: 3, url: 'images/Nft-Images/3.jpg', title: "Nation's First Trust" },
    { id: 4, url: 'images/Nft-Images/4.jpg', title: "Nation's First Trust" },
    { id: 5, url: 'images/Nft-Images/5.jpg', title: "Nation's First Trust" },
    { id: 6, url: 'images/Nft-Images/6.jpg', title: "Nation's First Trust" },
    { id: 7, url: 'images/Nft-Images/7.jpg', title: "Nation's First Trust" },
    { id: 8, url: 'images/Nft-Images/8.jpg', title: "Nation's First Trust" },
    { id: 9, url: 'images/Nft-Images/9.jpg', title: "Nation's First Trust" },
    { id: 10, url: 'images/Nft-Images/10.jpg', title: "Nation's First Trust" },
    { id: 11, url: 'images/Nft-Images/11.jpg', title: "Nation's First Trust" },
    { id: 12, url: 'images/Nft-Images/12.jpg', title: "Nation's First Trust" },
    { id: 13, url: 'images/Nft-Images/13.jpg', title: "Nation's First Trust" },
    { id: 14, url: 'images/Nft-Images/14.jpg', title: "Nation's First Trust" },

    // Add more images
  ];


  const [selectedImg, setSelectedImg] = useState(null);



  return (
    <div>
      <div className='g-head'>
        <h1 style={{ textAlign: "center" }}>GALLERY</h1>
        
      </div>
      
      <div className="gallery-container">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => setSelectedImg(image)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="gallery-image"
            />
            <div className="image-overlay">
              <p className="image-title">{image.title}</p>
            </div>
          </div>
        ))}
        {selectedImg && (
          <Lightbox image={selectedImg} onClose={() => setSelectedImg(null)} />
        )}
      </div>






    </div>

  )
}

export default Gallery;
