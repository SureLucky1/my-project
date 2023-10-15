import React from "react";


const GraphicsDesign ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    position: "relative",
    top:"13px",
    left: "550px",
    width: "40%",
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
function Photography({setPhotography}) {
        const initialState = {
      isHovering: false,
      isMoving: false
    };
    
    return(
        <div style={GraphicsDesign} className="Graphics-Design" onMouseLeave={()=>{setPhotography(false)}}>
        <div  style={inner}>
        <div style={{margin: "20px 20px"}}>
        <h3>Products & Lifestyle</h3>
         <div style={spanGroup}>
         <span>Product Photographers</span>
                <span>Food Photographers</span>
                <span>Lifestyle & Fashion Photographers</span>

         </div>
         </div>
         <div  style={{margin: "20px 20px"}}>
         <h3>People & Scenes</h3>
         <div style={spanGroup}>
         <span>Portrait Photographers</span>
                <span>Event Photographers</span>
                <span>Real Estate Photographers</span>
                <span>Aerial Photographers</span>
         </div>
         </div>

        </div>
        
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
        <h3>Miscellaneous</h3>
        <div style={spanGroup}>
        <span>Photography Classes</span>
                <span>Image Editing</span>
                <span>Modeling & Acting</span>
                <h3>Styling & Beauty</h3>
                <span>Other</span>
         </div>
         </div>
        </div>
        </div>
      );
    }

export default Photography;
