import { useState } from 'react';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} fixed top-0 z-30 flex w-full items-center bg-flashWhite/95 py-3 backdrop-blur-md`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center gap-3" onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
          <span className="hl-mark">HL</span>
          <span className="hidden font-beckman text-[15px] uppercase tracking-[3px] text-eerieBlack xs:block">Henrique Leal</span>
        </a>

        <ul className="hidden list-none flex-row gap-12 sm:flex">
          {navLinks.map((nav) => (
            <li key={nav.id} className={`${active === nav.title ? 'text-dim' : 'text-eerieBlack'} nav-links cursor-pointer font-mova text-[19px] font-medium uppercase tracking-[3px] hover:text-taupe`} onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          {toggle ? (
            <div className="menu menu-open absolute left-0 top-0 z-10 h-screen w-screen bg-flashWhite/95 p-6 backdrop-blur-xl">
              <div className="flex justify-end"><img src={close} alt="Fechar menu" className="h-[22px] w-[22px] cursor-pointer object-contain" onClick={() => setToggle(false)} /></div>
              <ul className="mt-32 flex list-none flex-col items-start gap-4">
                {navLinks.map((nav) => (
                  <li key={nav.id} className="cursor-pointer font-arenq text-[56px] font-bold uppercase tracking-[1px] text-eerieBlack" onClick={() => { setToggle(false); setActive(nav.title); }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : <img src={menu} alt="Abrir menu" className="h-[34px] w-[34px] cursor-pointer object-contain" onClick={() => setToggle(true)} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
