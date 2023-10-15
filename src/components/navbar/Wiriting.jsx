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
function Writing({setWriting}) {
        const initialState = {
      isHovering: false,
      isMoving: false
    };
    
    return(
        <div style={GraphicsDesign} className="Graphics-Design" onMouseLeave={()=>{setWriting(false)}}>
        <div  style={inner}>
        <div style={{margin: "20px 20px"}}>
        <h5>Content Writing</h5>
         <div style={spanGroup}>
         <span>Articles & Blog Posts</span>
         <span>Content Strategy</span>
         <span>Book & eBook Writing</span>
         <span>Website Content</span>
         <span>Scriptwriting</span>
         <span>Creative Writing</span>
         <span>Podcast Writing</span>
         <span>Speechwriting</span>
         <span>Research & Summaries</span>
         </div>
         </div>
         <div  style={{margin: "20px 20px"}}>
         <h5>Translation & Transcription</h5>
         <div style={spanGroup}>
         <span>Translation</span>
         <span>Localization</span>
         <span>Transcription</span>
         </div>
         </div>

        </div>
        
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>Editing & Critique</h5>
         <div style={spanGroup}>
            <span>Proofreading & Editing</span>
            <span>AI Content Editing</span>
            <span>Book Editing</span>
            <span>Beta Reading</span>
<span>Writing Advice</span>

         </div>
         </div>
        <div  style={{margin: "20px 20px"}}>
         <h5>Career Writing</h5>
         <div style={spanGroup}>                
         <span>Resume Writing</span>
                <span>Cover Letters</span>
                <span>LinkedIn Profiles</span>
                <span>Job Descriptions</span>
         </div>
         </div>
        </div>

        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>Business & Marketing Copy</h5>
         <div style={spanGroup}>
         <span>Brand Voice & Tone</span>
         <span>Business Names & Slogans</span>
         <span>Case Studies</span>
                <span>White Papers</span>
                <span>Product Descriptions</span>
                <span>Ad Copy</span>
                <span>Sales Copy</span>
                <span>Email Copy</span>            
                <span>Social Media Copy</span>
                <span>Press Releases</span>
                <span>UX Writing</span>
                <span>Website Content</span>
         </div>
         </div>
        </div>
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>Business & Marketing Copy</h5>
         <div style={spanGroup}>
                <span>eLearning Content Development</span>
                <span>Technical Writing</span>
                <span>Grant Writing</span>
                <span>Other</span>
         </div>
         </div>
        </div>
        </div>
      );
    }

export default Writing;
