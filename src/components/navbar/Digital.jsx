import React from "react";


const GraphicsDesign ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    position: "relative",
    top:"13px",
    left: "120px",
    width: "65%",
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
function Digital({setDigital}) {
        const initialState = {
      isHovering: false,
      isMoving: false
    };
    
    return(
        <div style={GraphicsDesign} className="Graphics-Design"  onMouseLeave={()=>{setDigital(false)}}>
        <div  style={inner}>
        <div style={{margin: "20px 20px"}}>
        <h3>Search</h3>
         <div style={spanGroup}>
         <span>Search Engine Optimization (SEO)</span>
                <span>Search Engine Marketing (SEM)</span>
                <span>Local SEO</span>
                <span>E-Commerce SEO</span>
                <span>Video SEO</span>
         </div>
         </div>
         <div  style={{margin: "20px 20px"}}>
         <h3>Social</h3>
         <div style={spanGroup}>
         <span>Social Media Marketing</span>
                <span>Paid Social Media</span>
                <span>Influencer Marketing</span>
                <span>Community Management</span>
         </div>
         </div>

        </div>
        
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h3>Methods & Techniques</h3>
         <div style={spanGroup}>
         <span>Video Marketing</span>
                <span>E-Commerce Marketing</span>
                <span>Email Marketing</span>
                <span>Guest Posting</span>
                <span>Affiliate Marketing</span>
                <span>Display Advertising</span>
                <span>Public Relations</span>
                <span>Text Message Marketing</span>
         </div>
         </div>
        </div>
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
        <h3>Analytics & Strategy</h3>
        <div style={spanGroup}>
        <span>Marketing Strategy</span>
                <span>Marketing Advice</span>
                <span>Web Analytics</span>
                <h3>Industry & Purpose-Specific</h3>
                <span>Music Promotion</span>
                <span>Podcast Marketing</span>
                <span>Book & eBook Marketing</span>
                <span>Mobile App Marketing</span>
                <h3>Miscellaneous</h3>
                <span>Crowdfunding</span>
                <span>Other</span>
         </div>
         </div>
        </div>
        </div>
      );
    }

export default Digital;
