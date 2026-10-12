import { valuePropsData } from "@/data/odooData";

export default function OdooValueProp() {
  return (
    <section className="w-full py-24 px-4 border-t border-gray-800 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
          {valuePropsData.map((prop, index) => (
            <div key={index} className="flex flex-col items-center text-center px-6 pt-10 lg:pt-0 first:pt-0">
              <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
                {prop.metric}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{prop.title}</h3>
              <p className="text-gray-400">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}