import Velora from "../assets/images/Portfolio/Velora/Velora_white.png"
const Contact = () => {
  return (
    <>
    <section id="contact" className="lg:w-[100%] lg:m-auto bg-[#151715] lg:flex lg:flex-row flex flex-col-reverse h-[60%] overflow-hidden">
        <div className="lg:w-[50%] p-8">
            <img src={Velora} className="lg:w-[10%] w-[40%] h-[50%] lg:h-[11%] m-auto"/>

                 <form
                action="mailto:nyfita.razakasoa@gmail.com"
                method="post"
                encType="text/plain"
                className="w-full max-w-xl  m-auto bg-[#151715] p-7 backdrop-blur-sm"
            >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FDFCFD]/60">
                    Start a project
                </p>
                <h2 className="mb-2 text-3xl font-semibold text-white font-['Oswald'] uppercase">
                    Let&apos;s work <span className="text-(--portfolio-level) font-['Oswald']">together.</span>
                </h2>
                <p className="mb-7 text-sm leading-6 text-[#FDFCFD]/60">
                    Tell me a little about your idea and I&apos;ll get back to you.
                </p>

                <div className="grid grid-cols-2 gap-4">
                    <label className="flex flex-col gap-2 text-sm text-white/80 uppercase">
                        Name
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            autoComplete="name"
                            required
                            className="h-12 min-w-0 rounded-0 border border-white/10 bg-black/35 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-(--portfolio-level) focus:ring-2 focus:ring-(--portfolio-level)/25"
                        />
                    </label>
                    <label className="flex flex-col gap-2 text-sm text-white/80 uppercase">
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                            className="h-12 min-w-0 rounded-0 border border-white/10 bg-black/35 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-(--portfolio-level) focus:ring-2 focus:ring-(--portfolio-level)/25"
                        />
                    </label>
                </div>

                <label className="uppercase mt-5 flex flex-col gap-2 text-sm text-white/80">
                    Service
                    <select
                        name="service"
                        defaultValue=""
                        required
                        className="h-12 w-full rounded-0 border border-white/10 bg-[#151715] px-4 text-white outline-none transition focus:border-(--portfolio-level) focus:ring-2 focus:rin"
                    >
                        <option value="" disabled>Select a service</option>
                        <option value="Graphic Designing">Autocad</option>
                        <option value="Web Design">Interior Design</option>
                        <option value="Video Editing">Exterior Editing</option>
                        <option value="Photography">Animated Design</option>
                    </select>
                </label>

                <label className="mt-5 flex uppercase flex-col gap-2 text-sm text-white/80">
                    Message
                    <textarea
                        name="message"
                        placeholder="Tell me about your project..."
                        required
                        rows={4}
                        className="w-full resize-y rounded-0 border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-(--portfolio-level) focus:ring-2 focus:ring-(--portfolio-level)/25"
                    />
                </label>

                <button
                    type="submit"
                    className="mt-6 h-12 w-full rounded-0  font-semibold text-white transition-colors hover:text-[#151715] hover:bg-[#FDFCFD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    Send Message
                </button>
            </form>
        </div>
        
        <div className="flex flex-col lg:flex-row bg-[#151715]  align-center text-center lg:w-[50%]">
            <div className="m-auto inset-0 py-2 lg:w-[70%] lg:rounded-40%_15%_300px_150px] h-[20ch] w-[100%] lg:h-[70ch] bg-[#FDFCFD]  ">
            <h1 className=" m-auto text-[#151715] mt-10 text-center lg:text-5xl text-5xl font-['Oswald'] lg:mt-[10ch]"> 
                Contact
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 bg-[#151715]" />
            <p className="text-[#151715]  font-semibold text-center mt-2 ">
                Feel free to text me , we'll build your Dream together !
            </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact