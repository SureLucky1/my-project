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
function Music({setMusic}) {
        const initialState = {
      isHovering: false,
      isMoving: false
    };
    
    return(
        <div style={GraphicsDesign} className="Graphics-Design" onMouseLeave={()=>{setMusic(false)}}>
        <div  style={inner}>
        <div style={{margin: "20px 20px"}}>
        <h5>Music Production & Writing</h5>
         <div style={spanGroup}>
         <span>Producers & Composers</span>
         <span>Singers & Vocalists</span>
         <span>Session Musicians</span>
         <span>Songwriters</span>
         <span>Beat Making</span>
         <span>Jingles & Intros</span> 


         </div>
         </div>
         <div  style={{margin: "20px 20px"}}>
         <h5>Audio Engineering & Post Production</h5>
         <div style={spanGroup}>
                         <span>Mixing & Mastering</span>
<span>Audio Editing</span>
<span>Vocal Tuning</span>

         </div>
         </div>

        </div>
        
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>Voice Over & Narration</h5>
         <div style={spanGroup}>
         <span>Voice Over</span>

         </div>
         </div>
        <div  style={{margin: "20px 20px"}}>
         <h5>Streaming & Audio</h5>
         <div style={spanGroup}>                
         <span>Podcast Production</span>
                <span>Audiobook Production</span>
                <span>Audio Ads Production</span>
                <span>Voice Synthesis & AI</span>
         </div>
         </div>
        </div>

        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>DJing</h5>
         <div style={spanGroup}>
<span>DJ Drops & Tags</span>
                <span>DJ Mixing</span>
                <span>Remixing & Mashups</span>
         </div>
         </div>

         <div  style={{margin: "20px 20px"}}>
         <h5>Sound Design</h5>
         <div style={spanGroup}>                
<span>Sound Design</span>
                <span>Synth Presets</span>
                <span>Meditation Music</span>
                <span>Audio Logo & Sonic Branding</span>

         </div>
         </div>
        
        <div  style={{margin: "20px 20px"}}>
         <h5>Lessons & Transcriptions</h5>
         <div style={spanGroup}>
         <span>Online Music Lessons</span>
         <span>Music Transcription</span>
         <span>Music & Audio Advice</span>
         </div>
         </div>
        </div>
        </div>
      );
    }

export default Music;
