import { motion } from 'framer-motion';
import { styles } from '../styles';
import { henrique, bwmap, worldmap } from '../assets';

const Hero = () => (
  <>
    <div className="absolute inset-0 z-0 h-screen w-full overflow-hidden">
      <img src={bwmap} alt="" className="hidden h-full w-full object-cover opacity-40 md:block" />
      <img src={worldmap} alt="" className="block h-full w-full object-cover opacity-20 md:hidden" />
    </div>

    <section id="top" className="relative mx-auto flex h-[100svh] min-h-[820px] w-full overflow-hidden bg-hero-mobile md:h-screen md:min-h-0 md:bg-hero">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className={`absolute inset-0 top-[365px] z-10 mx-auto flex max-w-7xl items-start ${styles.paddingX} xs:top-[380px] md:top-[190px] lg:top-[170px]`}>
        <div className="w-full min-w-0 max-w-[780px]">
          <p className="mb-3 font-beckman text-[10px] uppercase tracking-[3px] text-dim xs:text-[11px] md:mb-5 md:text-[15px] md:tracking-[5px]">
            Desenvolvimento web · IA · Automação
          </p>
          <h1 className={`${styles.heroHeadText} hero-title font-poppins uppercase text-eerieBlack`}>
            Olá, eu sou<br />
            <span className="hero-name font-mova text-[40px] font-extrabold text-battleGray xs:text-[48px] md:text-[86px] lg:text-[102px]">
              Henrique Leal
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 max-w-[650px] text-eerieBlack md:mt-5`}>
            Crio sites que vendem e sistemas que organizam.
            <br className="hidden md:block" /> Tecnologia clara, funcional e feita para negócios reais.
          </p>
          <div className="hero-actions mt-6 flex w-full gap-3 md:mt-9 md:flex-wrap md:gap-4">
            <a href="#projects" className="hero-cta bg-night text-timberWolf">Ver projetos</a>
            <a href="#contact" className="hero-cta border border-eerieBlack text-eerieBlack">Falar comigo</a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.88, x: 70 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
        className="portrait-shell absolute z-10 flex items-end justify-center">
        <div className="portrait-orbit" aria-hidden="true" />
        <img src={henrique} alt="Retrato de Henrique Leal" className="portrait-image" />
        <div className="portrait-caption">Curitiba · Brasil</div>
      </motion.div>

      <div className="absolute bottom-8 z-20 hidden w-full justify-center md:flex">
        <a href="#about" aria-label="Rolar para a seção sobre">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-french p-2">
            <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-3 w-3 rounded-full bg-taupe" />
          </div>
        </a>
      </div>
    </section>
  </>
);

export default Hero;
