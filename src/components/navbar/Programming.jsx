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
function Programming({setProgramming}) {
        const initialState = {
      isHovering: false,
      isMoving: false
    };
    
    return(
        <div style={GraphicsDesign} className="Graphics-Design" onMouseLeave={()=>{setProgramming(false)}}>
        <div  style={inner}>
        <div style={{margin: "20px 20px"}}>
        <h5>Websites</h5>
         <div style={spanGroup}>
         <span>Website Development</span>
                <span>Website Maintenance</span>
                <span>Business Websites</span>
                <span>E-Commerce Development</span>
                <span>Landing Pages</span>
                <span>Blogs</span>

         </div>
         </div>
         <div  style={{margin: "20px 20px"}}>
         <h5>Website Platforms</h5>
         <div style={spanGroup}>

         <span>WordPress</span>
                <span>Shopify</span>
                <span>Wix</span>
                <span>Custom Websites</span>

         </div>
         </div>

        </div>
        
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>Application Development</h5>
         <div style={spanGroup}>
         <span>Software Development</span>
                <span>Mobile Apps</span>
                <span>Web Applications</span>
                <span>Desktop Applications</span>
                <span>Game Development</span>
                <span>AI Applications</span>
                <span>Chatbots Development</span>
         </div>
         </div>
        <div  style={{margin: "20px 20px"}}>
         <h5>Testing & Review</h5>
         <div style={spanGroup}>                
         <span>QA & Review</span>
                <span>User Testing</span>
         </div>
         </div>
        </div>

        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>Software Developers</h5>
         <div style={spanGroup}>
         <span>Python Developers</span>
         <span>HTML & CSS Developers</span>
         <span>JavaScript Developers</span>
         <span>Java Developers</span>
         <span>Android Developers</span>
         <span>iOS Developers</span>
         <span>Unity Developers</span>
         </div>
         </div>

         <div  style={{margin: "20px 20px"}}>
         <h5>Support & Cybersecurity</h5>
         <div style={spanGroup}>                
         <span>DevOps & Cloud</span>
                <span>Support & IT</span>
                <span>Cybersecurity</span>
         </div>
         </div>
        </div>
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>Data</h5>
         <div style={spanGroup}>
         <span>Data Entry</span>
         <span>Databases</span>
                <span>Data Processing</span>
                <span>Data Engineering</span>
                <span>Data Science & AI</span>
                <span>Data Analytics</span>
                <span>Data Visualization</span>
         </div>
         </div>

        <div  style={{margin: "20px 20px"}}>
         <h5>Miscellaneous</h5>
         <div style={spanGroup}>                
         <span>Electronics Engineering</span>
                <span>Convert Files</span>
                <span>Blockchain & Cryptocurrency</span>
         </div>
         </div>
        </div>
        </div>
      );
    }

export default Programming;
