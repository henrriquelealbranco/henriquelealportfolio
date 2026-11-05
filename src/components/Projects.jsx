import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({ id, name, category, description, tags, image, secondaryImage, index, active, handleClick }) => {
  const isActive = active === id;
  return (
    <motion.article
      variants={fadeIn('right', 'spring', index * 0.08, 0.7)}
      className={`project-card relative cursor-pointer overflow-hidden rounded-[24px] ${isActive ? 'is-active' : ''}`}
      onClick={() => handleClick(id)}
      tabIndex="0"
      onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && handleClick(id)}
      aria-expanded={isActive}>
      <img src={image} alt={`Captura do projeto ${name}`} className="absolute inset-0 h-full w-full object-cover object-top" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

      {!isActive ? (
        <div className="absolute inset-x-0 bottom-0 z-10 p-6">
          <p className="mb-2 font-poppins text-[10px] uppercase tracking-[3px] text-silver">{category}</p>
          <h3 className="font-beckman text-[22px] font-extrabold uppercase leading-tight text-timberWolf">{name}</h3>
        </div>
      ) : (
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
          {secondaryImage && <img src={secondaryImage} alt="Tela do sistema ImobPro" className="secondary-preview" />}
          <p className="mb-2 font-poppins text-[11px] uppercase tracking-[3px] text-silver">{category}</p>
          <h3 className="font-beckman text-[25px] font-bold uppercase text-timberWolf sm:text-[32px]">{name}</h3>
          <p className="mt-3 max-w-2xl font-poppins text-[12px] leading-[20px] text-silver sm:text-[14px] sm:leading-[23px]">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}
          </div>
        </div>
      )}
    </motion.article>
  );
};

const MobileProjectCard = ({ name, category, description, tags, image, secondaryImage, index }) => (
  <motion.article
    variants={fadeIn('up', 'spring', index * 0.05, 0.65)}
    className="mobile-project-card">
    <div className="mobile-project-media">
      <img
        src={image}
        alt={`Captura do projeto ${name}`}
        className="mobile-project-cover"
        loading="lazy"
      />
      <div className="mobile-project-scrim" />
      {secondaryImage && (
        <img
          src={secondaryImage}
          alt={`Tela complementar do projeto ${name}`}
          className="mobile-project-preview"
          loading="lazy"
        />
      )}
      <span className="mobile-project-number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>

    <div className="mobile-project-content">
      <p className="mobile-project-category">{category}</p>
      <h3 className="mobile-project-title">{name}</h3>
      <p className="mobile-project-description">{description}</p>
      <div className="mobile-project-tags" aria-label="Tecnologias utilizadas">
        {tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}
      </div>
    </div>
  </motion.article>
);

const Projects = () => {
  const [active, setActive] = useState('project-1');
  return (
    <div className="mt-0 sm:-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Projetos selecionados</p>
        <h2 className={styles.sectionHeadTextLight}>Cases reais.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 max-w-3xl text-[15px] leading-6 text-taupe sm:text-[18px] sm:leading-[30px]">
        Sites, plataformas e sistemas criados para operações reais. <span className="hidden md:inline">Clique em um projeto para expandir a história e as tecnologias utilizadas.</span>
      </motion.p>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} className="mobile-project-grid mt-8 grid gap-5 md:hidden">
        {projects.map((project, index) => <MobileProjectCard key={project.id} index={index} {...project} />)}
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} className="project-rail mt-[50px] hidden gap-5 overflow-x-auto pb-6 md:flex">
        {projects.map((project, index) => <ProjectCard key={project.id} index={index} {...project} active={active} handleClick={setActive} />)}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
