import { useState } from 'react';
import { useEffect } from 'react';
import './Slider.css';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
  
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slides-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${slide.url})` }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Left Arrow */}
      <div className="left-arrow" onClick={goToPrevious}>&#10094;</div>
      
      {/* Right Arrow */}
      <div className="right-arrow" onClick={goToNext}>&#10095;</div>
      
      {/* Dots Indicator */}
      <div className="dots-container">
        {slides.map((slide, slideIndex) => (
          <div
            className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;