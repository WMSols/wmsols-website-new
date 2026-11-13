import Link from "next/link";
import { servicesData } from "@/data/odooData";

export default function OdooRelatedLinks({ currentPath }: { currentPath: string }) {
  const others = servicesData.filter((service) => service.href !== currentPath);

  return (
    <section className="bg-white pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Other Odoo services</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {others.map((service) => (
            <li key={service.href}>
              <Link href={service.href} className="font-medium text-blue-700 hover:text-blue-900">
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
