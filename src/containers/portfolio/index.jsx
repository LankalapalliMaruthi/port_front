// import React from 'react'
// import PageHeader from '../../components/pageheader';
// import { BsInfoCircleFill } from 'react-icons/bs';

// const Portfolio= ()=> {
//   return (
//      <section id="portfolio" className='portfolio'>
//       <PageHeader headerText=" My Portfolio" icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}
//       ></PageHeader>
//     </section>
//   )
// }

// export default Portfolio;
import React from 'react';
import PageHeader from '../../components/pageheader';
import { MdWork } from "react-icons/md";

import './style.scss';
import { portfolioData } from './util';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeader
        headerText="My Portfolio"
        icon={<MdWork size={30} />}
      />

      <div className="portfolio__grid">
        {portfolioData.map((item, index) => (
          <div className="portfolio__item" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="portfolio__image"
              onClick={() => window.open(item.url, '_blank')}
            />
            <h3 className="portfolio__title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
