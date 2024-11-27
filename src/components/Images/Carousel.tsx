import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import "./Carousel.css";

function Carousel({ slides }: { slides: { image: string; description: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = 5000;

  const updateIndex = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
  }, []);

  const next = () => updateIndex((currentIndex + 1) % slides.length);
  const prev = () => updateIndex((currentIndex - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, [currentIndex, next]);

  const slidesContainer = () => (
    <div
      className="slides-container"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          <img src={slide.image} alt={`Slide ${index}`} />
          <p className="slide-description">{slide.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="carousel-container">
      {slidesContainer()}
      {/* Navigation buttons */}
      <button onClick={prev} className="nav-button left">
        <ChevronLeft size={40} />
      </button>
      <button onClick={next} className="nav-button right">
        <ChevronRight size={40} />
      </button>
      {/* Dots */}
      <div className="dot-container">
        {slides.map((_, idx) => (
          <span key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
