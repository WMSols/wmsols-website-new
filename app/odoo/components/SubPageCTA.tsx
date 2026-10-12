import Link from "next/link";

interface SubPageCTAProps {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export default function SubPageCTA({ title, description, buttonLabel, href }: SubPageCTAProps) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-center shadow-xl shadow-blue-900/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          <Link
            href={href}
            className="inline-flex h-14 items-center justify-center rounded-md bg-white px-10 text-base font-bold text-blue-600 transition-transform hover:scale-105 shadow-md"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}