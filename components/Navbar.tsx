import { useEffect, useState } from 'react';
import { Navlinks } from '../data/navbar';
import logo from "../assets/images/Portfolio/Velora/Velora_white.png"
import logo1 from "../assets/images/Portfolio/Velora/Velora_black.png"
export default function Navbar() {
  const [scroll , scrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handlescroll = () => {
            scrolled(window.scrollY > 50) 
        }

        window.addEventListener('scroll', handlescroll)

        return () => {
          window.addEventListener('scroll',handlescroll)
        }
    }, [])

  return (    
      <nav                
        className= {`top-0 fixed left-1/2 z-[10000] h-[8%] lg:min-h-20 backdrop-blur-sm lg:backdrop-blur-sm -translate-x-1/2 flex items-center tems-center bg-[#FDFCFD] lg:bg-[#FDFCFD]  lg:border-0 justify-around px-4 lg:h-20 lg:px-8 w-screen transition-all duration-500
          ${scroll ? 'mt-0' : 'mt-0'}
          `}
    >
        
        <a className='text-2xl font-ephesis tracking-[0.5ch] lg:text-4xl flex items-center flex-col' href="#home">
        <h1 className='text-[18px] font-["Oswald"] font-bold uppercase'>
            Velora
        </h1>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {Navlinks.map(({ name, href }) => (
            <li key={href}>
              <a
                className={`text-lg font-medium transition-colors  text-[#181A19]`}
                href={href}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        <a href="#project" className='bg-[#181A19] hidden lg:flex w-[10%] h-12  text-[#FDFCFD] rounded-sm'>
        <button className='m-auto '>
          Start a Project
        </button>
        </a>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center gap-1.5 text-[#181A19] lg:hidden"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
        </button>
        <ul
          id="mobile-navigation"
          className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-4 bg-[#FDFCFD] px-6 py-5 shadow-md lg:hidden`}
          aria-label="Navigation principale"
        >
          {Navlinks.map(({ name, href }) => (
            <li key={href}>
              <a
                className="block text-lg font-medium text-[#181A19] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
  );
}