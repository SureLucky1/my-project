import "./Home-V3.scss";
import React, { useState, useEffect, useRef } from "react";
import AdaptiveHeight from "./VideoSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal/Modal2";
import Radium, { StyleRoot } from "radium";
function PreSet() {
  const colorList = [
    "black",
    "rgb(23, 95, 5)",
    "rgb(255,20,147)",
    "rgb(128,0,0)",
    "green",
    "rgb(139,69,19)",
  ];
  const [color, setColor] = useState(colorList[0]);
  const [ColorIndex, setColorIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [overflow, setOverflow] = useState("none");
  const [VideoIndex, setVideoIndex] = useState([]);

  const wrapper = useRef(null);
  const carousel = useRef(null);
  const [firstCardWidth, setFirstCardWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  useEffect(() => {
    setFirstCardWidth(carousel.current.querySelector(".card").offsetWidth);
    let cardPerView = Math.round(carousel.current.offsetWidth / firstCardWidth);

    let carouselChildrens = [...carousel.current.children];
    carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.current.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    carouselChildrens.slice(0, cardPerView).forEach((card) => {
      carousel.current.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.current.classList.add("no-transition");
    carousel.current.scrollLeft = carousel.current.offsetWidth;
    carousel.current.classList.remove("no-transition");
  }, []);

  const dragStart = (e) => {
    setIsDragging(true);
    carousel.current.classList.add("dragging");
    setStartX(e.pageX);
    setStartScrollLeft(carousel.current.scrollLeft);
  };

  const dragging = (e) => {
    if (!isDragging) return;
    carousel.current.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    setIsDragging(false);
    carousel.current.classList.remove("dragging");
  };

  const wrapper2 = useRef(null);
  const carousel2 = useRef(null);
  const [display, setDisplay] = useState("flex");
  const [index, setIndex] = useState(50);
  const [firstCardWidth2, setFirstCardWidth2] = useState(0);
  const [isDragging2, setIsDragging2] = useState(false);
  const [startX2, setStartX2] = useState(0);
  const [startScrollLeft2, setStartScrollLeft2] = useState(0);

  useEffect(() => {
    setFirstCardWidth2(carousel2.current.querySelector(".card").offsetWidth);
    let cardPerView2 = Math.round(
      carousel2.current.offsetWidth / firstCardWidth2
    );

    let carouselChildrens2 = [...carousel2.current.children];
    carouselChildrens2
      .slice(-cardPerView2)
      .reverse()
      .forEach((card) => {
        carousel2.current.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    carouselChildrens2.slice(0, cardPerView2).forEach((card) => {
      carousel2.current.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel2.current.classList.add("no-transition");
    carousel2.current.scrollLeft = carousel2.current.offsetWidth;
    carousel2.current.classList.remove("no-transition");
  }, []);

  const dragStart2 = (e) => {
    setIsDragging2(true);

    carousel2.current.classList.add("dragging");
    setStartX2(e.pageX);
    setStartScrollLeft2(carousel2.current.scrollLeft);
  };

  const dragging2 = (e) => {
    if (!isDragging2) return;
    carousel2.current.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
  };

  const dragStop2 = () => {
    setIsDragging2(false);
    carousel2.current.classList.remove("dragging");
  };
  const openModal = () => {
    setDisplay("none");
    setOverflow("hidden");
    setShowModal((prev) => !prev);
    setPlayVideo(true);
    setVideoIndex(4);
  };
  useEffect(() => {
    const myInterval = setInterval(() => {
      setColorIndex((ColorIndex) => {
        if (ColorIndex === colorList.length - 1) {
          console.log(ColorIndex);
          ColorIndex = 0;
        } else {
          ColorIndex++;
        }
        return ColorIndex;
      });
    }, 4500);
    return () => clearInterval(myInterval);
  }, [colorList.length]);

  useEffect(() => {
    setColor(colorList[ColorIndex]);
  }, [ColorIndex]);
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <StyleRoot>
      <div style={{ position: "relative", padding: "0px 0px", zIndex: 5 }}>
        <style>
          {`
          html {
            height: 100%;
            width: 100%;
            overflow: ${overflow};
          }
          .navbar.hover{
            display:${display};
          }
        `}
        </style>
        <div
          className="first container-fluid"
          style={{ backgroundColor: color }}
        >
          <div className="firstRow">
            <div className="left">
              <h1>
                <b>Find the right</b> <span>freelance </span>
                <span>service</span>, <b>right away</b>
              </h1>
              <div className="Input">
                <input
                  type="text"
                  className="firstRow-input"
                  placeholder="Search for any service..."
                />
                <div className="glass">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ fontSize: "25px", color: "#f2f4f8" }}
                  />
                </div>
                <div className="search">
                  <button>Search</button>
                </div>
              </div>
              <div className="spann">
                <h5>Popular:</h5>

                <span>
                  <b>Website Design </b>
                </span>
                <span>
                  <b>WordPress</b>
                </span>
                <span>
                  <b>Logo Design</b>
                </span>
                <span>
                  <b>AI Services</b>
                </span>
              </div>
            </div>

            <div className="right">
              <img src="./img/images.png" />
            </div>
          </div>
        </div>

        <div className="secondRow">
          <div className="imgG">
            <h5 style={{ color: "grey" }}>Trusted by:</h5>
            <img src="./img/Meta.png" />
            <img src="./img/google.png" />
            <img src="./img/Netflix.png" />
            <img src="./img/P&G.png" />
            <img src="./img/Paypal.png" />
          </div>
        </div>
        <div className="third container-fluid">
          <div className="wrapper" ref={wrapper}>
            <h1>Popular services</h1>
            <i
              id="left"
              className="fa-solid fa-angle-left"
              onClick={() => {
                carousel.current.scrollLeft -= firstCardWidth;
              }}
            ></i>

            <div style={{ display: "flex", gap: "16px" }}>
              {[1, 2, 3, 4, 5, 6].map((id) => (
                <div
                  key={id}
                  className="demo-card"
                  style={{
                    position: "relative",
                    minWidth: "300px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      color: "white",
                    }}
                  >
                    <div>Reach more customers</div>
                    <div>Social Media</div>
                  </div>
                  <img src="https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/bzdtqdmourfidtw73zc6.png" />
                </div>
              ))}
            </div>

            <ul
              className="carousel"
              ref={carousel}
              onMouseDown={dragStart}
              onMouseMove={dragging}
              onMouseUp={dragStop}
            >
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/Social.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  <h5>Reach more customers</h5>
                  <h3>Social Media</h3>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/SEO.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  <h5>Unlock growth online</h5>
                  <h3>SEO</h3>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/Illustration.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  <h5>Color your dreams</h5>
                  <h3>Illustration</h3>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/translation-2x.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  <h5>Go global</h5>
                  <h3>Translation</h3>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/data-entry-2x.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  <h5>Learn your business</h5>
                  <h3>Data Entry</h3>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/book-covers-2x.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  <h5>Showcase your story</h5>
                  <h3>Book Covers</h3>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/ai-artists-2x.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  <h5>Add talent to AI</h5>
                  <h3>AI Artists</h3>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/logo-design-2x.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  <h5>Build your brand</h5>
                  <h3>Logo Design</h3>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/wordpress-2x.jpg)",
                  }}
                  alt="img "
                  draggable="false"
                ></div>
                <div className="intro">
                  <h5>Customize your site</h5>
                  <h3>WordPress</h3>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/voiceover-2x.jpg)",
                  }}
                  alt="img "
                  draggable="false"
                ></div>
                <div className="intro">
                  <h5>Share your message</h5>
                  <h3>Voice Over</h3>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/animated-explainer-2x.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  <h5>Engage your audience</h5>
                  <h3>Video Explainer</h3>
                </div>
              </li>
            </ul>
            <i
              id="right"
              className="fa-solid fa-angle-right"
              onClick={() => {
                carousel.current.scrollLeft += firstCardWidth;
              }}
            ></i>
          </div>
        </div>

        <div
          className="fourth container-fluid"
          style={{ backgroundColor: "rgb(180, 255, 236)" }}
        >
          <div className="fourthRow">
            <div className="left">
              <h2>The Best part? Everything.</h2>
              <div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#b7bdc8",
                      marginRight: "10px",
                      fontSize: "23px",
                      marginBottom: "5px",
                    }}
                  />
                  <h5>
                    <b>Stick to your budget</b>
                  </h5>
                </div>
                <p>
                  Find the right service for every price point. No hourly rates,
                  just project-based pricing.
                </p>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#b7bdc8",
                      marginRight: "10px",
                      fontSize: "23px",
                      marginBottom: "5px",
                    }}
                  />
                  <h5>
                    <b>Get quality work done quickly</b>
                  </h5>
                </div>
                <p>
                  Hand your project over to a talented freelancer in minutes,
                  get long-lasting results.
                </p>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#b7bdc8",
                      marginRight: "10px",
                      fontSize: "23px",
                      marginBottom: "5px",
                    }}
                  />
                  <h5>
                    <b>Pay when you&aposre happy</b>
                  </h5>
                </div>
                <p>
                  Upfront quotes mean no surprises. Payments only get released
                  when you approve.
                </p>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#b7bdc8",
                      marginRight: "10px",
                      fontSize: "23px",
                      marginBottom: "5px",
                    }}
                  />
                  <h5>
                    <b>Count on 24/7 support</b>
                  </h5>
                </div>
                <p>
                  Our round-the-clock support team is available to help anytime,
                  anywhere.
                </p>
              </div>
            </div>
            <div className="right" onClick={openModal}>
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" />
              <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/desktop-play-button.bab1740.png" />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Modal
            showModal={showModal}
            VideoIndex={VideoIndex}
            setVideoIndex={setVideoIndex}
            setShowModal={setShowModal}
            setOverflow={setOverflow}
            setIndex={setIndex}
            setDisplay={setDisplay}
          />
        </div>
        <section className="fiveRow container-fluid">
          <div className="five">
            <h1>You need it, we&apos;ve got it</h1>
            <div>
              <div>
                <div>
                  <div>
                    <img
                      src="./img/graphics-design.91dfe44 (1).svg"
                      alt="Trulli"
                      width="60"
                      height="70"
                    />
                  </div>
                  <span>Graphics & Design</span>
                </div>
                <div>
                  <div>
                    <img src="./img/online-marketing.a3e9794.svg" />
                  </div>
                  <span>Digital Marketing</span>
                </div>
                <div>
                  <div>
                    <img src="./img/writing-translation.a787f2f.svg" />
                  </div>
                  <span>Writing & Translation</span>
                </div>
                <div>
                  <div>
                    <img src="./img/video-animation.1356999 (1).svg" />
                  </div>
                  <span>Video & Animation</span>
                </div>
                <div>
                  <div>
                    <img src="./img/music-audioede4c90.svg" />
                  </div>
                  <span>Music & Audio</span>
                </div>

                <div>
                  <div>
                    <img src="./img/programming.6ee5a90 (1).svg" />
                  </div>
                  <span>Programming & Tech</span>
                </div>
                <div>
                  <div>
                    <img src="./img/business.fabc3a7.svg" />
                  </div>
                  <span>Business</span>
                </div>
                <div>
                  <div>
                    <img src="./img/lifestyle.112b348.svg" />
                  </div>
                  <span>Lifestyle</span>
                </div>
                <div>
                  <div>
                    <img src="./img/data.855fe95.svg" />
                  </div>
                  <span>Data</span>
                </div>
                <div>
                  <div>
                    <img src="./img/photography.0cf5a3f.svg" />
                  </div>
                  <span>Photography</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="six container-fluid">
          <div className="Sixth">
            <div className="Inner">
              <h3>
                <b>fiverr</b> business
              </h3>
              <h2>
                <b>A solution built for</b>{" "}
                <span
                  style={{
                    fontFamily: "Sofia, sansSerif",
                    fontStyle: "oblique",
                  }}
                >
                  business
                </span>
              </h2>
              <p>
                Upgrade to a curated experience to access vetted talent and
                exclusive tools
              </p>
              <div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#b7bdc8",
                      marginRight: "10px",
                      marginBottom: "10px",
                      fontSize: "20px",
                    }}
                  />
                  <h6>Talent matching</h6>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#b7bdc8",
                      marginRight: "10px",
                      marginBottom: "10px",
                      fontSize: "20px",
                    }}
                  />
                  <h6>Dedicated account management</h6>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#b7bdc8",
                      marginRight: "10px",
                      marginBottom: "10px",
                      fontSize: "20px",
                    }}
                  />
                  <h6>Team collaboration tools</h6>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#b7bdc8",
                      marginRight: "10px",
                      marginBottom: "10px",
                      fontSize: "20px",
                    }}
                  />
                  <h6>Business payment solutions</h6>
                </div>
              </div>
              <button>Explore Fiverr Business</button>
            </div>
            <img src="./img/business-desktop-870-x1.jpeg" />
          </div>
        </section>
        <section className="seveN container-fluid">
          <div className="seventh">
            <AdaptiveHeight />
          </div>
        </section>
        <section className="eight container-fluid">
          <div className="containerr">
            <div className="left">
              <h3>
                <b>Fiverr</b> logomaker.
              </h3>
              <h2>
                <b>Make an incredible logo</b>{" "}
                <span
                  style={{
                    fontFamily: "Sofia, sansSerif",
                    fontStyle: "oblique",
                  }}
                >
                  in minutes
                </span>
              </h2>
              <p>Pre-designed by top talent. Just add your touch.</p>
              <button>Try Fiverr Logo Maker</button>
            </div>
            <div className="right">
              <img
                className="img"
                src="./img/logo-maker-banner-wide-desktop-1352-2x.jpeg"
              />
            </div>
          </div>
        </section>
        <div className="ninth container-fluid">
          <div className="wrapper" ref={wrapper2}>
            <h1>Inspiring work made on Fiverr</h1>
            <i
              id="left"
              className="fa-solid fa-angle-left"
              onClick={() => {
                carousel2.current.scrollLeft -= firstCardWidth2;
              }}
            ></i>
            <ul
              className="carousel"
              ref={carousel2}
              onMouseDown={dragStart2}
              onMouseMove={dragging2}
              onMouseUp={dragStop2}
            >
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/passionshake.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  <img src="./img/74e5ab33-a5fc-40ae-9cee-a91b23e80237.jpg" />
                  <div>
                    <h5>Product Photography</h5>
                    <h6>by passionshake</h6>
                  </div>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/fernandobengua.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  {" "}
                  <img src="./img/db111eb4-c119-42b4-9a1d-9116601f3d22.jpg" />
                  <div>
                    <h5>Social Media Design</h5>
                    <h6>by fornandobengua</h6>
                  </div>{" "}
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/bruno_malagrino.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  <img src="./img/AF1BF970-07CA-454B-8AF1-2F3E06838C8B.jpg" />
                  <div>
                    <h5>Logo Design</h5>
                    <h6>by bruno_malagrino</h6>
                  </div>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/christophbrandl.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  {" "}
                  <img src="./img/6b4a9867-ad06-415f-b307-11177ae30fdd.jpg" />
                  <div>
                    <h5>Illustration</h5>

                    <h6>by christophbrandl</h6>
                  </div>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/lamonastudio-img.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  {" "}
                  <img src="./img/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg" />
                  <div>
                    <h5>Animated GIFs</h5>
                    <h6>by lamonastudio</h6>
                  </div>{" "}
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/spickex.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  {" "}
                  <img src="./img/fiverr_profile.jpg" />
                  <div>
                    <h5>Flyer Design</h5>
                    <h6>by spickex</h6>
                  </div>{" "}
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/skydesigner.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  {" "}
                  <img src="./img/2bb8af3c-4cce-42a8-a699-f11177524084.jpg" />
                  <div>
                    <h5>Web & Mobile Design</h5>
                    <h6>by skydesigner</h6>
                  </div>{" "}
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/annapietrangeli.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  {" "}
                  <img src="./img/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg" />
                  <div>
                    <h5>Book Design</h5>
                    <h6>by annapietrangeli</h6>
                  </div>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/mijalzagier.jpg)",
                  }}
                  alt="img "
                  draggable="false"
                ></div>
                <div className="intro">
                  {" "}
                  <img src="./img/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" />
                  <div>
                    <h5>Packaging Design</h5>
                    <h6>by mijalzagier</h6>
                  </div>{" "}
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/eveeelin.jpg)",
                  }}
                  alt="img "
                  draggable="false"
                ></div>
                <div className="intro">
                  <img src="./img/f79ede47-da5f-440a-bf23-57ed9ef7d363.jpg" />
                  <div>
                    <h5>Logo Design</h5>
                    <h6>by eveeelin</h6>
                  </div>
                </div>
              </li>
              <li className="card">
                <div
                  className="img"
                  style={{
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(./img/noneyn.jpg)",
                  }}
                  draggable="false"
                ></div>
                <div className="intro">
                  <img src="./img/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5.jpg" />
                  <div>
                    <h5>Portraits & Caricatures</h5>
                    <h6>by noneyn</h6>
                  </div>
                </div>
              </li>
            </ul>
            <i
              id="right"
              className="fa-solid fa-angle-right"
              onClick={() => {
                carousel2.current.scrollLeft += firstCardWidth2;
              }}
            ></i>
          </div>
        </div>
        <section className="tenth container-fluid">
          <div className="ten">
            <h1>Guides to help you grow</h1>
            <div>
              <div>
                <div>
                  <div>
                    <img
                      src="./img/guide-start-online-business-552-x2.jpeg"
                      alt="Trulli"
                      width="60"
                      height="70"
                    />
                  </div>
                  <h3>Start an online business and work from home</h3>
                  <p>A complete guide to starting a small business online</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./img/guide-digital-marketing-552-x2.jpeg"
                      width="60"
                      height="70"
                    />
                  </div>
                  <h3>Digital marketing made easy</h3>
                  <p>
                    A practical guide to understand what is digital marketing
                  </p>
                </div>
                <div>
                  <div>
                    <img
                      src="./img/guide-create-a-logo-552-x2.jpeg"
                      width="60"
                      height="70"
                    />
                  </div>
                  <h3>Create a logo for your business</h3>
                  <p>
                    A step-by-step guide to create a memorable business logo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="eleventh container-fluid">
          <div className="eleven" style={{}}>
            <div>
              <h2>
                <b>
                  Suddenly it&#39;s all so{" "}
                  <span
                    style={{
                      fontFamily: "Sofia, sansSerif",
                      fontStyle: "oblique",
                    }}
                  >
                    doable.
                  </span>
                </b>
              </h2>
              <button style={{ backgroundColor: "green", color: "white" }}>
                Join Fiverr
              </button>
            </div>
            <div className="img">
              <img src="/img/bg-signup-1400-x1.jpg" />
            </div>
          </div>
        </section>
      </div>
    </StyleRoot>
  );
}
function Home() {
  return <PreSet />;
}

export default Home;
