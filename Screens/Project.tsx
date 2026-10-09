import { Images } from '../data/Image';

const projectCards = [
{
title: 'RESIDENTIAL PROJECT IN PARIS',
description:
'Architectural visualization exploring materiality, natural light and contemporary spatial design.',
image: Images[2]?.src ?? Images[0]?.src,
},
{
title: 'MODERN HOTEL IN PARIS',
description:
'A contemporary hospitality space combining texture and atmosphere.',
image: Images[3]?.src ?? Images[0]?.src,
},
{
title: 'MODERN HOTEL IN LONDON',
description:
'A contemporary hospitality space combining texture and atmosphere.',
image: Images[4]?.src ?? Images[0]?.src,
},
{
title: 'CONTEMPORARY RESIDENCE',
description:
'A visual exploration of architecture, landscape and materiality.',
image: Images[5]?.src ?? Images[0]?.src,
},
];

export default function Project() {
  return (
    <section
      id="project"
      className="overflow-hidden bg-[#FDFCFD] text-[#FDFCFD]"
 > <div className="mx-auto max-w-[1800px] px-5 py-20 lg:px-10 xl:px-16">

    <div className="mb-14 flex items-end justify-between border-b border-black/20 pb-5">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-black/50">
          Selected works — 2026
        </p>

        <h3 className="text-3xl font-light uppercase tracking-wide lg:text-5xl text-[#181A19] font-['Oswald']">
          Our Projects
        </h3>
      </div>

      <span className="hidden text-sm text-white/50 lg:block">
        01 — 04
      </span>
    </div>

    {/* Project cards */}
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2">

      {projectCards.map((project, index) => {
        const reversed = index >= 2;

        return (
          <article
            key={`${project.title}-${index}`}
            className="group grid grid-cols-1 lg:grid-cols-2 bg-[#181A19] text-[#FDFCFD]  "
          >
            {/* Image */}
            <div
              className={`relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[400px] ${
                reversed ? 'lg:order-2' : ''
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          
            {/* Number and description */}
            <div
              className={`flex flex-col justify-between p-4 lg:p-5 ${
                reversed ? 'lg:order-1' : ''
              }`}
            >
              <span className="text-sm font-light text-[#FDFCFD]/60">
                {String(index + 1).padStart(2, '0')}
              </span>
          
              <div className="mt-6 lg:mt-8">
                <h4 className="text-sm font-medium uppercase leading-snug tracking-wide lg:text-base">
                  {project.title}
                </h4>
          
                <p className="mt-3 text-xs leading-relaxed text-[#FDFCFD]/70 lg:text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}

    </div>
  </div>
</section>
);
}
