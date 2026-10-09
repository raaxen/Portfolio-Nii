import { IconArrowLeft } from '@tabler/icons-react';
import type { ImageItem } from '../data/Image';

type ServiceGalleryProps = {
  title: string;
  images: ImageItem[];
  onBack: () => void;
};

export default function ServiceGallery({ title, images, onBack }: ServiceGalleryProps) {
  return (
    <main className=" bg-[#FDFCFD] px-5 pb-16 pt-8 text-[#181A19] lg:px-10 lg:pt-12 xl:px-16">
      <div className="mx-auto max-w-[1800px]">
        <button
          type="button"
          onClick={onBack}
          className="mb-12 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181A19]"
        >
          <IconArrowLeft size={18} stroke={1.5} aria-hidden="true" />
          Back to expertise
        </button>

        <header className="mb-10 border-b border-black/20 pb-6">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-black/50">
            Our expertise
          </p>
          <h1 className="font-['Oswald'] text-4xl uppercase lg:text-6xl">{title}</h1>
          <p className="mt-3 text-sm text-black/60">
            {String(images.length).padStart(2, '0')} selected works
          </p>
        </header>

        {images.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <figure
                key={image.src}
                className="group relative aspect-[4/3] overflow-hidden bg-black/5"
              >
                <img
                  src={image.src}
                  alt={`${title} project ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              </figure>
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-black/60">
            No images are available for this service yet.
          </p>
        )}
      </div>
    </main>
  );
}
