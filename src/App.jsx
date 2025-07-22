// // // // // import React, { useCallback } from 'react';
// // // // // import { Route, Routes,useLocation} from 'react-router-dom';
// // // // // import Particles from 'react-tsparticles';
// // // // // import { loadFull } from 'tsparticles'; // ✅ correct import

// // // // // import Home from './containers/home';
// // // // // import Contact from './containers/contact';
// // // // // import Portfolio from './containers/portfolio';
// // // // // import particles from './particles';
// // // // // import Resume from './containers/resume';
// // // // // import About from './containers/about';
// // // // // import Skills from './containers/skills';
// // // // // import Navbar from './components/navbar';

// // // // // function App() {
// // // // //   const location=useLocation();
// // // // //   console.log(location);
// // // // //   const particlesInit = (async (engine) => {
// // // // //     await loadFull(engine);
// // // // //   });
// // // // //   const renderparticlesOnlyHome=location.pathname=='/';

// // // // //   return (
// // // // //     <div className="app">{
// // // // //       renderparticlesOnlyHome&&<Particles id="tsparticles" init={particlesInit}  options={particles}/>
// // // // //     }
      
// // // // //       <Navbar />
// // // // //       <div className='App-main-page-content'>
// // // // //       <Routes>
// // // // //         <Route index path="/" element={<Home />} />
// // // // //         <Route path="/about" element={<About />} />
// // // // //         <Route path="/resume" element={<Resume />} />
// // // // //         <Route path="/skills" element={<Skills />} />
// // // // //         <Route path="/portfolio" element={<Portfolio />} />
// // // // //         <Route path="/contact" element={<Contact />} />
// // // // //       </Routes>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // import React, { useEffect, useState } from 'react';
// // // import Home from './containers/home';
// // // import Contact from './containers/contact';
// // // import Portfolio from './containers/portfolio';
// // // import particles from './particles';
// // // import Resume from './containers/resume';
// // // import About from './containers/about';
// // // import Skills from './containers/skills';
// // // import Navbar from './components/navbar';

// // // import './App.scss';

// // // function App() {
// // //   const [activeSection, setActiveSection] = useState('home');

// // //   const handleScroll = () => {
// // //     const sections = document.querySelectorAll('section');
// // //     const scrollY = window.scrollY;

// // //     sections.forEach((section) => {
// // //       const sectionTop = section.offsetTop - 100;
// // //       const sectionHeight = section.offsetHeight;
// // //       if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
// // //         setActiveSection(section.getAttribute('id'));
// // //       }
// // //     });
// // //   };

// // //   useEffect(() => {
// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   return (
// // //     <div className="app">
// // //       <Navbar active={activeSection} />
// // //       <div className="scroll-container">
// // //         <section id="home"><Home /></section>
// // //         <section id="about"><About   /></section>
// // //         <section id="resume"><Resume /></section>
// // //         <section id="skills"><Skills /></section>
// // //         <section id="portfolio"><Portfolio /></section>
// // //         <section id="contact"><Contact /></section>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import React, { useEffect, useState } from 'react';
// // import Home from './containers/home';
// // import Contact from './containers/contact';
// // import Portfolio from './containers/portfolio';
// // import particles from './particles';
// // import Resume from './containers/resume';
// // import About from './containers/about';
// // import Skills from './containers/skills';
// // import Navbar from './components/navbar';

// // import './App.scss';

// // function App() {
// //   const [activeSection, setActiveSection] = useState('home');

// //   const handleScroll = () => {
// //     const sections = document.querySelectorAll('section');
// //     const scrollY = window.scrollY;

// //     sections.forEach((section) => {
// //       const sectionTop = section.offsetTop - 100;
// //       const sectionHeight = section.offsetHeight;
// //       if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
// //         setActiveSection(section.getAttribute('id'));
// //       }
// //     });
// //   };

// //   useEffect(() => {
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <div className="app">
// //       <Navbar active={activeSection} />
// //       <div className="scroll-container">
// //         <section id="home"><Home /></section>
// //         <section id="about"><About /></section>
// //         <section id="resume"><Resume /></section>
// //         <section id="skills"><Skills /></section>
// //         <section id="portfolio"><Portfolio /></section>
// //         <section id="contact"><Contact /></section>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// // App.jsx
// import React, { useEffect, useRef, useState } from "react";
// import Home from './containers/home';
// import Contact from './containers/contact';
// import Portfolio from './containers/portfolio';
// import particles from './particles';
// import Resume from './containers/resume';
// import About from './containers/about';
// import Skills from './containers/skills';
// import Navbar from './components/navbar';
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// import "./App.scss";


// function App() {
//   const [activeSection, setActiveSection] = useState("home");

//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const resumeRef = useRef(null);
//   const skillsRef = useRef(null);
//   const portfolioRef = useRef(null);
//   const contactRef = useRef(null);

//   const sectionRefs = {
//     home: homeRef,
//     about: aboutRef,
//     resume: resumeRef,
//     skills: skillsRef,
//     portfolio: portfolioRef,
//     contact: contactRef,
//   };

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY + window.innerHeight / 2;
//     Object.entries(sectionRefs).forEach(([key, ref]) => {
//       const section = ref.current;
//       if (section) {
//         const { offsetTop, offsetHeight } = section;
//         if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//           setActiveSection(key);
//         }
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   return (
//     <div className="app">
//       <Particles id="tsparticles" init={particlesInit} options={{
//         background: { color: { value: "#000" } },
//         fpsLimit: 60,
//         particles: {
//           color: { value: "#ffffff" },
//           links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
//           move: { enable: true, speed: 2 },
//           number: { value: 50 },
//           opacity: { value: 0.5 },
//           shape: { type: "circle" },
//           size: { value: { min: 1, max: 5 } },
//         },
//         detectRetina: true,
//       }} />
//       <Navbar active={activeSection} refs={sectionRefs} />
//       <section id="home" ref={homeRef}><Home /></section>
//       <section id="about" ref={aboutRef}><About /></section>
//       <section id="resume" ref={resumeRef}><Resume /></section>
//       <section id="skills" ref={skillsRef}><Skills /></section>
//       <section id="portfolio" ref={portfolioRef}><Portfolio /></section>
//       <section id="contact" ref={contactRef}><Contact /></section>
//     </div>
//   );
// }
// export default App;
import React, { useRef, useEffect } from 'react';

import './App.scss';


import Home from './containers/home';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import particles from './particles';
import Resume from './containers/resume';
import About from './containers/about';
import Skills from './containers/skills';
import Navbar from './components/navbar';

function App() {
  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    resume: useRef(null),
    skills: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionsRef[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar onNavClick={scrollToSection} />
      <div className="sections">
        <section ref={sectionsRef.home} id="home"><Home /></section>
        <section ref={sectionsRef.about} id="about"><About /></section>
        <section ref={sectionsRef.resume} id="resume"><Resume /></section>
        <section ref={sectionsRef.skills} id="skills"><Skills /></section>
        <section ref={sectionsRef.portfolio} id="portfolio"><Portfolio /></section>
        <section ref={sectionsRef.contact} id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;