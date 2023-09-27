
import React, {createRef, useEffect, useReducer, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import "./NavT3.scss";
import { Link, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Appp from './Sidebar';
const initialState = {
  isHovering: false,
  isMoving: false
};
function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function reducer(state, action) {
    switch (action.type) {
      case 'HOVER':
        return {
          ...state,
          isHovering: true
        };
      case 'UNHOVER':
        return {
          ...state,
          isHovering: false
        };
      case 'Move':
        return {
          ...state,
          isMoving: true
        };
      case 'UnMove':
        return {
          ...state,
          isMoving: false
        };
      default:
        return state;
    }
  }
  
  
    const [state, dispatch] = useReducer(reducer, initialState);
  
    useEffect(() => {
  
      function handleMouseEnter() {
        if(window.scrollY > 0){
          dispatch({ type: 'HOVER' });
        }else{
           dispatch({ type: 'UNHOVER' });
        }
      }
      function handleMiniBar() {
        if(window.scrollY > 200){
          dispatch({ type: 'Move' });
        }else{
           dispatch({ type: 'UnMove' });
        }
      }
      window.addEventListener('scroll', handleMouseEnter);
      window.addEventListener('scroll', handleMiniBar);
  
  
    }, []);
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2" style={{position:"relative", fontSize:"30px", background:"none", border:"none"}}>
      <FontAwesomeIcon icon={faBars} style={{color: state.isHovering ? "black" : "white"}} />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Button style={{backgroundColor:"rgb(29, 188, 108)", width:"130px", height:"45px"}}><b>Join Fiverr</b></Button>
        </Offcanvas.Header>
        <Offcanvas.Body style={{display:"flex", flexDirection:"column"}}>
                    <Appp />
                </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function Navigationbar() {
  const { pathname } = useLocation();
  const [isServOpen, setIsServOpen] = useState(false);


 function reducer(state, action) {
   switch (action.type) {
     case 'HOVER':
       return {
         ...state,
         isHovering: true
       };
     case 'UNHOVER':
       return {
         ...state,
         isHovering: false
       };
     case 'Move':
       return {
         ...state,
         isMoving: true
       };
     case 'UnMove':
       return {
         ...state,
         isMoving: false
       };
     default:
       return state;
   }
 }
 
   useEffect(() => {
 
     function handleMouseEnter() {
       if(window.scrollY > 0){
         dispatch({ type: 'HOVER' });
       }else{
          dispatch({ type: 'UNHOVER' });
       }
     }
     function handleMiniBar() {
       if(window.scrollY > 200){
         dispatch({ type: 'Move' });
       }else{
          dispatch({ type: 'UnMove' });
       }
     }
     window.addEventListener('scroll', handleMouseEnter);
     window.addEventListener('scroll', handleMiniBar);
 
 
   }, []);
   
 const [isDragging, setIsDragging] = useState(false);

 const handleIcons = (tabsBox, arrowIcons) => {
   let scrollVal = Math.round(tabsBox.scrollLeft);
   let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;

   arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
   arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal? "flex" : "none";
 }

 const handleIconClick = (icon, tabsBox, arrowIcons) => {
   tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
   setTimeout(() => { handleIcons(tabsBox, arrowIcons) }, 50);
 }

 const handleTabClick = (tab, tabsBox) => {
   tabsBox.querySelector(".active").classList.remove("active");
   tab.classList.add("active");
 }

 const handleMouseDown = () => {
   setIsDragging(true);
 }

 const handleMouseMove = (e, tabsBox) => {
   if(!isDragging) return;
   tabsBox.classList.add("dragging");
   tabsBox.scrollLeft -= e.movementX;
 }

 const handleMouseUp = (tabsBox) => {
   setIsDragging(false);
   tabsBox.classList.remove("dragging");
 }

 useEffect(() => {
   const tabsBox = document.querySelector(".navbar-nav.mini2");
   const allTabs = document.querySelectorAll(".tab");
   const arrowIcons = document.querySelectorAll(".icon i");

   arrowIcons.forEach(icon => {
     icon.addEventListener("click", () => handleIconClick(icon, tabsBox, arrowIcons));
   });

   allTabs.forEach(tab => {
     tab.addEventListener("click", () => handleTabClick(tab, tabsBox));
   });

   tabsBox.addEventListener("mousedown", handleMouseDown);
   tabsBox.addEventListener("mousemove", (e) => handleMouseMove(e, tabsBox));
   document.addEventListener("mouseup", () => handleMouseUp(tabsBox));
 }, [handleIconClick]);
   const toggleServ = () => {
     setIsServOpen(!isServOpen);
   }
   const myRef = createRef();
   console.log(myRef);
     const [state, dispatch] = useReducer(reducer, initialState);
   
     useEffect(() => {
   
       function handleMouseEnter() {
         if(window.scrollY > 0){
           dispatch({ type: 'HOVER' });
         }else{
            dispatch({ type: 'UNHOVER' });
         }
       }
       function handleMiniBar() {
         if(window.scrollY > 200){
           dispatch({ type: 'Move' });
         }else{
            dispatch({ type: 'UnMove' });
         }
       }
       window.addEventListener('scroll', handleMouseEnter);
       window.addEventListener('scroll', handleMiniBar);
   
   
     }, []);
 
     return (
       <div>
       <div className={pathname !== "/one" ? state.isHovering ? "navbar hover" : "navbar" : "navbar hoverr"}>
       <div className={pathname !== "/one" ? state.isHovering ? "ww hover" : "ww" : "ww hoverr"}>

 
         <div className={pathname !== "/one" ? state.isHovering ? "navv hover" : "navv" : "navv hoverr"}>
         {['start'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
         <Link to="/"><h2 className={state.isHovering || pathname !== "/" ? "fiverr hover" : "fiverr"} ><b>fiverr<span style={{color:"green"}}>.</span></b></h2></Link>
         <div className="searchGroup">
           <input type="text" placeholder="What service are you looking for today?" className={pathname !== "/one" ? state.isHovering ? "fiverrSearch hover" : "fiverrSearch" : "fiverrSearch hover"}/>
           <FontAwesomeIcon icon={faMagnifyingGlass} className={pathname !== "/one" ? state.isHovering ? "searchIcon hover" : "searchIcon" : "searchIcon hoverr"} fontSize="30px"/>
         </div>
     <div className="main-nav-item">
     <ul className="navbar-nav">
     
     <li className="nav-item one" >
       <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} onClick={toggleServ}>Business Solutions
       <span className={`fas fa-caret-down second ${isServOpen ? 'rotate' : ''}`}></span>
              </a>
              <ul className={`serv-show ${isServOpen ? 'show1' : ''}`}>
              <li><b><a href="#">Fiverr Pro</a></b>
              <p>Top freelancers and professional business tools for any project</p>
              </li>
                 <li><a href="#"><b>Fiverr Certified</b></a>
                 <p>Your own branded marketplace of certified expoerts</p>
                 </li>
                 <li><a href="#"><b>Fiverr Enterprise</b></a>
                 <p>SaaS to manage your freelance workforce and onboard additional talent</p>
                 </li>
           </ul>
     </li>               
     <li className="nav-item two" >
       <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"}>Explore</a>
     </li>
     <li className="nav-item three" >
       <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"}><FontAwesomeIcon icon={faGlobe} style={{marginRight:"5px"}}fontSize="20px"/>English</a>
     </li>
     <li className="nav-item four" >
       <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"}>Become a Seller</a>
     </li>
     <li className="nav-item five" >
       <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"}>Sign in</a>
     </li>
   </ul>
     <button className={state.isHovering || pathname !== "/" ? "button hover" : "button"}>Join</button>
     </div>
     </div>
 
         <div className={pathname !== "/one" ? state.isMoving ? "small hover" : "small" : "small hoverr"} > 
         <ul className="navbar-nav mini">
             <Link className="link menuLink" to="/one" >
               Graphics & Design
             </Link>
              
             <Link className="link menuLink" to="/one" >
               Digital Marketing
             </Link>
 
             <Link className="link menuLink" to="/one" >
               Writing & Translation
             </Link>
 
             <Link className="link menuLink" to="/one" >
               Video & Animation
             </Link>
 
             <Link className="link menuLink" to="/one" >
               Music & Audio
             </Link>
 
             <Link className="link menuLink" to="/one" >
               Programming & Tech
             </Link>
 
             <Link className="link menuLink" to="/one" >
               Photography
             </Link>
 
             <Link className="link menuLink" to="/one" >
               Business
             </Link>
 
             <Link className="link menuLink" to="/one" >
               AI Services
             </Link>
     </ul>
     </div>
     <div className={pathname !== "/one" ? state.isMoving ? "smallv2 hover" : "smallv2" : "smallv2 hoverr"} > 
         <div className="icon">
        <i id="left" className="fa-solid fa-chevron-left"></i>
      </div>
         <ul className="navbar-nav mini2">
             <Link className="link menuLink" to="/one" >
               Graphics & Design
             </Link>
              
             <Link className="link menuLink" to="/one" >
               Digital Marketing
             </Link>
 
             <Link className="link menuLink" to="/one" >
               Writing & Translation
             </Link>
 
             <Link className="link menuLink" to="/one" >
               Video & Animation
             </Link>
 
             <Link className="link menuLink" to="/one" >
               Music & Audio
             </Link>
 
             <Link className="link menuLink" to="/one" >
               Programming & Tech
             </Link>
 
             <Link className="link menuLink" to="/one" >
               Photography
             </Link>
 
             <Link className="link menuLink" to="/one" >
               Business
             </Link>
 
             <Link className="link menuLink" to="/one" >
               AI Services
             </Link>
     </ul>
     <div className="icon">
        <i id="right" className="fa-solid fa-chevron-right"></i>
      </div>
     </div>
     </div>
     </div></div>
     )
}

export default Navigationbar;
