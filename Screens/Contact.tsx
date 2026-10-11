import { IconMail, IconBrandGoogleMaps, IconBrandLinkedin, IconPhoneCall, IconCheckFilled } from "@tabler/icons-react"

const Contact = () => {
  return (
    <>
    <section id="Contact" className="lg:w-[80%] lg:m-auto bg-[#181A19] lg:flex lg:flex-row flex flex-col-reverse h-[60%] overflow-hidden">
        <div className="lg:w-[50%] p-8">
                 <form
                action="mailto:nyfita.razakasoa@gmail.com"
                method="post"
                encType="text/plain"
                className="w-full max-w-xl  m-auto bg-[#181A19] p-7 backdrop-blur-sm"
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
                            className="h-12 min-w-0 rounded-lg border border-white/10 bg-black/35 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-(--portfolio-level) focus:ring-2 focus:ring-(--portfolio-level)/25"
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
                            className="h-12 min-w-0 rounded-lg border border-white/10 bg-black/35 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-(--portfolio-level) focus:ring-2 focus:ring-(--portfolio-level)/25"
                        />
                    </label>
                </div>

                <label className="uppercase mt-5 flex flex-col gap-2 text-sm text-white/80">
                    Service
                    <select
                        name="service"
                        defaultValue=""
                        required
                        className="h-12 w-full rounded-lg border border-white/10 bg-[#181A19] px-4 text-white outline-none transition focus:border-(--portfolio-level) focus:ring-2 focus:rin"
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
                        className="w-full resize-y rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-(--portfolio-level) focus:ring-2 focus:ring-(--portfolio-level)/25"
                    />
                </label>

                <button
                    type="submit"
                    className="mt-6 h-12 w-full rounded-lg  font-semibold text-white transition-colors hover:text-[#181A19] hover:bg-[#FDFCFD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    Send Message
                </button>
            </form>
        </div>
        
        <div className="flex flex-col lg:flex-row bg-[#181A19]  align-center text-center lg:w-[50%]">
            <div className="m-auto py-8 lg:w-[67%] lg:rounded-[80%_50%_500px_150px_] rounded-[80%_80%_500px_90px_]  mt-14 lg:mt-40 h-[38ch] w-[92%] lg:h-[40ch] bg-[#FDFCFD] shadow-sm border border-[#181A19]">
            <h1 className=" text-[#181A19] text-center text-5xl font-['Oswald'] lg:mt-16 mt-12"> 
                Contact
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 bg-[#181A19]" />
            <p className="text-[#181A19] text-center mt-4 ">
                Feel free to text me , we'll build your Dream together !
            </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact