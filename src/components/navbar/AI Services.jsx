import React from "react";


const GraphicsDesign ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    position: "relative",
    top:"13px",
    left: "460px",
    width: "45%",
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
function AiService({setAiService}) {

    
    return(
        <div style={GraphicsDesign} className="Graphics-Design" onMouseLeave={()=>{setAiService(false)}}>
        <div  style={inner}>
        <div style={{margin: "20px 20px"}}>
        <h3>Build your AI app</h3>
         <div style={spanGroup}>
         <span>AI Applications</span>
                <span>ChatGPT Applications</span>
                <span>AI Websites</span>
                <span>AI Chatbots</span>
                <span>AI Agents DevelopmentNEW</span>
         </div>
         </div>
         <div  style={{margin: "20px 20px"}}>
         <h3>Get your data right</h3>
         <div style={spanGroup}>
         <span>Data Science & AI</span>
                <span>Data Model Training</span>
                <span>Data Labeling & Annotation</span>
                <span>Data Analytics</span>
         </div>
         </div>

        </div>
        
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
        <h3>AI Artists</h3>
        <div style={spanGroup}>
        <span>Midjourney Artists</span>
                <span>DALL-E Artists</span>
                <span>Stable Diffusion Artists</span>
         </div>
         </div>

        <div  style={{margin: "20px 20px"}}>
        <h3>Creative services</h3>
        <div style={spanGroup}>
        <span>AI Music Videos</span>
                <span>Voice Synthesis & AI</span>
                <span>Generative AI Lessons</span>
         </div>
         </div>

        <div  style={{margin: "20px 20px"}}>
        <h3>Refine AI with experts</h3>
        <div style={spanGroup}>
        <span>Photo Manipulation</span>
                <span>Fact Checking</span>
                <span>AI Content Editing</span>
         </div>
         </div>
        </div>
        </div>
      );
    }

export default AiService;
