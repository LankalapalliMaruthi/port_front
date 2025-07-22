// import React from 'react'
// import PageHeader from '../../components/pageheader';
// import {BsInfoCircleFill} from 'react-icons/bs'
// import {Animate} from "react-simple-animate" 
// import {DiApple,DiAndroid}from 'react-icons/di';
// import { FaLaptopCode } from "react-icons/fa";
// import { FaServer } from "react-icons/fa";
// import { FaGlobe } from "react-icons/fa";
// import {FaDev,FaDatabase}from 'react-icons/fa';
// import "./style.scss"
// const personalDetails=[
//   {
//   label:"Name",
//   value:"Maruthi"},
//   {
//   label:"Age",
//   value:"23"},
//   {
//   label:"Address",
//   value:"Hyderabad"},
//   {
//   label:"Mail",
//   value:"maruthilankalapalli@gmail.com"},
//   {
//   label:"Contact No",
//   value:"9390551355"},
// ]
// const jobSummary="Hi! I'm Maruthi Lankalapalli, a passionate and dedicated Full-Stack Developer from Andhra Pradesh, India 🇮🇳.I specialize in building robust, responsive, and scalable web applications, handling both frontend and backend development. I enjoy turning ideas into real, usable products and take pride in writing clean, efficient, and maintainable code.I believe in continuous growth and learning, and I'm always exploring new technologies and tools to enhance the development process. Whether it's developing user interfaces or designing efficient APIs, I strive to deliver impactful digital solutions.";
// const About= ()=> {
//   return (
//     <section id="about" className='about'>
//       <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}
//       ></PageHeader>
//       <div className='about-content'>
//       <div className='about-content-personalWrapper'>
//       <Animate play duration={1.5} delay={1}
//               start={{transform:'translateX(-900px)'}} end={{transform:'translatex(0px)'}}>
//       <h3>Full Stack Developer</h3>
//       <p>{jobSummary}</p> 
      
//       <h3 className='personalInfoHeader'>Personal Information</h3>
//       <ul>
//         {personalDetails.map((item,i)=>(<li key={i}>
//           <span className='title'>{item.label}</span>
//           <span className='value'>{item.value}</span>
          
//           </li>))}
//       </ul>
//       </Animate>
//       </div>
//       <div className='about-content-servicesWrapper'>
//         <Animate play duration={1.5} delay={1}
//               start={{transform:'translateX(600px)'}} end={{transform:'translatex(0px)'}}>
//         <div className='about-content-servicesWrapper-innerContent'>
//         <div ><FaDatabase size={60} color='yellow'></FaDatabase></div>
//          <div ><DiAndroid size={60} color='yellow'></DiAndroid></div>
//           <div ><FaLaptopCode size={60} color='yellow'></FaLaptopCode></div>
//            <div ><FaServer size={60} color='yellow'></FaServer></div>
//             <div ><FaGlobe size={60} color='yellow'></FaGlobe></div>
//           </div>
//           </Animate>
//       </div>
//       </div>
//     </section>
//   )
// }

// export default About;
import React from 'react'
import PageHeader from '../../components/pageheader';
import { FaUserAlt } from "react-icons/fa";  
import { Animate } from "react-simple-animate";
import { DiAndroid } from 'react-icons/di';
import { FaLaptopCode, FaServer, FaGlobe, FaDatabase } from 'react-icons/fa';
import "./style.scss";

const personalDetails = [
  { label: "Name", value: "Maruthi" },
  { label: "Age", value: "23" },
  { label: "Address", value: "Hyderabad" },
  { label: "Mail", value: "maruthilankalapalli@gmail.com" },
  { label: "Contact No", value: "9390551355" },
];

const jobSummary = "Hi! I'm Maruthi Lankalapalli, a passionate and dedicated Full-Stack Developer from Andhra Pradesh, India 🇮🇳. I specialize in building robust, responsive, and scalable web applications, handling both frontend and backend development. I enjoy turning ideas into real, usable products and take pride in writing clean, efficient, and maintainable code. I believe in continuous growth and learning, and I'm always exploring new technologies and tools to enhance the development process. Whether it's developing user interfaces or designing efficient APIs, I strive to deliver impactful digital solutions.";

const About = () => {
  return (
    <section id="about" className='about'>
      <PageHeader
        headerText="About Me"
        icon={<FaUserAlt size={30} />}
      />
      <div className='about-content'>
        <div className='about-content-personalWrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: 'translateX(-900px)' }}
            end={{ transform: 'translatex(0px)' }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
            <h3 className='personalInfoHeader'>Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className='title'>{item.label}</span>
                  <span className='value'>{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className='about-content-servicesWrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: 'translateX(600px)' }}
            end={{ transform: 'translatex(0px)' }}
          >
            <div className='about-content-servicesWrapper-innerContent'>
              <div><FaDatabase size={60} /></div>
              <div><DiAndroid size={60} /></div>
              <div><FaLaptopCode size={60} /></div>
              <div><FaServer size={60} /></div>
              <div><FaGlobe size={60} /></div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}

export default About;
