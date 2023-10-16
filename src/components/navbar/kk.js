import React, { useState, useEffect, useContext } from "react";
import './kk.css'
import Appp from "../../pages/Appp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Rr = () => {

  const { genres } = useParams();
  const [genreMovies, setGenreMovies] = useState(Array(20).fill({}));
  console.log(genreMovies);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
    const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem("favorite")) || []
  );

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&api_key=6a3a9e9a61085d657b30d36d1c7b5ba7`
      )
      .then((res) => {
        setGenreMovies(res.data.results);

        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
  }, [genres, pageNum]);
  console.log("genreMovies", genreMovies);
  function heartFunction(movieId) {
    if (favorite.includes(movieId)) {
      setFavorite(favorite.filter((id) => id !== movieId));
    } else {
      setFavorite([...favorite, movieId]);
    }
    localStorage.setItem("favorite", JSON.stringify([...favorite, movieId]));

  }
  return (
    <main className='subpage'>
      <section className='heading'>
        <h5><FontAwesomeIcon icon={faHouse} /><span> / </span>Video & Animation</h5>
        <h1>Intro & Outro Videos</h1>
        <div className='headingGroup'>
        <p>Engage your audience before and after they watch your videos with custom intros and outros.</p>
        <button>Intro & Outro Videos</button>
        </div>
      </section>
      {/* <div className="flex-parent">
          {genreMovies.map((post) =>isLoading ? (
              <div className="moviebox">
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton duration={2} height={300} />
                </SkeletonTheme>
              </div>
            ) : (
              <div className="moviebox">
                <Link
                  to={`/movie/${post.id}`}  
                  key={post.id}
                  style={{ textDecoration: "none" }}
                >
                  <a
                    style={{ textDecoration: "none", color: "#fff" }}
                    href={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
                    target="_blank"
                  >
                    {post.poster_path ? (
                      <img  
                        className="movieimg"
                        src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
                      />
                    ) : (
                      <div className="noimg"></div>
                    )}
                    <p className="caption">{`${post.original_title}`}</p>
                    <div className="star-rating">
                      {post.vote_average >= 2 ? (
                        <img
                          alt=""
                          width="20px"
                          src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.svg"
                        />
                      ) : (
                        <img
                          alt=""
                          width="20px"
                          src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-full-icon.svg"
                        />
                      )}
                      {post.vote_average >= 4 ? (
                        <img
                          alt=""
                          width="20px"
                          src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.svg"
                        />
                      ) : (
                        <img
                          alt=""
                          width="20px"
                          src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-full-icon.svg"
                        />
                      )}
                      {post.vote_average >= 6 ? (
                        <img
                          alt=""
                          width="20px"
                          src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.svg"
                        />
                      ) : (
                        <img
                          alt=""
                          width="20px"
                          src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-full-icon.svg"
                        />
                      )}
                      {post.vote_average >= 8 ? (
                        <img
                          alt=""
                          width="20px"
                          src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.svg"
                        />
                      ) : (
                        <img
                          alt=""
                          width="20px"
                          src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-full-icon.svg"
                        />
                      )}
                      {post.vote_average >= 10 ? (
                        <img
                          alt=""
                          width="20px"
                          src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.svg"
                        />
                      ) : (
                        <img
                          alt=""
                          width="20px"
                          src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-full-icon.svg"
                        />
                      )}
                      {post.vote_average !== 0 && ` (${post.vote_average})`}
                    </div>
                  </a>
                </Link>

                <Link>
                  <button
                    className="heart_btn"
                    onClick={() => heartFunction(post.id)}
                  >
                    {favorite.includes(post.id) ? (
                      <img
                        className="heart_img"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/968px-Love_Heart_SVG.svg.png"
                      />
                    ) : (
                      <img
                        className="heart_img_black"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/968px-Love_Heart_SVG.svg.png"
                      />
                    )}
                  </button>
                </Link>
              </div>
            ))

                    }
        </div> */}
        <Appp />
        <hr />
        <div className="spangroup">
          <h1>Explore More Intro & Outro Videos Services</h1>
          <div className="span">
            <span>Video Editing Services</span>
            <span>Video ProductionL</span>
            <span>Lyric video</span>
            <span>Hire Video Editors</span>
            <span>Intro & Outro Videos</span>
            <span>Video Ads & Commercials</span>
            <span>Animated Explainers</span>
            <span>Whiteboard Animation</span>
            <span>Visual Effects</span>
            <span>Video Production</span>
            <span>Music Videos Services</span>
            <span>Youtube Intro Video</span>
            <span>Animated title sequence</span>
          </div>
        </div>
        <hr />
        <section className='FAQs'>
            <h1>Intro & Outro Videos FAQs</h1>
            <div className='QQ'>
              
              <div className="item">
                <h1>What is an intro and outro for a video?</h1>
                <p>An intro is the introduction of a video. It includes the visuals and the soundtrack that mark the beginning of the video. Similarly, an outro is the content that marks the end of a video. An outro usually includes a concluding soundtrack and closing visuals with a call to action at the end for brands.</p>
                </div>

                <div className="item">
                <h1>How to make a compelling intro video?</h1>
                <p>A fantastic video intro is short and introduces your brand in style. It includes vivid visuals and a unique soundtrack. A great intro comes after the hook, which is your promise of what the video will deliver. Hire a Fiverr specialist to create a customized intro for you.</p>
                </div>

                <div className="item">
                <h1>What are some key features in a compelling outro?</h1>
                <p>A great outro should be concise and provide the audience with an action to perform. Typically, it is a single, strong call to action (CTA), giving the viewers an incentive to take action. The CTA could be anything from asking for a like or subscribe to an email opt-in or even a sale.</p>
                </div>
                
                <div className="item">
                <h1>How long should an intro and outro be?</h1>
                <p>Both your intro and outro should be short and concise. They should be as long as needed, not too long or too short. An ideal intro length is anywhere between 3-7 seconds, while an outro can be a tad bit longer, about 10-15 seconds. This gives your audience time to act on the CTA you&apos;ve given them.</p>
                </div>

                <div className="item">
                <h1>Why should I make a custom video intro?</h1>
                <p>Custom video intros are essential, so your audience knows exactly how you are and what your brand represents right from the get-go. It&apos;s your one chance to make a great first impression! A great custom intro will set your video apart from the thousands of videos being promoted alongside yours.</p>
                </div>

                <div className="item">
                <h1>How do intros help market my business?</h1>
                <p>Video intros help your brand become recognizable and unique, complementing your company&apos;s marketing strategies by adding a cohesive look and feel. Your audience should immediately recognize it as part of your overall brand - not only marketing that specific video but your entire business.</p>
                </div>
            </div>
        </section>
        <section className='tenth container-fluid'>
    <div className='ten'>
    <h1>Intro & Outro Videos Related Guides</h1>
    <div>
    <div >
    <div>
              <div>
              <img src="./img/guide-start-online-business-552-x2.jpeg" alt="Trulli"  width= "60" height= "70" />
              </div>
          <h3>Start an online business and work from home</h3>
          <p>A complete guide to starting a small business online</p>
            </div>
            <div>
            <div>
              <img src="./img/guide-digital-marketing-552-x2.jpeg" width= "60" height= "70"/>
              </div>
          <h3>Digital marketing made easy</h3>
          <p>A practical guide to understand what is digital marketing</p>
            </div>
            <div>
            <div>
              <img src="./img/guide-create-a-logo-552-x2.jpeg" width= "60" height= "70"/>
              </div>
          <h3>Create a logo for your business</h3>
          <p>A step-by-step guide to create a memorable business logo</p>
            </div>
    </div>
    </div>
        </div>
        </section>
    </main>
  )
}

export default Rr