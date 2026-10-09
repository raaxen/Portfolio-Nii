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
<div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent" />
      <section id='home' className='overflow-hidden flex flex-col justify-center h-screen w-screen object-contain bg-cover bg-center' style={{ backgroundImage: `url(${Bg1?.src})` }}>
        <div className='hero-enter absolute lg:mt-[15ch] lg:w-[50%]'>
          <p className=' hero-enter text-[1.1rem] lg:ml-8 ml-5 mt-[38ch] text-white' style={{animationDelay:'200ms'}}>
                .Velora
          </p>
          <h1 className='hero-enter lg:text-8xl text-6xl ml-5 font-["Oswald"]  lg:ml-8 text-[#FDFCFD]' style={{animationDelay:'250ms'}}>
                Designing space <br /> Beyond Imagination
          </h1>
          <p className='hero-enter text-[#FDFCFD] lg:mt-8 mt-4 lg:ml-8 ml-5' style={{animationDelay:'400ms'}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem at voluptas quod temporibus rerum, a aliquam numquam rem velit molestiae optio! Ipsum, neque ad optio, illum animi ut minima unde illo provident ratione eos repellat ducimus eaque laboriosam doloremque sapiente.
          </p>
        </div>
        
      </section>
        </>		
	);
}
