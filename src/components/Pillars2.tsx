import { Users, Shield, Heart } from "lucide-react";

export const Pillars = () => {
  const pillars = [
    {
      icon: Users,
      title: "About Us",
      description:
        "Your premier destination for personal development. Our acclaimed training programs are celebrated for their transformative effects, empowering individuals worldwide.",
    },
    {
      icon: Shield,
      title: "Our Promise",
      description:
        "Our courses are expertly designed to provide top-tier content and an exceptional learning experience tailored to achieve tangible, real-world results.",
    },
    {
      icon: Heart,
      title: "Why Choose Us",
      description:
        "We commit to providing personalized support and guidance, customized to your specific needs and aspirations for ultimate growth.",
    },
  ];

  return (
    <section
      id="programs"
      className="pt-24 pb-18 bg-slate-50 relative scroll-mt-[calc((44px)+6rem)]"
    >
      {/* Reduced container padding on md, expanding on lg */}
      <div className="container mx-auto px-4 lg:px-12">
        {/* Reduced gap on md, expanding on lg */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 -mt-32 relative z-20 items-stretch">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <div
                key={idx}
                className="h-full flex flex-col bg-white rounded-2xl p-6 lg:p-10 xl:pb-16 2xl:pb-24 shadow-xl shadow-teal-900/5 hover:-translate-y-2 transition-transform duration-300 border border-slate-100 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-serif text-teal-950 font-bold mb-4">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
