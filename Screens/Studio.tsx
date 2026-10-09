import React from 'react'
import NiiFita from "../assets/images/Portfolio/Velora/Founder_side.png"

const Studio = () => {
  return (
    <>
        <section id='studio' className='flex min-h-screen w-full flex-col space-y-6 py-20'>
            <div className='space-y-5'>
                <p className='text-center uppercase'>studio</p>
                <h1 className='text-center font-["Oswald"] lg:text-5xl text-4xl '>Architecture, seen differently.</h1>
                <p className='text-center'>We create architectural imagery that brings ideas to life through light, material and atmosphere.</p>
            </div>    
            <div className='mx-auto mt-8 flex w-full flex-col lg:mt-0 lg:min-h-[70vh] lg:w-[70%] lg:flex-row'>
                 <img src={NiiFita} alt="Portrait of the studio founder" className='block aspect-[4/5] w-full object-cover lg:aspect-auto lg:w-[45%]'/>
                <div className='bg-[#181A19] lg:w-[55%]'>
                        <div className='flex flex-col items-center lg:mt-[12ch] space-y-5'>
                            <p className='text-[#FDFCFD] text-center uppercase mt-4 '>
                                Philosophy
                            </p>
                            <span className='text-[#FDFCFD] lg:text-2xl text-xl font-["Oswald"]'>
                                "Good architecture is experienced before it is built."
                            </span>
                        </div>
                        <div className='border border-white w-[70%] mt-8 m-auto'/>
                        <div className='flex flex-col items-center space-y-5 mt-8'>
                            <p className='text-[#FDFCFD] text-center  uppercase '>
                                Vision
                            </p>
                            <span className='text-[#FDFCFD] lg:text-3xl text-2xl font-["Oswald"]'>
                                Beyond the image 
                            </span>
                            <p className='text-[#FDFCFD] text-center'>
                                Create more than a rendering. Reveal the feeling, purpose and character of every space.
                            </p>
                        </div>
                        <div className='border border-white w-[70%] mt-8 m-auto'/>

                        <div className='flex flex-col items-center space-y-5 mt-8'>
                            <p className='text-[#FDFCFD] text-center uppercase '>
                                Approach
                            </p>
                            <span className='text-[#FDFCFD] lg:text-3xl text-2xl font-["Oswald"]'>
                                Every detail matters.
                            </span>
                            <p className='text-[#FDFCFD] text-center'>
                                Balance light, textures, proportions and context to create convincing architectural imagery.
                            </p>
                        </div> 
                </div>   
            </div> 
        </section>
    </>
  )
}

export default Studio