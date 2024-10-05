import React, { useState } from "react";

function Menu() {
  // Array of images
  const images = [
    "../images/tomatos.jpg",
    "../images/pasta.jpg",
    "../images/grilled-fish.jpg",
    "../images/salad.jpg",
    "../images/displayImg.jpg",
  ];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section id="menuSection">
      <div id="left-side">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Discover the flavors of our hand-crafted dishes, made with the
          freshest ingredients!
          <br />
          Explore our diverse menu for an unforgettable dining experience.
        </p>
      </div>
      <div id="right-side">
        <img
          src={images[currentIndex]}
          alt="carousel"
          style={{ width: "500px", height: "300px" }}
        />
        <div>
          <button className="carousel-button" onClick={goToPrev}>
            Previous
          </button>
          <button className="carousel-button" onClick={goToNext}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
