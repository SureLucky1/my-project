import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.scss"
import context from "../../../src/index";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
function Appp() {
  const { langValue, setlangValue, Dollar, setDollar } = useContext(context);
  const [isOpen, setIsOpen] = useState(false);
  const [isFeatOpen, setIsFeatOpen] = useState(false);
  const [isFeattOpen, setIsFeattOpen] = useState(false);
  const [isMarketingOpen, setIsMarketingOpen] = useState(false);
  const [isWritingOpen, setIsWritingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isDataOpen, setIsDataOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isLifestyleOpen, setIsLifestyleOpen] = useState(false);
  const [isPhotographyOpen, setIsPhotographyOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);

  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isSolutionssOpen, setIsSolutionssOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isDollarOpen, setIsDollarOpen] = useState(false);

  const [activeMainNav, setActiveMainNav] = useState('Dashboard');
  const toggleFeat = () => {
    setIsFeatOpen(!isFeatOpen);
  }

  const toggleFeatt = () => {
    setIsFeattOpen(!isFeattOpen);
  }

  const toggleMarketing = () => {
    setIsMarketingOpen(!isMarketingOpen);
  }
  const toggleWriting = () => {
    setIsWritingOpen(!isWritingOpen);
  }
  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
  }
  const toggleMusic = () => {
    setIsMusicOpen(!isMusicOpen);
  }
  const toggleTech = () => {
    setIsTechOpen(!isTechOpen);
  }
  const toggleData = () => {
    setIsDataOpen(!isDataOpen);
  }
  const toggleBusiness = () => {
    setIsBusinessOpen(!isBusinessOpen);
  }
  const toggleLifestyle = () => {
    setIsLifestyleOpen(!isLifestyleOpen);
  }
  const togglePhotography = () => {
    setIsPhotographyOpen(!isPhotographyOpen);
  }
  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  }
  const toggleAi = () => {
    setIsAiOpen(!isAiOpen);
  }

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  }
  const toggleSolutionss = () => {
    setIsSolutionssOpen(!isSolutionssOpen);
  }
  const toggleLang = () => {
    setIsLangOpen(!isLangOpen);
  }
  const toggleDollar = () => {
    setIsDollarOpen(!isDollarOpen);
  }

  const handleMainNavClick = (name) => {
    setActiveMainNav(name);
  }


  return (
    <div className='sidebarr'>

      <nav className={`sidebar ${isOpen ? 'show' : ''}`}>

        <ul>
          <li className={activeMainNav === 'Dashboard' ? 'active' : ''} onClick={() => handleMainNavClick('Dashboard')}>
            <a href="#">Sign in</a>
          </li>

          <li>
            <a href="#" className="feat-btn" onClick={toggleFeat}>
              Browse categories
              <span className={`fas fa-caret-down second ${isFeatOpen ? 'rotate' : ''}`} style={{position: "absolute",
               }}/>
            </a>
            <ul className={`feat-show ${isFeatOpen ? 'show' : ''}`}>
              
              <li>
                <a href="#" className="featt-btn" onClick={toggleFeatt}>
                  Graphics & Design
                  <span className={`fas fa-caret-down firstt ${isFeattOpen ? 'rotate' : ''}`}/>
                </a>
                <ul className={`featt-show ${isFeattOpen ? 'show' : ''}`}>
                <li><a href="#">Logo Design</a></li>
                  <li><a href="#">Brand Style Guides</a></li>
                  <li><a href="#">Game Art</a></li>
                  <li><a href="#">Graphics for Streamers</a></li>
                  <li><a href="#">Business Cards & Stationery</a></li>
                  <li><a href="#">Website Design</a></li>
                  <li><a href="#">App Design</a></li>
                  <li><a href="#">UX Design</a></li>
                  <li><a href="#">Landing Page Design</a></li>
                  <li><a href="#">Resume Design</a></li>
                  <li><a href="#">Illustration</a></li>
                  <li><a href="#">Children&apos;s Book Illustration</a></li>
                  <li><a href="#">AI Artists</a></li>
                  <li><a href="#">NFT Art</a></li>
                  <li><a href="#">Pattern Design</a></li>
                  <li><a href="#">Fonts & Typography</a></li>
                  <li><a href="#">Poster Design</a></li>
                  <li><a href="#">Brochure Design</a></li>
                  <li><a href="#">Flyer Design Design</a></li>
                  <li><a href="#">Book Design</a></li>
                  <li><a href="#">Album Cover Design</a></li>
                  <li><a href="#">Podcast Cover Art</a></li>
                  <li><a href="#">Packaging & Label Design</a></li>
                  <li><a href="#">Storyboards</a></li>
                  <li><a href="#">Social Media Design</a></li>
                  <li><a href="#">Catalog Design</a></li>
                  <li><a href="#">Menu Design</a></li>
                  <li><a href="#">Invitation Design</a></li>
                  <li><a href="#">Portraits & Caricatures</a></li>
                  <li><a href="#">Cartoons & Comics</a></li>
                  <li><a href="#">Tattoo Design</a></li>
                  <li><a href="#">Signage Design</a></li>
                  <li><a href="#">Web Banners</a></li>
                  <li><a href="#">Image Editing</a></li>
                  <li><a href="#">Architecture & Interior Design</a></li>
                  <li><a href="#">Landscape Design</a></li>
                  <li><a href="#">Building Engineering</a></li>
                  <li><a href="#">Building Information Modeling</a></li>
                  <li><a href="#">Character Modeling</a></li>
                  <li><a href="#">Industrial & Product Design</a></li>
                  <li><a href="#">Trade Booth Design</a></li>
                  <li><a href="#">T-Shirts & Merchandise</a></li>
                  <li><a href="#">Fashion Design</a></li>
                  <li><a href="#">Jewelry Design</a></li>
                  <li><a href="#">Presentation Design</a></li>
                  <li><a href="#">Email Design</a></li>
                  <li><a href="#">Icon Design</a></li>
                  <li><a href="#">Infographic Design</a></li>
                  <li><a href="#">Car Wraps</a></li>
                  <li><a href="#">Vector Tracing</a></li>
                  <li><a href="#">Other</a></li>
                  <li><a href="#">Twitch Store</a></li>
                  <li><a href="#">Design Advice</a></li>
                  <li><a href="#">All in Graphic & Design</a></li>
                </ul>
              </li>

              <li>
                <a href="#" className="digital-Marketing-btn" onClick={toggleMarketing}>
                  Digital Marketing
                  <span className={`fas fa-caret-down firsttt ${isMarketingOpen ? 'rotate' : ''}`}/>
                </a>
                <ul className={`digital-Marketing-show ${isMarketingOpen ? 'show' : ''}`}>
                <li><NavDropdown.Item href="#action3" className="footItem">
                    Social Media Marketing
                    </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action4" className="footItem">
                Guest Posting
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Search Engine Optimization (SEO)
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Public Relations
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Book & eBook Marketing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Podcast Marketing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Video Marketing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Other
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Email Marketing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Text Message Marketing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Crowdfunding
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Search Engine Marketing (SEM)
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Display Advertising
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Web Traffic
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Web Analytics
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Marketing Advice
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Influencer Marketing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Marketing Strategy
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Community Management
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Local SEO
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                E-Commerce Marketing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Affiliate Marketing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Mobile App Marketing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Music Promotion
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                All in Digital Marketing
                </NavDropdown.Item></li>
                </ul>
              </li>

              <li>
                <a href="#" className="writing-translation-btn" onClick={toggleWriting}>
                Writing & Translation
                  <span className={`fas fa-caret-down firsttt ${isWritingOpen ? 'rotate' : ''}`}/>
                </a>
                <ul className={`writing-translation-show ${isWritingOpen ? 'show' : ''}`}>
                <li><NavDropdown.Item href="#action3" className="footItem">
                    Articles & Blog Posts
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action4" className="footItem">
                Proofreading & Editing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Translation
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Website Content
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Product Descriptions
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Book & eBook Writing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Book Editing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Resume Writing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Brand Voice & Tone
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                UX Writing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Email Copy
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Technical Writing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Write Papers
                </NavDropdown.Item></li> 
                <li><NavDropdown.Item href="#action5" className="footItem">
                Localization
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Content Strategy
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Custom Writing Prompts
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Sales Copy
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Social Media Copy
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Podcast Writing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Ad Copy
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Cover Letter
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Press Release
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Case Studies
                </NavDropdown.Item> </li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                LinkedIn Profiles
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Job Descriptions
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Creative Writing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Beta Reading
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Scriptwriting
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Business Names & Slogans
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                eLearning Content Development
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Speechwriting
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Grant Writing
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Transcription
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Research & Summaries
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Other
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Writing Advice
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                All in Writing & Translation
                </NavDropdown.Item></li>
                </ul>
              </li>

              <li>
                <a href="#" className="video-animation-btn" onClick={toggleVideo}>
                Video & Animation
                  <span className={`fas fa-caret-down firsttt ${isVideoOpen ? 'rotate' : ''}`}/>
                </a>
                <ul className={`video-animation-show ${isVideoOpen ? 'show' : ''}`}>
                      <li><NavDropdown.Item href="#action3">
                        Animated Explainers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action4">
                        Video Editing
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Video Ads & Commercials
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Animated GIFs
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Logo Animation
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Intro & Outro Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Character Animation
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        3D Product Animation
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Social Media Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Music Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        NFT Animation
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Animation for Kids
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Video Art
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Animation for Streamers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Live Action Explainers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Filmed Video Production
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Videographers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        E-Commerce Product Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Spokespersons Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Subtitles & Captions
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Visual Effects
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Lottie & Web Animation
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        eLearning Video Production
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Article to Video
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        UGC Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Screencasting Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Rigging
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Corporate Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Crowdfunding Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Slideshow Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Video Templates Editing
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        App & Website Previews
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Book Trailers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Meditation Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Real Estate Promos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Game Trailers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Video Advice
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Other
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        All in Video & Animation
                      </NavDropdown.Item></li>
                </ul>
              </li>

              <li>
                <a href="#" className="music-audio-btn" onClick={toggleMusic}>
                Music & Audio
                  <span className={`fas fa-caret-down firsttt ${isMusicOpen ? 'rotate' : ''}`}/>
                </a>
                <ul className={`music-audio-show ${isMusicOpen ? 'show' : ''}`}>
                      <li><NavDropdown.Item href="#action3">
                        Voice Over
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action4">
                        Mixing & Mastering
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Producers & Composers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Singers & Vocalists
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Session Musicians
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Songwriters
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Podcast Production
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Beat Making
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Sound Design
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Audiobook Production
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Online Music Lessons
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Audio Editing
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Audio Ads Production
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Music Transcription
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Vocal Tuning
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        DJ Drops & Tags
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        DJ Mixing
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Remixing & Mashups
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Synth Presets
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Meditation Music
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Jingles & Intros
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Audio Logo & Sonic Branding
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Music & Audio Advice
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Voice Synthesis & AI
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Other
                      </NavDropdown.Item>
           </li>           <li><NavDropdown.Item href="#action5">
                       All in Music & Audio
                      </NavDropdown.Item></li>
                </ul>
              </li>

              <li>
                <a href="#" className="programming-tech-btn" onClick={toggleTech}>
                  Programming & Tech
                  <span className={`fas fa-caret-down firsttt ${isTechOpen ? 'rotate' : ''}`}/>
                </a>
                <ul className={`programming-tech-show ${isTechOpen ? 'show' : ''}`}>
                      <li><NavDropdown.Item href="#action3">
                      Website Development
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action4">
                        Website Maintenance
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Game Development
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Development for Streamers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Software Development
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Mobile App Development
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        AI Development
                      </NavDropdown.Item>
  </li>                    <li><NavDropdown.Item href="#action5">
                       Blockchain & Cryptocurrency
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        NFT Development
                      </NavDropdown.Item>
 </li>                     <li><NavDropdown.Item href="#action5">
                        Electronics Engineering
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        DevOps & Cloud
                      </NavDropdown.Item>
  </li>                    <li><NavDropdown.Item href="#action5">
                        Cybersecurity
                      </NavDropdown.Item>
   </li>                   <li><NavDropdown.Item href="#action5">
                        Support & IT
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Online Coding Lessons
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Chatbot Development
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Convert Files
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        User Testing
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        QA & Review
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Other
                      </NavDropdown.Item></li> 
                     <li><NavDropdown.Item href="#action5">
                        Trading Bots Development
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       All in Programming & Tech
                      </NavDropdown.Item></li>
                </ul>
              </li>

              <li>
                <a href="#" className="data-btn" onClick={toggleData}>
                  Data
                  <span className={`fas fa-caret-down firsttt ${isDataOpen ? 'rotate' : ''}`}/>
                </a>
                <ul className={`data-show ${isDataOpen ? 'show' : ''}`}>
                      <li><NavDropdown.Item href="#action3">
                        Data Governance & Protection
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action4">
                        Data Mining & Scraping
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Data Labeling & Annotation
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Data Formatting & Cleaning
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Databases
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Data Processing
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Data Engineering
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Data Analytics
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Data Visualization
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Data Science & AI
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Data Entry
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Other
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       All in Data
                      </NavDropdown.Item></li>
                </ul>
              </li>

              <li>
                <a href="#" className="business-btn" onClick={toggleBusiness}>
Business
                  <span className={`fas fa-caret-down firsttt ${isBusinessOpen ? 'rotate' : ''}`}/>
                </a>
                <ul className={`business-show ${isBusinessOpen ? 'show' : ''}`}>
                      <li><NavDropdown.Item href="#action3">
                        ERP Management
                        </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action4">
                        CRM Management
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Sales
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Virtual Assistant
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Market Research
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Business Plans
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Customer Care
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Project Management
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      HR Consulting
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      E-Commerce Management
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Event Management
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Legal Consulting
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Financial Consulting
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Business Consulting
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Supply Chain Management
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Presentations
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Game Concept Design
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Other
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Fact Checking
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        AI Consulting
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       All in Business
                      </NavDropdown.Item></li>
                </ul>
              </li>

              <li>
                <a href="#" className="lifestyle-btn" onClick={toggleLifestyle}>
                Lifestyle
                  <span className={`fas fa-caret-down firsttt ${isLifestyleOpen ? 'rotate' : ''}`}/>
                </a>
                <ul className={`lifestyle-show ${isLifestyleOpen ? 'show' : ''}`}>
                      <li><NavDropdown.Item href="#action3">
                        Online Tutoring
                        </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action4">
                        Language Lessons
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Life Coaching
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Career Counseling
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Gaming
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Generative AI Lessons
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Arts & Crafts
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Embroidery Digitizing
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Astrology & Psychics
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Modeling & Acting
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Fitness
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Nutrition
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Wellness
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Traveling
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Puzzle & Game Creation
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Styling & Beauty
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Trend Forecasting
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Cosmetics Formulation
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Family & Genealogy
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Greeting Cards & Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Collectibles
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Other
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       All in Lifestyle
                      </NavDropdown.Item></li>
                </ul>
              </li>

              <li>
                <a href="#" className="photography-btn" onClick={togglePhotography}>
                Photography
                  <span className={`fas fa-caret-down firsttt ${isPhotographyOpen ? 'rotate' : ''}`}/>
                </a>
                <ul className={`photography-show ${isPhotographyOpen ? 'show' : ''}`}>
                      <li><NavDropdown.Item href="#action3">
                        Product Photographers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action4">
                        Portrait Photographers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Lifestyle & Fashion Photographers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Real Estate Photographers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       Event Photographers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Food Photographers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Scenic Photographers
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Photography Advice
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                      Other
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       All in Photography
                      </NavDropdown.Item></li>
                </ul>
              </li>

              <li>
                <a href="#" className="End-to-End Projects-btn" onClick={toggleProjects}>
                End-to-End Projects
                  <span className={`fas fa-caret-down firsttt ${isProjectsOpen ? 'rotate' : ''}`}/>
                </a>
                <ul className={`End-to-End Projects-show ${isProjectsOpen ? 'show' : ''}`}>
                      <li><NavDropdown.Item href="#action3">
                        Build a Website
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action4">
                        Develop a Brand Identity
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Digital Marketing Management
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                       All in End-to-End Projects
                      </NavDropdown.Item></li>
                </ul>
              </li>

              <li>
                <a href="#" className="ai-services-btn" onClick={toggleAi}>
                AI Services
                  <span className={`fas fa-caret-down firsttt ${isAiOpen ? 'rotate' : ''}`}/>
                </a>
                <ul className={`ai-services-show ${isAiOpen ? 'show' : ''}`}>
                      <li><NavDropdown.Item href="#action3">
                        AI Artists
                        </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action4">
                        AI Development
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        AI Models
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        AI Music Videos
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        AI Content Editing
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        Fact Checking
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5">
                        All in AI Services
                      </NavDropdown.Item></li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li>
            <a href="#" className="explore-btn" onClick={toggleExplore}>
            Explore
              <span className={`fas fa-caret-down second ${isExploreOpen ? 'rotate' : ''}`}/>
            </a>
            <ul className={`explore-show ${isExploreOpen ? 'show1' : ''}`}>
                <li><NavDropdown.Item href="#action3" className="footItem">
                Careers
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action4" className="footItem">
                Guides
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Learn
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Logo Maker
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Community
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Podcast
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action5" className="footItem">
                Blog
                </NavDropdown.Item>
              </li>  <li><NavDropdown.Item href="#action5" className="footItem">
                Fiverr Workspace
                </NavDropdown.Item></li>
            </ul>
          </li>

          <li>
            <a href="#" className="business-solutions-btn" onClick={toggleSolutionss}>
            <b>Business solutions</b>
              <span className={`fas fa-caret-down second ${isSolutionssOpen ? 'rotate' : ''}`}/>
            </a>
            <ul className={`business-solutions-show ${isSolutionssOpen ? 'show1' : ''}`}>
            <li><a href="#">Social Media Marketing</a></li>
                  <li><a href="#">Search Engine Optimization (SEO)</a></li>
                  <li><a href="#">Public Relations</a></li>
                  <li><a href="#">Book & eBook Marketing</a></li>
                  <li><a href="#">Podcast Marketing</a></li>
                  <li><a href="#">Video Marketing</a></li>
                  <li><a href="#">Other</a></li>
                  <li><a href="#">Email Marketing</a></li>
                  <li><a href="#">Text Message Marketing</a></li>
            </ul>
          </li>
          <Navbar.Brand href="#" style={{position: "relative",
        left: "3px"
}}><b>General</b></Navbar.Brand>
                  <hr />
                  <Navbar.Brand href="#" style={{position: "relative",
        left: "3px"
}}>Home</Navbar.Brand>
          <li>
            <a href="#" className="lang-btn" onClick={toggleLang}>
              {langValue} <FontAwesomeIcon icon={faGlobe} fontSize="20px"/>
              <span className={`fas fa-caret-down second ${isLangOpen ? 'rotate' : ''}`}/>
            </a>
            <ul className={`lang-show ${isLangOpen ? 'show1' : ''}`}>
                      <li><NavDropdown.Item href="#action3" onClick={() =>{setlangValue("English"); setIsLangOpen(!isLangOpen);}}>
                      English
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action4" onClick={() =>{setlangValue("Deutsch"); setIsLangOpen(!isLangOpen);}}>
                        Deutsch
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() =>{setlangValue("Español"); setIsLangOpen(!isLangOpen);}}>
                        Espanol
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() =>{setlangValue("Français"); setIsLangOpen(!isLangOpen);}}>
                        Francais
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() =>{setlangValue("Português"); setIsLangOpen(!isLangOpen);}}>
                        Portugues
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() =>{setlangValue("Italiano"); setIsLangOpen(!isLangOpen);}}>
                        Italiano
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() =>{setlangValue("Nederlands"); setIsLangOpen(!isLangOpen);}}>
                        Nederlands
                      </NavDropdown.Item></li>
            </ul>
          </li>
          <li>
            <a href="#" className="dollar-btn"onClick={toggleDollar} >
              {Dollar}
              <span className={`fas fa-caret-down second ${isDollarOpen ? 'rotate' : ''}`}/>
            </a>
            <ul className={`dollar-show ${isDollarOpen ? 'show1' : ''}`}>
                      <li><NavDropdown.Item href="#action3" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("US$ USD")}}>
                      USD - US$
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action4" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("€ EUR")}}>
                        EUR - €
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("£ GBP")}}>
                        GBP - £
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("A$ AUD")}}>
                        AUD - A$
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("CA$ CAD")}}>
                        CAD - CA$
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("₪ ILS")}}>
                        ILS - ₪
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("R$ BRL")}}>
                        BRL - R$
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("HK$ HKD")}}>
                        HKD - HK$
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("SEK")}}>
                        SEK - SEK
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("NZ$ NZD")}}>
                        NZD - NZ$
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("SGD")}}>
                        SGD - SGD
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("CHF")}}>
                        CHF - CHF
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("ZAR")}}>
                        ZAR - ZAR
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("CN¥ CNY")}}>
                        CNY - CNY
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("₹ INR")}}>
                        INR - ₹
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("MYR")}}>
                        MYR - MYR
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("MX$ MXN")}}>
                        MXN - MX$
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("PKR")}}>
                        PKR - PKR
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("₱ PHP")}}>
                        PHP - ₱
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("NT$ TWD")}}>
                        TWD - NT$
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("THB")}}>
                        THB - THB
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("TRY")}}>
                        TRY - TRY
                      </NavDropdown.Item></li>
                      <li><NavDropdown.Item href="#action5" onClick={() => {setIsDollarOpen(!isDollarOpen); setDollar("AED")}}>
                        AED - AED
                      </NavDropdown.Item></li>
            </ul>
          </li>

        </ul>
      </nav>

    </div>
  );
}

export default Appp;