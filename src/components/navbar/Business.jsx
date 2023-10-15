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
function Business({setBusiness}) {
    
    return(
        <div style={GraphicsDesign} className="Graphics-Design" onMouseLeave={()=>{setBusiness(false)}}>
        <div  style={inner}>
        <div style={{margin: "20px 20px"}}>
        <h5>Business Formation</h5>
         <div style={spanGroup}>
         <span>Business Registration</span>
         <span>Business Plans</span>
         <span>Pitch Decks</span>
         <span>Startup Consulting</span>

         </div>
         </div>
         <div  style={{margin: "20px 20px"}}>
         <h5>Legal Services</h5>
         <div style={spanGroup}>
         <span>Applications & Registrations</span>
         <span>Legal Documents & Contracts</span>
         <span>Legal Consulting</span>
         </div>
         </div>

        </div>
        
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>General & Administrative</h5>
         <div style={spanGroup}>
         <span>Data Entry</span>
         <span>Virtual Assistant</span>
<span>E-Commerce Management</span>
<span>HR Consulting</span>
<span>Project Management</span>
                <span>Supply Chain Management</span>
         </div>
         </div>
        <div  style={{margin: "20px 20px"}}>
         <h5>Business Growth</h5>
         <div style={spanGroup}>                
         <span>Business Consulting</span>
         <span>Market Research</span>
         <span>Data Analytics</span>
         <span>Data Visualization</span>
         </div>
         </div>
        </div>

        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>Sales & Customer Care</h5>
         <div style={spanGroup}>
         <span>Sales</span>          
<span>Lead Generation</span>
<span>Call Center & Calling</span>
<span>Customer Care</span>
<span>CRM Management</span>

         </div>
         </div>

         <div  style={{margin: "20px 20px"}}>
         <h5>Professional Development</h5>
         <div style={spanGroup}>                
<span>Interview Prep</span>
<span>Leadership Development</span>
                <span>Life Coaching</span>
         </div>
         </div>
        </div>
        <div  style={inner}>
        <div  style={{margin: "20px 20px"}}>
         <h5>Accounting & Finance</h5>
         <div style={spanGroup}>
            <span>Tax Consulting</span>
            <span>Accounting & Bookkeeping</span>
         <span>Financial Consulting</span>
<span>ERP Management</span>
         </div>
         </div>

        <div  style={{margin: "20px 20px"}}>
         <h5>Miscellaneous</h5>
         <div style={spanGroup}>
            <span>Fact Checking</span>
            <span>Event Management</span>
         <span>Game Concept Design</span>
<span>Other</span>
         </div>
         </div>
        </div>
        </div>
      );
    }

export default Business;
