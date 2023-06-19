import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { service } from '../constants';
import sectionWrapper from '../hoc/sectionWrapper';

function Intro() {
  const ProjectCard = ({ index, name, description, image, icon,buttonDesc}) => {
    return (
      <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
        <div className=" bg-gradient-to-t from-white/30 from-5% to-gradient2 backdrop-blur backdrop-filter rounded-sm sm:w-[360px] w-full rounded-xl shadow-inner">
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-xl" />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <img src = {icon} alt = {name} 
                className="w-24 h-24 rounded-full flex justify-center items-center"
              >
              </img>
            </div>
          </div>
          <div className="p-5 flex flex-col items-center">
            <h3> 
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className='text-white/50'>{description}</p>
            </h3>
            <button class="bg-black drop-shadow-xl shadow-black mt-4 mb-1 bg-opacity-40 hover:bg-opacity-70 text-white px-4 py-2 rounded-xl">
              {buttonDesc}
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
  <div className='w-full flex flex-col '>
    <div className='mt-10 flex flex-wrap justify-evenly'>
      {service.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  </div>

  );
}

export default sectionWrapper(Intro, "");
