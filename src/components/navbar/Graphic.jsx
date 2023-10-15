import React, { useEffect, useReducer} from "react";


const GraphicsDesign ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    position: "relative",
    top:"13px",
    left: "120px",
    width: "85%",
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
function Graphic({setGraphic}) {
        const initialState = {
      isHovering: false,
      isMoving: false
    };
    
    return(
        <div style={GraphicsDesign} className="Graphics-Design"  onMouseLeave={()=>{setGraphic(false)}}>
        <div  style={inner}>
        <div style={{margin: "20px 50px"}}>
         <h3>Logo & Brand Identity</h3>
         <div style={spanGroup}>
         <span>Logo & Brand Identity</span>
         <span>Brand Style Guides</span>
         <span>Business Cards & Stationery</span>
         <span>Fonts & Typography</span>
         <span>Logo Maker Tool</span>
         </div>
         </div>
         <div  style={{margin: "15px 50px"}}>
         <h3>Art & Illustration</h3>
         <div style={spanGroup}>
         <span>Illustration</span>
         <span>AI Artists</span>
         <span>Children&apos;s Book Illustration</span>
         <span>Portraits & Caricatures</span>
         <span>Cartoons & Comics</span>
         <span>Pattern Design</span>
         <span>Tattoo Design</span>
         <span>Storyboards</span>
         <span>NFT Art</span>
         </div>
         </div>
         <div  style={{margin: "15px 50px"}}>
         <h3>Miscellaneous</h3>
         <span>Design Advice</span>
         </div>
        </div>
        
        <div  style={inner}>
        <div  style={{margin: "15px 50px"}}>
        <h3>Web & App Design</h3>
        <div style={spanGroup}>
         <span>Website Design</span>
         <span>App Design</span>
         <span>UX Design</span>
         <span>Landing Page Design</span>
         <span>Icon Design</span>
         </div>
         </div>
         <div  style={{margin: "15px 50px"}}>
         <h3>Product & Gaming</h3>
         <div style={spanGroup}>
         <span>Industrial & Product Design</span>
         <span>Character Modeling</span>
         <span>Game Art</span>
         <span>Graphics for Streamers</span>
         </div>
         </div>
         <div  style={{margin: "15px 50px"}}>
         <h3>Print Design</h3>
         <div style={spanGroup}>
         <span>Flyer Design</span>
         <span>Brochure Design</span>
         <span>Poster Design</span>
         <span>Catalog Design</span>
         <span>Menu Design</span>
         </div>
         </div>
        </div>
        
        <div  style={inner}>
        <div  style={{margin: "15px 50px"}}>
        <h3>Visual Design</h3>
        <div style={spanGroup}>
         <span>Image Editing</span>
         <span>Presentation Design</span>
         <span>Background Removal</span>
         <span>Infographic Design</span>
         <span>Vector Tracing</span>
         <span>Resume Design</span>
         </div>
         </div>
         <div  style={{margin: "15px 50px"}}>
         <h3>Marketing Design</h3>
         <div style={spanGroup}>
         <span>Social Media Design</span>
         <span>Social Posts & Banners</span>
         <span>Email Design</span>
         <span>Web Banners</span>
         <span>Signage Design</span>
         </div>
         </div>
         <div  style={{margin: "15px 50px"}}>
         <h3>Packaging & Covers</h3>
         <div style={spanGroup}>
         <span>Packaging & Label Design</span>
         <span>Book Design</span>
         <span>Book Covers</span>
         <span>Album Cover Design</span>
         </div>
         </div>
        </div>
        
        <div  style={inner}>
        <div  style={{margin: "15px 50px"}}>
        <h3>Architecture & Building Design</h3>
        <div style={spanGroup}>
         <span>Architecture & Interior Design</span>
         <span>Landscape Design</span>
         <span>Building Engineering</span>
         </div>
         </div>
         <div  style={{margin: "15px 50px"}}>
         <h3>Fashion & Merchandise</h3>
         <div style={spanGroup}>
         <span>T-Shirts & Merchandise</span>
         <span>Fashion Design</span>
         <span>Jewelry Design</span>
         </div>
         </div>
         <div  style={{margin: "15px 50px"}}>
         <h3>3D Design</h3>
         <div style={spanGroup}>
         <span>3D Architecture</span>
         <span>3D Industrial Design</span>
         <span>3D Fashion & Garment</span>
         <span>3D Printing Characters</span>
         <span>3D Landscape</span>
         <span>3D Game Art</span>
         <span>3D Jewelry Design</span>
         </div>
         </div>
        </div>
        </div>
      );
    }

export default Graphic;
