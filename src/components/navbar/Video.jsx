import React from "react";


const GraphicsDesign ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    position: "relative",
    top:"13px",
    left: "280px",
    width: "70%",
    height: "auto",
    zIndex: -100,
    backgroundColor: "white"
  }
  
  const inner = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
    
  }
  const spanGroup = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
function Video({setVideo}) {
        const initialState = {
      isHovering: false,
      isMoving: false
    };
    
    return(
        <div style={GraphicsDesign} className="Graphics-Design" onMouseLeave={()=>{setVideo(false)}}>
        <div  style={inner}>
        <div style={{margin: "20px 20px"}}>
        <h5>Editing & Post-Production</h5>
         <div style={spanGroup}>
         <span>Video Editing</span>
         <span>Visual Effects</span>
         <span>Intro & Outro Videos</span>
         <span>Video Templates Editing</span>
         <span>Subtitles & Captions</span>

         </div>
         </div>
         <div  style={{margin: "20px 20px"}}>
         <h5>Social & Marketing Videos</h5>
         <div style={spanGroup}>

         <span>Video Ads & Commercials</span>
         <span>Social Media Videos</span>
         <span>Music Videos</span>
<span>Unboxing Videos</span>
         <span>Slideshow Videos</span>

         </div>
         </div>

        </div>
        
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>Animation</h5>
         <div style={spanGroup}>
         <span>Logo Animation</span>
         <span>Character Animation</span>
<span>Animated GIFs</span>
<span>Animation for Kids</span>
<span>Animation for Streamers</span>
                <span>Lottie & Web Animation</span>
                <span>Rigging</span>
<span>NFT Animation</span>
         </div>
         </div>
        <div  style={{margin: "20px 20px"}}>
         <h5>Filmed Video Production</h5>
         <div style={spanGroup}>                
         <span>VideographersNEW</span>
         <span>Filmed Video Production</span>
         </div>
         </div>
        </div>

        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>Explainer Videos</h5>
         <div style={spanGroup}>
         <span>Animated Explainers</span>          
<span>Live Action Explainers</span>
<span>Spokesperson Videos</span>
<span>Screencasting Videos</span>
<span>eLearning Video Production</span>
<span>Crowdfunding Videos</span>
         </div>
         </div>

         <div  style={{margin: "20px 20px"}}>
         <h5>Product Videos</h5>
         <div style={spanGroup}>                
         
<span>3D Product Animation</span>

<span>E-Commerce Product Videos</span>
                
                
                
                <span>Corporate Videos</span>
                
                <span>App & Website Previews</span>

         </div>
         </div>
        </div>
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>Miscellaneous</h5>
         <div style={spanGroup}>
            <span>Article to Video</span>
            <span>Game Trailers</span>
         <span>Meditation Videos</span>
<span>Real Estate Promos</span>
<span>Book trailer</span>
                <span>Video Advice</span>
                <span>Other</span>
         </div>
         </div>
        </div>
        </div>
      );
    }

export default Video;
