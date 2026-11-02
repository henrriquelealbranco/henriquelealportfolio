import { useState } from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  // Choose the lightweight mobile rendering once per page load. Replacing
  // active WebGL roots during a resize can race with React's render cycle.
  const [isMobile] = useState(() => window.matchMedia('(max-width: 639px)').matches);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Ferramentas de trabalho</p>
        <h2 className={styles.sectionHeadTextLight}>Tecnologias.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-14 sm:gap-10">
        {technologies.map((technology) => (
          <div className={isMobile ? 'mobile-tech-chip' : 'h-28 w-28'} key={technology.name}>
            {isMobile ? (
              <>
                <img src={technology.icon} alt="" />
                <span>{technology.name}</span>
              </>
            ) : <BallCanvas icon={technology.icon} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
