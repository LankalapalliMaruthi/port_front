// import React from 'react'
// import PageHeader from '../../components/pageheader';
// import { BsInfoCircleFill } from 'react-icons/bs';
// import { skillsData } from './util';

// const Skills= ()=> {
//   return (
//      <section id="skills" className='skills'>
//       <PageHeader headerText="My Skills" icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}
//       ></PageHeader>
//       <div className='skill-content-wrapper'>{skillsData.map((item,i)=>(<div key={i} className='skills-content-wrapper-innercontent'>
//         <Animate play duration={1} delay={0.3} start={{transform:"translateX(-200px)"}}
//         end={{transform:"translateX(0px)"}}>
//           <h3 className='skills-content-wrapper-innercontent-category'>{item.label}</h3>
//           <div>{item.data.map((skillItem)=>(
//           ))}</div>
//         </Animate>
//       </div>))}</div>
//     </section>
//   )
// }

// export default Skills;
import React from 'react'
import "./style.scss"
import PageHeader from '../../components/pageheader';
import { GiSkills } from "react-icons/gi";
import { Animate } from "react-simple-animate";
import { skillsData } from './util';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeader
        headerText="My Skills"
        icon={<GiSkills size={30} />}
      />

      <div className="skills-grid">
        {skillsData.map((item, i) => (
          <Animate
            key={i}
            play
            duration={1}
            delay={0.3}
            start={{ opacity: 0, transform: "translateX(-50px)" }}
            end={{ opacity: 1, transform: "translateX(0)" }}
          >
            <div className="skills-row">
              <h3 className="skills-label">{item.label}</h3>
              <div className="skills-list">
                {item.data.map((skillItem, j) => (
                  <span key={j} className="skill-badge">
                    {skillItem.skillName}
                  </span>
                ))}
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </section>
  );
};

export default Skills;
