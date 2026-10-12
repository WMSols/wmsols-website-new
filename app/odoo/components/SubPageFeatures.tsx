import { Blocks, Layout, Webhook, Database, Settings, ArrowRightLeft, GraduationCap, Wrench, Plug } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Expanded Icon Map to cover future pages
const iconMap: Record<string, React.ReactNode> = {
  blocks: <Blocks className="w-8 h-8 text-blue-600" />,
  layout: <Layout className="w-8 h-8 text-blue-600" />,
  webhook: <Webhook className="w-8 h-8 text-blue-600" />,
  database: <Database className="w-8 h-8 text-blue-600" />,
  settings: <Settings className="w-8 h-8 text-blue-600" />,
  "arrow-right-left": <ArrowRightLeft className="w-8 h-8 text-blue-600" />,
  "graduation-cap": <GraduationCap className="w-8 h-8 text-blue-600" />,
  wrench: <Wrench className="w-8 h-8 text-blue-600" />,
  plug: <Plug className="w-8 h-8 text-blue-600" />,
};

interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

interface SubPageFeaturesProps {
  sectionTitle: string;
  sectionDescription: string;
  features: FeatureItem[];
}

export default function SubPageFeatures({ sectionTitle, sectionDescription, features }: SubPageFeaturesProps) {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{sectionTitle}</h2>
          <p className="text-lg text-slate-600">{sectionDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-3 bg-blue-50 rounded-xl">
                  {iconMap[feature.iconName]}
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900 m-0">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
}