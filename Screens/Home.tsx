import { Portfolio ,resized, Velora } from '../data/Image';
import { useState, useEffect } from 'react';
import logo1 from "../assets/images/Portfolio/Velora/Velora_white.png" 
export default function Home() {
      const [scroll , scrolled] = useState(false)
      const Bg = Velora.find((image) => image.name === 'velora_1');
  const Bg1 = Portfolio.find((image) => image.name === 'portfolio_19');
      
        useEffect(() => {
            const handlescroll = () => {
                scrolled(window.scrollY > 50) 
            }
    
            window.addEventListener('scroll', handlescroll)
    
            return () => {
              window.removeEventListener('scroll',handlescroll)
            }
        }, [])
	return (
        <>
<div className="absolute h-screen inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent" />
      <section id='home' className='overflow-hidden flex flex-col justify-center h-screen w-screen  object-contain bg-cover bg-center' style={{ backgroundImage: `url(${Bg1?.src})` }}>
        <div className='hero-enter flex-col absolute lg:space-y-5 lg:mt-[15ch] lg:w-[50%]'>
          <p className=' hero-enter  text-[1.1rem]  lg:ml-9 ml-5 lg:mt-[55ch] mt-[25ch] font-["Oswald"] text-white' style={{animationDelay:'200ms'}}>
                .Velora
          </p>
          <h1 className='hero-enter lg:text-7xl text-5xl ml-5 font-["Oswald"] lg:ml-8 text-[#FDFCFD]' style={{animationDelay:'250ms'}}>
                Designing space <br /> Beyond Imagination
          </h1>
          <p className='hero-enter lg:w-[60%] text-[#FDFCFD] lg:mt-8 mt-4 lg:ml-9 ml-6 ' style={{animationDelay:'400ms'}}>
                Beyond walls and structures lies the art of possibility. VELORA brings architecture to life through thoughtful visualization, where every line tells a story and every space evokes a feeling.
          </p>
        </div>
        <a href="#contact" className='lg:hidden flex bg-[#FDFCFD] absolute justify-center mt-[65ch] mx-[13ch] h-14 w-[48%] font-["Oswald"] text-[#151715] '>
          <button className='m-auto font-semibold text-[#151715]'>
            Start a Project 
          </button>
        </a>
      </section>
        </>		
	);
}
