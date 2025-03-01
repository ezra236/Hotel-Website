import React, { useEffect } from "react";
import styles from "./full.module.css";

export default function FullWidthParagraph() {
  // Toggle functionality for expanding/collapsing the text container
  useEffect(() => {
    const content = document.getElementById("content");
    if (!content) return;
    const container = content.parentElement;
    if (container) {
      container.style.maxHeight = "265px";
    }

    const toggleText = document.getElementById("toggleText");
    if (!toggleText) return;

    const handleToggle = () => {
      if (container.style.maxHeight === "265px" || container.style.maxHeight === "") {
        container.style.maxHeight = "1000px"; // Expand the container
        toggleText.textContent = "Less"; // Update text
        toggleText.style.top = "785px"; // Adjust position when expanded
      } else {
        container.style.maxHeight = "265px"; // Collapse the container
        toggleText.textContent = "More"; // Update text
        toggleText.style.top = "230px"; // Adjust position when collapsed
      }
    };

    toggleText.addEventListener("click", handleToggle);
    // Cleanup event listener on unmount
    return () => {
      toggleText.removeEventListener("click", handleToggle);
    };
  }, []);

  // Scrolling functionality for the customer reviews
  useEffect(() => {
    // Correct id name: "scrollyContainer"
    const scrollyContainer = document.getElementById("scrollyContainer");
    // Use the CSS module's generated class name for the items
    const items = document.querySelectorAll("." + styles["scrolly-item"]);

    let currentIndex = 0;

    const handleNext = () => {
      if (currentIndex < items.length - 1) {
        currentIndex++;
        scrollToItem();
      }
    };

    const handlePrev = () => {
      if (currentIndex > 0) {
        currentIndex--;
        scrollToItem();
      }
    };

    function scrollToItem() {
      const itemWidth = items[0].offsetWidth; // Get width of each item
      scrollyContainer.scrollLeft = currentIndex * itemWidth; // Scroll to next item
    }

    const nextBtn = document.getElementById("nextBtny");
    const prevBtn = document.getElementById("prevBtny");

    if (nextBtn && prevBtn && scrollyContainer && items.length > 0) {
      nextBtn.addEventListener("click", handleNext);
      prevBtn.addEventListener("click", handlePrev);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (nextBtn) nextBtn.removeEventListener("click", handleNext);
      if (prevBtn) prevBtn.removeEventListener("click", handlePrev);
    };
  }, []);

  return (
    <div className={styles["full-width-paragraph"]}>
      <div className={styles.content} id="content">
        <strong style={{ fontSize: "30px", color: "#ffffff", fontWeight: "bolder" }}>
          PRIME GUEST LODGE
        </strong>
        <br />
        <br />
        <span style={{ fontSize: "15px" }}>
          <strong style={{ fontSize: "25px", color: "#ca3900" }}>
            5-Star Experience in Maua
          </strong>
          <br />
          <br />
          <p>
            Nestled in the serene landscapes of Maua, away from the hustle and bustle of city life, Prime Guest Lodge offers an oasis of elegance and tranquility. Our lodge is the perfect blend of business and leisure, art and gastronomy, all delivered with five-star style and impeccable service.
            <br />
            At Prime Guest Lodge, comfort and exceptional customer service are at the heart of our philosophy. Our rooms are thoughtfully designed to create a welcoming atmosphere, featuring cozy furnishings and modern amenities that ensure a restful stay. Each guest is treated like family, with our attentive staff dedicated to meeting your needs and exceeding your expectations.
            <br />
            From the moment you arrive, you’ll experience a warm welcome and personalized service that makes you feel right at home. We take pride in offering affordable room prices without compromising
            <br />
            on quality, allowing you to enjoy a luxurious experience within your budget.
            <br />
            <br />
            Whether you're here for business or leisure, Prime Guest Lodge guarantees a comfortable retreat where every guest can unwind and feel valued.
            <br />
            Located at the heart of Maua, Prime Guest Lodge invites you to indulge in a sophisticated retreat that redefines comfort. Experience a unique atmosphere that combines modern amenities with warm hospitality, making your stay truly memorable. Whether you're here for a getaway or a business trip, Prime Guest Lodge promises an unforgettable experience amidst the beauty of nature.
          </p>
          <span id="toggleText" className={styles.toggle_}>
            More
          </span>
        </span>
      </div>

      <div className={styles.clients}>
        <div className={styles.titley}>What our customers say about us!</div>
        <div className={styles["arrowy-container"]}>
          <button className={`${styles.arrowy} ${styles.left}`} id="prevBtny">
            &#10094;
          </button>
          <div className={styles["scrolly-container"]} id="scrollyContainer">
            <div className={styles["scrolly-item"]}>
              <div className={styles.im}>
                <img src="images/pe.jpg" alt="Customer review" />
              </div>
              <p>
                Absolutely wonderful experience! The rooms are beautifully decorated, spacious, and immaculately clean.
                <br />
                The staff's attention to detail and warm hospitality made our stay unforgettable.
                <br />
                Every morning, we woke to the serene surroundings that added a sense of tranquility
                <br />
                to our getaway. The quality of furnishings and delightful amenities made it feel
                <br />
                like a true five-star experience. We felt pampered, from room service
                <br />
                to thoughtful touches that created a comfortable, restful atmosphere.
                <br />
                I highly recommend staying here for anyone seeking a memorable
                <br />
                experience filled with warmth and luxury.
              </p>
            </div>
            <div className={styles["scrolly-item"]}>
              <div className={styles.im}>
                <img src="images/re.webp" alt="Customer review" />
              </div>
              <p>
                The service here is top-notch! From the cozy, well-appointed rooms to the friendly staff,
                <br />
                everything exceeded our expectations. A fantastic place to unwind and relax.
                <br />
                The attention to detail in decor and the calm surroundings
                <br />
                truly create a peaceful retreat. Each room provides an escape
                <br />
                from the busyness of everyday life, with comfortable beds
                <br />
                and spacious areas to relax. The on-site amenities are incredible,
                <br />
                and every interaction with the staff felt personalized.
                <br />
                It’s the ideal spot for a weekend recharge or longer stay.
              </p>
            </div>
            <div className={styles["scrolly-item"]}>
              <div className={styles.im}>
                <img src="images/hh.webp" alt="Customer review" />
              </div>
              <p>
                A true gem! The rooms are luxurious yet comfortable, with every amenity you could need.
                <br />
                The staff is incredibly attentive, making every guest feel special.
                <br />
                The peaceful ambiance paired with modern touches creates an environment
                <br />
                that’s both relaxing and refined. Each evening was perfect, from
                <br />
                the exceptional room service to the cozy lounge areas. The location
                <br />
                offers the best of both tranquility and accessibility. I can’t
                <br />
                say enough about the fantastic service and attention to detail.
                <br />
                A must-visit for those who value comfort and elegance.
              </p>
            </div>
            <div className={styles["scrolly-item"]}>
              <div className={styles.im}>
                <img src="images/hh.webp" alt="Customer review" />
              </div>
              <p>
                Perfect getaway! The rooms are stylish and pristine, offering a peaceful retreat.
                <br />
                The team went above and beyond to ensure our comfort. Highly recommended!
                <br />
                Each morning started with a scenic view and delicious breakfast.
                <br />
                We loved the peacefulness of the surroundings and the thoughtful
                <br />
                details in the room that made our stay cozy and delightful.
                <br />
                With spacious layouts and well-chosen decor, this lodge offers
                <br />
                both elegance and comfort. We felt refreshed, energized, and
                <br />
                would definitely return. A lovely escape from the everyday.
              </p>
            </div>
          </div>
          <button className={`${styles.arrowy} ${styles.right}`} id="nextBtny">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}


