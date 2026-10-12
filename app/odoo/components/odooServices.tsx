import Link from "next/link";
import { Code, Settings, Plug, Wrench, ArrowRightLeft, GraduationCap } from "lucide-react";
import { servicesData } from "@/data/odooData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // Adjust if your shadcn path is different

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="w-6 h-6 text-blue-500" />,
  settings: <Settings className="w-6 h-6 text-blue-500" />,
  plug: <Plug className="w-6 h-6 text-blue-500" />,
  wrench: <Wrench className="w-6 h-6 text-blue-500" />,
  "arrow-right-left": <ArrowRightLeft className="w-6 h-6 text-blue-500" />,
  "graduation-cap": <GraduationCap className="w-6 h-6 text-blue-500" />,
};

export default function OdooServices() {
  return (
    <section className="relative w-full py-24 px-4 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Comprehensive <span className="text-[#8c5e80]">Odoo</span> Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide end-to-end solutions, leveraging our full-stack expertise to customize, integrate, and scale your ERP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <Link href={service.href} key={index} className="group h-full block">
              <Card className="h-full bg-slate-900/50 border-gray-800 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-blue-500/20">
                    {iconMap[service.iconName]}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}