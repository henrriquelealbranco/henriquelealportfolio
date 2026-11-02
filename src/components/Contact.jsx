import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => (
  <div className="-mt-[8rem] flex overflow-hidden">
    <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="contact-panel w-full rounded-2xl bg-jet p-8 sm:p-12">
      <p className={styles.sectionSubText}>Vamos conversar</p>
      <h3 className={styles.sectionHeadTextLight}>Seu próximo projeto.</h3>
      <p className="mt-6 max-w-3xl font-poppins text-[17px] leading-[29px] text-taupe">
        Precisa de um site, sistema, automação ou quer organizar uma ideia? Me conte o contexto. Eu respondo com perguntas objetivas e um próximo passo claro.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <a href="https://wa.me/5541984191360" target="_blank" rel="noreferrer" className="contact-link group">
          <span className="contact-kicker">WhatsApp</span>
          <strong>+55 41 98419-1360</strong>
          <span className="contact-arrow">↗</span>
        </a>
        <a href="mailto:henrrique.leal@gmail.com" className="contact-link group">
          <span className="contact-kicker">E-mail</span>
          <strong>henrrique.leal@gmail.com</strong>
          <span className="contact-arrow">↗</span>
        </a>
      </div>
      <p className="mt-12 font-poppins text-[12px] uppercase tracking-[3px] text-dim">Henrique Leal · Curitiba, Brasil</p>
    </motion.div>
  </div>
);

export default SectionWrapper(Contact, 'contact');
