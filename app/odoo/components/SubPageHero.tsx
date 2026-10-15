import TiltImage from "./TiltImage";

interface SubPageHeroProps {
  title: string;
  titleHighlight: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function SubPageHero({ title, titleHighlight, description, imageSrc, imageAlt }: SubPageHeroProps) {
  return (
    <section className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              {title} <span className="text-blue-600">{titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              {description}
            </p>
          </div>

          {/* Image with hover tilt */}
          <TiltImage
            src={imageSrc}
            alt={imageAlt}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full"
            priority
          />
          
        </div>
      </div>
    </section>
  );
}