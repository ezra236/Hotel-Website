"use client";

import { useEffect, useState } from "react";
import styles from "./slide.module.css";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName(styles.slide);
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
      }
      setSlideIndex((prevIndex) => {
        const newIndex = prevIndex + 1 > slides.length ? 1 : prevIndex + 1;
        slides[newIndex - 1].style.display = "block"; // Show the current slide

        // Check if the current slide has the #maua element and start typing effect
        const mauaElement = slides[newIndex - 1].querySelector(`.${styles.maua}`);
        if (mauaElement) {
          startTypingEffect(mauaElement);
        }

        return newIndex;
      });
    };

    // Immediately display the first slide
    showSlides();

    const interval = setInterval(showSlides, 7000); // Change slide every 7 seconds
    return () => clearInterval(interval);
  }, []);

  const startTypingEffect = (mauaElement) => {
    const text = mauaElement.textContent; // Get the text from the element
    mauaElement.innerHTML = ""; // Clear the text
    mauaElement.style.visibility = "visible"; // Ensure the element is visible
    typeWriter(mauaElement, text); // Start typing
  };

  const typeWriter = (mauaElement, text) => {
    let currentLetterIndex = 0; // Reset index for each typing effect
    const type = () => {
      if (currentLetterIndex < text.length) {
        mauaElement.innerHTML += text.charAt(currentLetterIndex);
        currentLetterIndex++;
        setTimeout(type, 250); // Delay between letters
      }
    };
    type();
  };

  return (
    <div className={styles.slideshowContainer}>
      <div className={`${styles.slide} ${styles.fade}`}>
        <img src="images/g.jpg" alt="Image 1" />
        <p>Welcome to Prime Guest Lodge!</p>
        <p className={styles.maua}>Maua</p>
      </div>
      <div className={`${styles.slide} ${styles.fade}`}>
        <img src="images/r.jpg" alt="Image 2" />
        <p>Welcome to Prime Guest Lodge!</p>
        <p className={styles.maua}>Deluxe Room</p>
      </div>
      <div className={`${styles.slide} ${styles.fade}`}>
        <img src="images/t.jpg" alt="Image 3" />
        <p>Welcome to Prime Guest Lodge!</p>
        <p className={styles.maua}>Quality Service</p>
      </div>
      <div className={`${styles.slide} ${styles.fade}`}>
        <img src="images/p.jpg" alt="Image 4" />
        <p>Welcome to Prime Guest Lodge!</p>
        <p className={styles.maua}>Parking</p>
      </div>
    </div>
  );
};

export default Slideshow;
