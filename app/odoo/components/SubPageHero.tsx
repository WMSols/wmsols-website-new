import Image from "next/image";

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

          {/* Image Container */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
            {/* Subtle overlay to ensure the image fits the brand vibe */}
            <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}