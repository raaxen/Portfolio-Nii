import { Portfolio } from '../data/Image';

type ExpertiseProps = {
  onSelectService: (service: 'interior' | 'exterior' | 'animated') => void;
};

const services = [
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Discover our interior spaces, materials and atmospheres.',
  },
  {
    id: 'exterior',
    title: 'Exterior Design',
    description: 'Explore our architectural concepts and exterior spaces.',
  },
  {
    id: 'animated',
    title: 'Animated Design',
    description: 'See our spaces brought to life through visual storytelling.',
  },
] as const;

export default function Expertise({ onSelectService }: ExpertiseProps) {
  const backgroundImage = Portfolio.find((image) => image.name === 'portfolio_8');

  return (
    <section
      id="expertise"
      className="bg-cover bg-center px-5 py-20 text-[#FDFCFD] overflow-hidden lg:px-10 xl:px-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62)), url(${backgroundImage?.src})`,
      }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/65">
          Our Services
        </p>
        <h2 className="font-['Oswald'] text-3xl uppercase lg:text-5xl">
            Visualizing what has yet to exist.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 lg:text-base">
          From architectural concepts to immersive imagery, we reveal the potential of every space.
        </p>
      </div>

      <div className="relative isolate mx-auto max-w-[1800px] pt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-2rem] top-1/2 -z-10 h-3/4 w-24 -translate-y-1/2 rounded-full bg-[#181A19]/20 blur-3xl lg:left-[-3rem] lg:w-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-2rem] top-1/2 -z-10 h-3/4 w-24 -translate-y-1/2 rounded-full bg-[#181A19]/20 blur-3xl lg:right-[-3rem] lg:w-40"
        />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelectService(service.id)}
              className="group flex min-h-[280px] flex-col items-start justify-between bg-[#181A19] p-6 text-left text-[#FDFCFD] transition-colors hover:bg-[#252826] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181A19] lg:min-h-[340px] lg:p-8"
            >
              <span className="text-xs tracking-[0.3em] text-white/60">
                0{index + 1}
              </span>
              <span className="mt-10 block">
                <span className="block font-['Oswald'] text-2xl uppercase lg:text-3xl">
                  {service.title}
                </span>
                <span className="mt-3 block text-sm text-white/70">{service.description}</span>
                <span className="mt-7 block text-xs uppercase tracking-[0.2em]">
                  View gallery <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}