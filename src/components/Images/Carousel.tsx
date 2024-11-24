import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import "./Carousel.css";

function Carousel({ slides }: { slides: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = 5000; // 3000ms or 3 seconds

  const updateIndex = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
  }, []);

  const next = () => updateIndex((currentIndex + 1) % slides.length);
  const prev = () => updateIndex((currentIndex - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, [currentIndex, next]);

  const leftButton = () =>{
    return (
        <button onClick={prev} className="nav-button left">
        <ChevronLeft size={40} />
      </button>
    )
  }

  const rightButton = () => {
    return (<button onClick={next} className="nav-button right">
        <ChevronRight size={40} />
      </button>)
  }

  const slidesContainer = () => {
    return (
      <div
        className="slides-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="carousel-container">
      {slidesContainer()}
      {leftButton()}
      {rightButton()}
      <div className="dot-container">
        {slides.map((_, idx) => (
          <span key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
