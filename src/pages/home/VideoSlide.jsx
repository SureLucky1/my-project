import React, {useState} from "react";
import Slider from "react-slick";
import Modal from './Modal/Modal2'  
import "./VideoSlide.scss"
export default function AdaptiveHeight(){
  const [playVideo, setPlayVideo] = useState(false)
  const [VideoIndex, setVideoIndex] = useState([])
    var settings = {
      dotsClass: {color:"red"},
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      color:"red"

    };

    const [showModal, setShowModal] = useState(false);
    const [overflow, setOverflow] = useState('none');
    const [index, setIndex] = useState(50);
    const [display, setDisplay] = useState("flex");
    return (
      <div>
          <Modal showModal={showModal} VideoIndex={VideoIndex} setVideoIndex={setVideoIndex} setShowModal={setShowModal} setOverflow={setOverflow} setDisplay={setDisplay} setIndex={setIndex}/>
          <style>
        {`
          html {
            height: 100%;
            width: 100%;
            overflow: ${overflow};
          }
          .navbar.hover{
            z-index:${index};
          }
        `}
      </style>
        <Slider {...settings}>
          <div style={{width: "100%", overflow:"hidden"}}>
          <div className="display">
<div className="display1" onClick={()=>{setPlayVideo(true);setShowModal(prev => !prev); setVideoIndex(0); setOverflow("hidden");setIndex(0);}}>
  <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg" alt="" />
  <img src="./img/desktop-play.png" alt="" />
</div>
            <div className="display2">
            <div>
            <h3>Brighid Gannon (DNP, PMHNP-BC), Co-Founder</h3><span>Lavender</span>
            </div>
            <p>&quot;We used Fiverr for SEO, our logo, website, copy, animated videos - literally 
                Everything. It was like working with a human right next to you versus being across the world.&quot;</p>
          </div>
          </div>
          </div>
          <div>
          <div className="display">
          <div className="display1" onClick={()=>{setPlayVideo(true); setShowModal(prev => !prev); setVideoIndex(1); setOverflow("hidden");setIndex(0);}}>
  <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg" alt="" style={{width:"110%", height:"auto", zIndex: 30}}/>
  <img src="./img/desktop-play.png" alt=""/>
</div>
          <div className="display2">
          
            <div>
            <h3>Kay Kim, Co-Founder</h3><span>rooted</span>
            </div>
            <p>It&quot;s extremely exciting that Fiverr has freelancers from all over the world = it broadens the talent pool. 
                One of the best things about Fiverr is that while we&quot;re sleeping, someone&quot;s working</p>
          </div>
          </div>
          </div>
          <div>
          <div className="display">
          <div className="display1" onClick={()=>{setPlayVideo(true); setShowModal(prev => !prev); setVideoIndex(2); setOverflow("hidden");setIndex(0);}}>
  <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg" alt="" style={{width:"110%", height:"auto", zIndex: 30}}/>
  <img src="./img/desktop-play.png" alt=""/>
</div>
          <div className="display2">
          
            <div>
            <h3>Tim and Dan Joo, Co-Founders</h3><span>HERFEST</span>
            </div>
            <p>&quot;When you want to create a business bigger than yourself, you need a lot of help. That&quot;s what Fiverr does.&quot;</p>
          </div>
          </div>
          </div>
          <div>
          <div className="display">
          <div className="display1" onClick={()=>{setPlayVideo(true); setShowModal(prev => !prev); setVideoIndex(3); setOverflow("hidden");setIndex(0);}}>
  <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg" alt="" style={{width:"110%", height:"auto", zIndex: 30}}/>
  <img src="./img/desktop-play.png" alt=""/>
</div>
          <div className="display2">
          
            <div>
            <h3>Caitlin Tormey, Chief Commercial Officer</h3><span>NAADAM</span>
            </div>
            <p>&quot;We&quot;ve used Fiverr for Shopify web Development, graphic design, and backend web development. 
                Working with Fiverr makes my job a little easier every day.&quot;</p>
          </div>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
