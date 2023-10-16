
import React, {createRef, useEffect, useReducer, useState, useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import "./NavT3.scss";
import { useMediaQuery } from 'react-responsive';
import Modal from './Modal/Modal2'  
import { Link, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import context from "../../../src/index";
import Appp from './Sidebar';
import Graphic from "./Graphic";
import Digital from "./Digital";
import Writing from "./Wiriting";
import Video from "./Video";
import Music from "./Music";
import Programming from "./Programming";
import Photography from "./Photography";
import Business from "./Business";
import AiService from "./AI Services";
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
  const [location, setLocation] = useState("fixed")
  const [show, setShow] = useState("none")
  const [opcc, setOpcc] = useState(0)
  const [marginTop, setMarginTop] = useState(80)
 const [graphic, setGraphic] = useState(false);  
 const [digital, setDigital] = useState(false);  
 const [writing, setWriting] = useState(false);  
 const [video, setVideo] = useState(false);  
 const [music, setMusic] = useState(false);  
 const [programming, setProgramming] = useState(false);  
 const [photography, setPhotography] = useState(false);  
 const [business , setBusiness] = useState(false);  
 const [aiService , setAiService] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { pathname } = useLocation();
  const [display, setDisplay] = useState("flex");
  const [overflow, setOverflow] = useState('none');
  const [isServOpen, setIsServOpen] = useState(false);
  const [isExpOpen, setIsExpOpen] = useState(false);
  const { langValue, setlangValue, Dollar, setDollar } = useContext(context);
  const openModal = () => {
    setOverflow('hidden');
    setShowModal(prev => !prev);
  };
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
     setIsExpOpen(false);
   }
   const toggleExp = () => {
     setIsExpOpen(!isExpOpen);
     setIsServOpen(false);
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

     useEffect(() => {

      if(pathname === "/rr"){
        setLocation("relative !important");
        setShow("flex");
        setMarginTop(0)
        setOpcc(1)
      }else{
        setLocation("fixed");
        setShow("none");
        setOpcc(0)
        setMarginTop(80)
      }
  }, [pathname]);
  // const lg = useMediaQuery({ maxDeviceWidth: 1700 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1700px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      // 如果視口寬度小於或等於1700px
      setIsMobile(true);
    } else {
      // 如果視口寬度大於1700px
      setIsMobile(false);
    }
  };

     return (
       <div>
        {isMobile ?
                 <style>
        {`              @media screen and (max-width:1700px) {
                .navbar {
                  position: ${location}:
    .ww {
                .smallv2.hover {
          display: flex;}
          .small.hover {
              display: none;
          }}
    }}
    .navbar.hover {
      position: ${location};
      transition: none;
      z-index: 50;
  
  }`}
        </style>:<style>
        {`       
    .navbar {
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              background-color: transparent;
              height: 130px;
              z-index: 99;
position: ${location};
top: -0px; 

.ww {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 140px;
  top: -0px;
  background-color: transparent;

  padding: 0px 1.7%;
  .small {
    position: relative !important;
    width: 1500px;
    height: 50px;
    text-align: center;
    display: ${show};
  }
  .small.hover {
    position: ${location};
    margin-top: ${marginTop}px;
    width: 1500px;
    opacity: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 50;
    height: 50px;
    text-align: center;
        }
        .smallv2 {
          position: ${location};
          display: none;
          z-index: -1;
          opacity: ${opcc};
          top: 0;
      }
      .smallv2.hover {
        position: relative;
        display: none;
        z-index: 99;
        opacity: 1;

  }
        .navbar.hover {
          position: ${location};
          transition: none;
          z-index: 50;
      
      }

      `}
        </style>}
       <div className={pathname !== "/rr" ? state.isHovering ? "navbar hover" : "navbar" : "navbar hover"}>
       <div className={pathname !== "/rr" ? state.isHovering ? "ww hover" : "ww" : "ww hoverr"}>

 
         <div className={pathname !== "/rr" ? state.isHovering ? "navv hover" : "navv" : "navv hoverr"}>
         {['start'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
         <Link to="/"><h2 className={state.isHovering || pathname !== "/" ? "fiverr hover" : "fiverr"} ><b>fiverr<span style={{color:"green"}}>.</span></b></h2></Link>
         <div className="searchGroup">
           <input type="text" placeholder="What service are you looking for today?" className={pathname !== "/rr" ? state.isHovering ? "fiverrSearch hover" : "fiverrSearch" : "fiverrSearch hover"}/>
           <FontAwesomeIcon icon={faMagnifyingGlass} className={pathname !== "/rr" ? state.isHovering ? "searchIcon hover" : "searchIcon" : "searchIcon hoverr"} fontSize="30px"/>
         </div>
     <div className="main-nav-item">
     <ul className="navbar-nav">
     
     <li className="nav-item one" >
       <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} onClick={toggleServ}>Business Solutions
       <span className={`fas fa-caret-down second ${isServOpen ? 'rotate' : ''}`}></span>
              </a>
              <ul className={`serv-show ${isServOpen ? 'show1' : ''}`}>
                <div className="group">
              <li>
                <b><a href="#">Fiverr Pro</a></b>
              <p>Top freelancers and professional business tools for any project</p>
              </li>
              </div>
              <div className="group">
                 <li><a href="#"><b>Fiverr Certified</b></a>
                 <p>Your own branded marketplace of certified expoerts</p>
                 </li>
                 </div>
                 <div className="group">
                 <li><a href="#"><b>Fiverr Enterprise</b></a>
                 <p>SaaS to manage your freelance workforce and onboard additional talent</p>
                 </li>
                 </div>
           </ul>
     </li>               
     <li className="nav-item two" >
       <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} onClick={toggleExp}>Explore
       <span className={`fas fa-caret-down third ${isExpOpen ? 'rotate' : ''}`}></span></a>
       <ul className={`serv-explore ${isExpOpen ? 'explore1' : ''}`}>
       <div className="group">
              <li><b><a href="#">Discover</a></b>
              <p>Inspiring projects made on Fiverr</p>
              </li>
              </div>
              <div className="group">
                 <li><a href="#"><b>Community</b></a>
                 <p>Connect with Fiverr’s team and community</p>
                 </li>
                 </div>
                                 <div className="group">
                 <li><a href="#"><b>Guides</b></a>
                 <p>In-depth guides covering business topics</p>
                 </li>
                 </div>
                                 <div className="group">
                 <li><a href="#"><b>Podcast</b></a>
                 <p>Inside tips from top business minds</p>
                 </li>
                 </div>
                                 <div className="group">
                 <li><a href="#"><b>Learn</b></a>
                 <p>Professional online courses, led by experts</p>
                 </li>
                 </div>
                                 <div className="group">
                 <li><a href="#"><b>Blog</b></a>
                 <p>News, information and community stories</p>
                 </li>
                 </div>
                                 <div className="group">
                 <li><a href="#"><b>Logo Maker</b></a>
                 <p>Create your logo instantly</p>
                 </li>
                 </div>
                                 <div className="group">
                 <li><a href="#"><b>Fiverr Workspace</b></a>
                 <p>One place to manage your business</p>
                 </li>
                 </div>
           </ul>
     </li>
     <li className="nav-item three" >
       <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} onClick={openModal} ><FontAwesomeIcon icon={faGlobe}  style={{marginRight:"5px"}}fontSize="18px"/>{langValue}</a>

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
 
         <div className={pathname !== "/rr" ? state.isMoving ? "small hover" : "small" : "small hover"} > 
         <ul className="navbar-nav mini">
         <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setGraphic(true);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Graphics & Design
            </Link>
             
            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setDigital(true);setAiService(false);setBusiness(false);setGraphic(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Digital Marketing
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setWriting(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Writing & Translation
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setVideo(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Video & Animation
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setMusic(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setProgramming(false);setPhotography(false);}}>
              Music & Audio
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setProgramming(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setPhotography(false);}}>
              Programming & Tech
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setPhotography(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);}}>
              Photography
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setBusiness(true);setAiService(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Business
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setAiService(true);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              AI Services
            </Link>
    </ul>
     </div>
     <div className={pathname !== "/rr" ? state.isMoving ? "smallv2 hover" : "smallv2" : "smallv2 hover"} > 
         <div className="icon">
        <i id="left" className="fa-solid fa-chevron-left"></i>
      </div>
         <ul className="navbar-nav mini2">
         <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setGraphic(true);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Graphics & Design
            </Link>
             
            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setDigital(true);setAiService(false);setBusiness(false);setGraphic(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Digital Marketing
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setWriting(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Writing & Translation
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setVideo(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Video & Animation
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setMusic(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setProgramming(false);setPhotography(false);}}>
              Music & Audio
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setProgramming(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setPhotography(false);}}>
              Programming & Tech
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setPhotography(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);}}>
              Photography
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setBusiness(true);setAiService(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Business
            </Link>

            <Link className="link menuLink" to="/rr" onMouseEnter={()=>{setAiService(true);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              AI Services
            </Link>
     </ul>
     <div className="icon">
        <i id="right" className="fa-solid fa-chevron-right"></i>
      </div>
     </div>
     {graphic === true && <Graphic  setGraphic={setGraphic}/>}
    {digital === true && <Digital  setDigital={setDigital}/>}
    {writing === true && <Writing setWriting={setWriting}/>}
    {video === true && <Video setVideo={setVideo}/>}
    {music === true && <Music setMusic={setMusic}/>}
    {programming === true && <Programming setProgramming={setProgramming}/>}
    {photography === true && <Photography setPhotography={setPhotography}/>}
    {business === true && <Business setBusiness={setBusiness}/>}
    {aiService === true && <AiService setAiService={setAiService}/>}
     </div>     

  </div>     <div className="languageModel">
<Modal showModal={showModal}     setDisplay={display} setShowModal={setShowModal}
    setOverflow={overflow}/>
     </div></div>
     )
}

export default Navigationbar;
