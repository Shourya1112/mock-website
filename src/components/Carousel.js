import React, { useState , useEffect } from 'react';
import data from '../data.json';
import previousIcon from "../assets/prev-ri-arrow-up-fill.svg";
import nextIcon from "../assets/next-ri-arrow-up-fill.svg";
import '../styles/carousel.css'; // Import the CSS file for styling

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { carousel } = data;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carousel.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carousel.length - 1 ? 0 : prevIndex + 1));
  };

  // event listener for keyboard arrow keys
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        // Left arrow key
        handlePrevious();
      } else if (event.keyCode === 39) {
        // Right arrow key
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-cards">
        {carousel.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-card ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={item.image} alt={`Slide ${item.id}`} />
            <h3 className='caption'>{item.caption}</h3>
          </div>
        ))}
      </div>
      <div className="carousel-navigation">
        <div onClick={handlePrevious} className='carousel-btn'>
            <img src={previousIcon} className='prev-img' alt='arrow'/>
        </div>
        <h2 className='count'>{carousel[currentIndex].id}</h2>
        <div onClick={handleNext} className='carousel-btn'>
            <img src={nextIcon} className='next-img' alt='arrow'/>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
