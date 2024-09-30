import React, { useState, useEffect } from 'react';
import model1 from './model1.jfif';
import model2 from './model2.jfif';
import model3 from './model3.jfif';
import sweetChildMine from "./Guns N' Roses - Sweet Child O' Mine (Official Music Video).mp3";

const images = [model1, model2, model3];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <main className="content">
      {/* Background carousel */}
      <div className="background-carousel">
        <img
          src={images[currentIndex]}
          alt={`Background ${currentIndex + 1}`}
        />
      </div>

      {/* Regular content */}
      <div className="motorcycle-section">
        <img
          src={images[currentIndex]}
          alt={`Motorcycle ${currentIndex + 1}`}
          className="motorcycle-image"
        />
      </div>

      <div className="text-section">
        <h1>"Join the Ride for a Cause"</h1>
        <p>
          The Gentleman Ride is all about community, charity, and camaraderie. Join us to raise funds and awareness for prostate cancer and men's mental health. Together, we can make a difference.
        </p>
        <button className="add-to-cart-btn">Donate</button>
      </div>

      <audio autoPlay loop>
        <source src={sweetChildMine} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </main>
  );
}

export default Home;
