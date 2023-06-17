import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { service } from '../constants';
import sectionWrapper from '../hoc/sectionWrapper';

function Intro() {
  const ProjectCard = ({ index, name, description, image, icon, source_code_link }) => {
    return (
      <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
        <div className="bg-tertiary  rounded-sm sm:w-[360px] w-full rounded-xl shadow-inner">
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-xl" />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
              </div>
            </div>
          </div>
          <div className="p-5">
            <h3>
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p>{description}</p>
            </h3>
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
