"use client";

import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Script from "next/script";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import styles from "./Guest.module.css";
import {initRoomForm, initNewsletterForm, updateTime, initGuestHelpers, initDropdownToggle, setDefaultDates, initPopover,  initScrollDetection, initMenuToggle, initExpandContainer, initOfferMobileScroll, initOfferScroll} from "./guestHelpers"; // Import updateTime
import Link from "next/link";
import Slideshow from "./Slideshow";
import FullWidthParagraph from "./FullWidthParagraph";
import Header from './Header';
import ContactInfo from './ContactInfo';
import Newsletter from './Newsletter';
import SocialIcons from './SocialIcons';
import Footer from './Footer';
import MessageBox from './MessageBox';
import CenterBox from './CenterBox';
import './App.css';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);
  const finisRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  useEffect(() => {

    function handleScroll() {
      const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

      if (isMobile) {
        // On mobile, always set top to 0
        if (navRef.current) {
          navRef.current.style.top = "0";
        }
      } else {
        // On desktop, adjust top based on scroll position
        if (window.scrollY > 0 && navRef.current) {
          navRef.current.style.top = "0";
        } else if (window.scrollY === 0 && navRef.current) {
          navRef.current.style.top = "40px";
        }
      }
    }

    // Run on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll);


    flatpickr("#check-in", {
      enableTime: false,
      dateFormat: "Y-m-d",
    });

    flatpickr("#check-out", {
      enableTime: false,
      dateFormat: "Y-m-d",
    });

    initGuestHelpers();
    initNewsletterForm();
    initRoomForm();
    initOfferScroll();
    initExpandContainer();
    initOfferMobileScroll();
    initMenuToggle(styles.active);
    initScrollDetection(navRef, finisRef);
    initPopover();
    setDefaultDates();
    initDropdownToggle(styles.showw);
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const showDetails = () => {
    setIsVisible(true);
    document.body.classList.add("no-scroll");
  };

  const hideDetails = () => {
    setIsVisible(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="refresh" content="320" />
        <link rel="icon" href="images/lilo.png" type="image/png" />
        <title>Prime Guest Lodge</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
        />
      </Head>

      <div className={styles.finis} ref={finisRef}>
        <img
          src="images/logoo.jpg"
          alt="Left Image"
          className={styles.lefttImage}
        />
        <p className={styles.po}> PRIME GUEST LODGE</p>
        <button className={styles.sig} onClick={showDetails}>
          SIGN-IN
        </button>
        <div className={styles.timeDisplay} id="currentTime"></div>
      </div>

      {/* Backdrop */}
      <div className={styles.backdrop} id="backdrop" style={{ display: isVisible ? 'block' : 'none' }}></div>

      {/* Details modal */}
      <div id="details" className={`${styles.details} ${isVisible ? styles.show : ""}`}>
        <p className={styles.clos} onClick={hideDetails}>
          X
        </p>
        <form action="validate.php" method="POST" className={styles.signinForm}>
          <h2>SIGN-IN</h2>
          <label htmlFor="username" className={styles.signinLabel}>
            Username:
          </label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            className={styles.signinInput}
            required
          />
          <br />
          <br />
          <label htmlFor="password" className={styles.signinLabel}>
            Password:
          </label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            className={styles.signinInput}
            required
          />
          <br />
          <br />
          <input type="submit" value="Login" className={styles.signinSubmit} />
        </form>
      </div>


      <div className={styles.navContainer} ref={navRef}>
      <div className={styles.logo}>
        <img src="images/logo.png" alt="Logo" />
      </div>
      <div className={styles.dropdown}>
      <Link href="/room" target="_blank" className={styles.roomsLink}> Accomodation</Link>
        <div className={styles.dropdownContent}>
          <p>Available Rooms</p>
          <Link href="/paris" target="_blank">Paris </Link>
          <Link href="/tokyo" target="_blank">Tokyo </Link>
          <Link href="/york" target="_blank">New York </Link>
          <Link href="/dubai" target="_blank">Dubai </Link>
          <Link href="/london" target="_blank">London </Link>
          <Link href="/sydney" target="_blank">Sydney </Link>
          <Link href="/rome" target="_blank">rome </Link>
          <Link href="/cairo" target="_blank">Cairo </Link>
          <Link href="/berlin" target="_blank">Berlin </Link>
          <Link href="/bangkok" target="_blank">Bangkok </Link>
        </div>
      </div>
      <nav className={styles.navLinks}>
        <span className={styles.separator}>|</span>
        <Link href="/offers" target="_blank">Offers </Link>
        <span className={styles.separator}>|</span>
        <Link href="/dining" target="_blank">Dining </Link>
        <span className={styles.separator}>|</span>
        <Link href="/location" target="_blank">Location </Link>
        <span className={styles.separator}>|</span>
        <Link href="/contact" target="_blank">Contact Us </Link>
      </nav>
      <div className={styles.yu}>
        <div className={styles.squaredShape} id="shaped-square">
          <p>More</p>
        </div>
      </div>
      <div className={styles.shapeContainer} id="shape-container">
        <div className={styles.square}></div>
        <div className={styles.triangle}>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M8.59 9.17L12 12.58l3.41-3.41L17 10.59l-5 5-5-5z'/%3E%3C/svg%3E"
            alt="Triangle Icon"
            className={styles.triangleImage}
          />
        </div>
        <p className={styles.shapeText}>
          <br />Check Availability
        </p>
      </div>
    </div>




{/* Overlay */}
<div id="overlay" className={styles.overlay}></div>

{/* Sliding Block */}
<div className={`${styles.blockk}`} id="slidingg-block">
  <p className={styles.parag} id="close-button">X</p>
  <div className={styles.inblock}>
    <img src="images/logoo.jpg" alt="Logo" />
    <p>PRIME GUEST HOME</p>
  </div>
  <div className={styles.linkk}>
  <Link href="/room" target="_blank">ACCOMMODATION </Link>
  <Link href="/offers" target="_blank">OFFERS </Link>
  <Link href="/dining" target="_blank">DINING </Link>
  <Link href="/location" target="_blank">LOCATION </Link>
  <Link href="/contact" target="_blank">CONTACT US </Link>
  <Link href="/feedback" target="_blank">FEEDBACK </Link>
  <Link href="/heritage" target="_blank">HERITAGE </Link>
  </div>
  <div className={styles.logimage}>
    <img src="images/logoo.jpg" alt="Logo" />
  </div>
</div>

{/* Dropdown Section */}
<div className={styles.dropdownn}>
  <div className={styles.dropdownnContent} id="dropdownn">
    <div className={styles.check}>
      <div className={styles.circle}>
        <div className={styles.checkmark}></div>
      </div>
      <div className={styles.tex}>
        <p>
          <span style={{ color: "#ff4500" }}>Rooms From KSH 1205.00 </span>
          <br />
          Best rate guaranteed
          <br />
          Exclusive offers available
        </p>
      </div>
      <form method="POST" id="roomForm">
        <label htmlFor="check-in">Check-in:</label>
        <input type="text" id="check-in" name="check-in" className={styles.flatpickr} readOnly />

      <label htmlFor="check-out">Check-out:</label>
      <input type="text" id="check-out" name="check-out" className={styles.flatpickr} readOnly />
        <label htmlFor="room-number">Room Number:</label>
        <input type="number" id="room-number" name="room_number" />
        <div className={styles.dropdow} id="roomdropdow">
          <div data-value="1">1</div>
          <div data-value="2">2</div>
          <div data-value="3">3</div>
          <div data-value="4">4</div>
          <div data-value="5">5</div>
          <div data-value="6">6</div>
          <div data-value="7">7</div>
          <div data-value="8">8</div>
          <div data-value="9">9</div>
          <div data-value="10">10</div>
        </div>
        <label htmlFor="adults">Adults:</label>
        <input type="number" id="adults" name="adults" />
        <div className={styles.dropdoww} id="adultsdropdow">
          <div data-value="1">1</div>
          <div data-value="2">2</div>
          <div data-value="3">3</div>
          <div data-value="4">4</div>
          <div data-value="5">5</div>
          <div data-value="6">6</div>
          <div data-value="7">7</div>
          <div data-value="8">8</div>
          <div data-value="9">9</div>
          <div data-value="10">10</div>
        </div>
        <button type="submit">Check Rates</button>
      </form>
      <div className={styles.linkc}>
        <p id="modify-booking">Modify Booking</p>
        <div className={styles.popover} id="popover">
          <p>
            <span style={{ color: "#cb4f1d" }}>Modify/ Cancel Reservations</span>
          </p>
          <p>
            <span style={{ color: "black", fontSize: "14px", fontWeight: "normal" }}>
              Please enter the following to retrieve your reservation
            </span>
          </p>
          <label htmlFor="confirmation_number" className={styles.popoverLabel}>
            Confirmation Number:
          </label>
          <input type="text" id="confirmation_number" name="confirmation_number" />
          <button id="close-popover" className={styles.popp}>Close</button>
          <button id="continue-popover" className={styles.popp}>Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>


<Slideshow />


<div className={styles["menu-container"]}>
  <div id="menu" className={styles.menu}>
    <p>Special Offers</p>
    <img src="images/v.jpg" alt="Special Offer" className={styles["offer-image"]}/>
    <button className={styles["offer-button"]} id="bookNowButton">BOOK NOW</button>
  </div>
  <div id="toggle-box" className={styles["toggle-box"]}>
    <p>X</p>
  </div>
</div>


<FullWidthParagraph />


<section className={styles["lodge-container"]} id="lodgeContainer">
      <button className={styles["expand-button"]} id="expandButton">
        +
      </button>
      <div className={styles["lodge-content"]}>
        <h1 className={styles.titlerr}>PRIME GUEST LODGE</h1>
        <h2 className={styles.subtitle}>5-Star Experience in Maua</h2>
        <p className={styles.description}>
          Nestled in the serene landscapes of Maua, away from the hustle and bustle of city life, Prime Guest Lodge offers an oasis of elegance and tranquility. Our lodge is the perfect blend of business and leisure, art and gastronomy, all delivered with five-star style and impeccable service.
          <br />
          <br />
          <br />
          At Prime Guest Lodge, comfort and exceptional customer service are at the heart of our philosophy. Our rooms are thoughtfully designed to create a welcoming atmosphere, featuring cozy furnishings and modern amenities that ensure a restful stay. Each guest is treated like family, with our attentive staff dedicated to meeting your needs and exceeding your expectations.
          <br />
          <br />
          From the moment you arrive, you’ll experience a warm welcome and personalized service that makes you feel right at home. We take pride in offering affordable room prices without compromising on quality, allowing you to enjoy a luxurious experience within your budget.
          <br />
          <br />
          Whether you're here for business or leisure, Prime Guest Lodge guarantees a comfortable retreat where every guest can unwind and feel valued. Located at the heart of Maua, Prime Guest Lodge invites you to indulge in a sophisticated retreat that redefines comfort. Experience a unique atmosphere that combines modern amenities with warm hospitality, making your stay truly memorable. Whether you're here for a getaway or a business trip, Prime Guest Lodge promises an unforgettable experience amidst the beauty of nature.
        </p>
      </div>
    </section>


    <div className={styles.container}>
      <div className={styles["image-container"]}>
        <img src="images/t.jpg" alt="Background Image" />
        <p>Welcome to Prime Guest Lodge! Your perfect escape awaits.</p>
      </div>
      <p className={styles["text-right"]}>
        <strong style={{ fontSize: "30px", color: "#ff4500" }}>
          ACCOMODATION
        </strong>
        <br />
        <br />
        <span style={{ fontSize: "15px", color: "#000000" }}>
          We warmly invite our esteemed guests to experience the luxurious
          ambiance at <strong>Prime Guest Lodge</strong>. Our facility offers
          elegantly designed Executive Suites, Premium Rooms, and an exclusive
          Lounge. Each space is crafted with meticulous attention to detail,
          ensuring comfort and sophistication for discerning travelers.
          Whether you're here for business or leisure, we promise an exceptional
          stay tailored to meet the highest standards of hospitality.
        </span>
        <br />
        <br />
        <button
          className={styles["book-now-btn"]}
          onClick={() => (window.location.href="/room")}
        >
          Rooms from 1200Ksh       Book Now
        </button>
      </p>
    </div>



    <div className={styles["mobile-container"]}>
      <div className={styles["mobile-image-container"]}>
        <img src="images/t.jpg" alt="Premium Suite" />
      </div>
      <h1 className={styles["mobile-title"]}>ACCOMMODATION</h1>
      <h2 className={styles["mobile-subtitle"]}>Premium Suite</h2>
      <Link href="/room" className={styles["mobile-discover-link"]}>
           DISCOVER
      </Link>
    </div>



    <div className={styles["content-container"]}>
      <div className={styles["text-container"]}>
        <div className={styles.i}>
          <strong style={{ fontSize: "30px", color: "#ff4500" }}>
            DINING
          </strong>
          <br />
          <br />
        </div>
        <span style={{ fontSize: "16px", color: "#000000" }}>
          At Prime Guest Lodge, our culinary team invites you to experience an
          exquisite dining journey. Our restaurant offers a delightful array of
          regional and international specialties, ensuring that every meal is a
          memorable occasion. Enjoy your dining experience on our beautifully
          designed terrace overlooking the serene surroundings or in the
          elegantly appointed dining room. Each dish is prepared with seasonal
          ingredients and paired with the finest wines, all within a welcoming
          atmosphere that reflects the warmth of our hospitality.
          <br />
          Join us for a rich montage of flavors and textures that celebrate the
          art of fine dining.
        </span>
      </div>
      <div className={styles["image-section"]}>
        <img src="images/din.jpg" alt="Dining at Prime Guest Lodge" />
      </div>
    </div>




    <div className={styles["mobile-content-containert"]}>
      <div className={styles["mobile-text-container"]}>
        <div className={styles["mobile-image-sectiont"]}>
          <img src="images/din.jpg" alt="Dining at Prime Guest Lodge" />
        </div>
        <div className={styles["mobile-titlet"]}>
          <strong style={{ fontSize: "30px" }}>DINING</strong>
          <br />
          <br />
        </div>
        <span style={{ fontSize: "16px", color: "#000000" }}>
          At Prime Guest Lodge, experience an exquisite dining journey with
          regional and international specialties. Enjoy meals in a serene
          terrace or elegant dining room, prepared with seasonal ingredients and
          paired with fine wines, reflecting our warm hospitality.
        </span>
      </div>
      <div className={styles["mobile-discover-link-containert"]}>
      <Link href="/dining" className={styles["mobile-discover-link"]}>
           DISCOVER
      </Link>
      </div>
    </div>



    <div className={styles["offer-mobile"]}>
      <div className={styles["info-offer"]}>
        <h1>PRIME GUEST OFFERS</h1>
        <span className={styles["scroll-arrowsr"]} id="leftg-arrow">
          &#8592;
        </span>
        <h2>OUR BEST PACKAGE</h2>
        <span className={styles["scroll-arrowsr"]} id="rightg-arrow">
          &#8594;
        </span>
      </div>

      <div className={styles["info-show"]}>
        <div className={styles["scroll-containers"]} id="scroll-containeru">
          <div className={styles["scroll-itemr"]}>
            <img src="images/be.jpg" alt="Offer Image 1" />
            <p>
                  <Link href="/offers">BOOK EARLY, SAVE BIG! EARLY BIRD DISCOUNT</Link>
            </p>
            <button onClick={() => window.location.href = "/enquiry"}>
              BOOK NOW
            </button>
          </div>
          <div className={styles["scroll-itemr"]}>
            <img src="images/c.jpg" alt="Offer Image 1" />
            <p>
            <Link href="/dining">
                SAVOR OUR FRESHLY PREPARED DINNER SPECIALS.
            </Link>
            </p>
            <button onClick={() => window.location.href = "/enquiry"}>
              BOOK NOW
            </button>
          </div>
          <div className={styles["scroll-itemr"]}>
            <img src="images/su.jpg" alt="Offer Image 1" />
            <p>
             <Link href="/dining">
                STAY LONGER, PAY LESS! LONG STAY DISCOUNT.
              </Link>
            </p>
            <button onClick={() => window.location.href = "/enquiry"}>
              BOOK NOW
            </button>
          </div>
          <div className={styles["scroll-itemr"]}>
            <img src="images/lm.webp" alt="Offer Image 1" />
            <p>
              <Link href="/offers">
                LAST MINUTE DEAL! LAST MINUTE DISCOUNT.
              </Link>
            </p>
            <button onClick={() => window.location.href = "/enquiry"}>
              BOOK NOW
            </button>
          </div>
          <div className={styles["scroll-itemr"]}>
            <img src="images/ro.jpg" alt="Offer Image 1" />
            <p>
              <Link href="/dining">
                EXPERIENCE UNMATCHED HOSPITALITY IN EVERY STAY.
              </Link>
            </p>
            <button onClick={() => window.location.href = "/enquiry"}>
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>



    <div className={styles.offers}>
      <div className={styles["arroww-container"]}>
        <button className={`${styles.arroww} ${styles.left}`} id="prevBtn">
          &#10094;
        </button>
        <h2 className={styles.title}>PRIME GUEST OFFERS</h2>
        <button className={`${styles.arroww} ${styles.right}`} id="nextBtn">
          &#10095;
        </button>
      </div>
      <h5 className={styles.titler}>Our best package</h5>
      <div className={styles["scroll-container"]} id="scrollContainer">
        <div className={styles["scroll-item1"]}>
          <img src="images/be.jpg" alt="Offer Image 1" />
          <p className={styles.desc}>
             <Link href="/offers">BOOK EARLY, SAVE BIG! EARLY BIRD DISCOUNT</Link>
          </p>
          <button
            className={styles["offf-button"]}
            onClick={() => (window.location.href = "/enquiry")}
          >
            BOOK NOW
          </button>
        </div>
        <div className={styles["scroll-item2"]}>
          <img src="images/c.jpg" alt="Offer Image 2" />
          <p className={styles.d}>
               <Link href="/dining">
                      SAVOR OUR FRESHLY PREPARED DINNER SPECIALS.
                </Link>
          </p>
          <button
            className={styles["offf-buttonn"]}
            onClick={() => (window.location.href = "/enquiry")}
          >
            BOOK NOW
          </button>
        </div>
        <div className={styles["scroll-item3"]}>
          <img src="images/su.jpg" alt="Offer Image 3" />
          <p className={styles.de}>
              <Link href="/offers">
                    STAY LONGER, PAY LESS! LONG STAY DISCOUNT.
              </Link>
          </p>
          <button
            className={styles["offff-button"]}
            onClick={() => (window.location.href = "/enquiry")}
          >
            BOOK NOW
          </button>
        </div>
        <div className={styles["scroll-item4"]}>
          <img src="images/lm.webp" alt="Offer Image 4" />
          <p className={styles.des}>
          <Link href="/offers">
              LAST MINUTE DEAL! LAST MINUTE DISCOUNT.
            </Link>
          </p>
          <button
            className={styles["offd-button"]}
            onClick={() => (window.location.href = "/enquiry")}
          >
            BOOK NOW
          </button>
        </div>
        <div className={styles["scroll-item5"]}>
          <img src="images/ro.jpg" alt="Offer Image 5" />
          <p className={styles.descr}>
            <Link href="/dining">
              EXPERIENCE UNMATCHED HOSPITALITY IN EVERY STAY.
            </Link>
          </p>
          <button
            className={styles["offs-button"]}
            onClick={() => (window.location.href = "/enquiry")}
          >
            BOOK NOW
          </button>
        </div>
      </div>
      <div className={styles.triangled} onClick={scrollToTop}>
        <div className={styles.arrowd}></div>
      </div>
    </div>




    <div>
      <div className="acc">
        <Header />
        <div className="info">
          <ContactInfo />
          <div className="section section2">
          <h3> <Link href="/herit" className="about-link"> About Us </Link> </h3>
          <p> <Link href="/contact" className="about-lin"> Contact Us </Link> </p>
          <p> <Link href="/location" className="about-lin"> Location</Link> </p>
          </div>
          <div className="section section3">
          <h3> <Link href="/contact" className="about-link">Email Details</Link></h3>
            <p className="u"> <Link href="/contact" className="about-lin">Kaithia@gmail.com</Link></p>
            <SocialIcons />
            <Newsletter />
          </div>
        </div>
      </div>

      <div className="foop">
        <div className="ffsud">
          <h3><Link href="/contact">Contact Details</Link></h3>
          <p>0799963300</p>
          <p>0708364240</p>
          <p>Prime Guest Lodge</p>
          <p>Maua basin, Meru</p>
        </div>
        <div className="ddsud">
          <h3><Link href="/contact">Email Details</Link></h3>
          <p><Link href="/contact">Kaithia@gmail.com</Link></p>
          <SocialIcons />
        </div>
        <div className="dams">
          <p style={{ fontWeight: 'bold' }}>SUBSCRIBE TO OUR NEWSLETTER</p>
          <form id="newsletterForms">
            <label htmlFor="email" style={{ color: '#000000' }}>Email Address:</label>
            <input type="email" id="emails" name="email" required />
            <button type="submit" className="sug">
              &#8594;
            </button>
          </form>
        </div>
      </div>

      <CenterBox />
      <MessageBox />
      <Footer />
    </div>


      <Script src="https://cdn.jsdelivr.net/npm/flatpickr" strategy="beforeInteractive"/>

      <Script id="flatpickr-init" strategy="afterInteractive">{`
        flatpickr('.flatpickr', {
          dateFormat: "Y-m-d"
        });
      `}
      </Script>
      
    </>
  );
}
