// Hero5.tsx
import { ChevronRight } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

export const HeroRSW = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-teal-950/30 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 text-center text-white">
        <div className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-8 sm:mb-6 md:mb-10 max-w-4xl w-full text-center drop-shadow-lg">
          <span className="whitespace-nowrap">Own Your</span>{" "}
          <br className="block sm:hidden" />
          <span className="text-amber-400 italic">Evolution</span>{" "}
          <br className="block sm:hidden" />
          Today!
        </div>

        {/* UPDATED: Increased mobile margin-bottom from mb-20 to mb-28 */}
        <p className="w-full max-w-2xl text-center text-xl sm:text-2xl leading-relaxed mt-4 sm:mt-0 mb-28 sm:mb-8 md:mb-10 text-slate-100 font-medium drop-shadow-md">
          Your next chapter starts with one conversation.{" "}
          <br className="hidden sm:block" />
          You've spent years building experience,{" "}
          <br className="hidden sm:block" />
          Now it's time to build your future. <br className="hidden sm:block" />
          Don't wait for "Someday".
        </p>

        {/* UPDATED: Increased mobile margin-top from mt-8 to mt-12 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12 sm:mt-10 md:mt-14 mb-12 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href="#programs"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-amber-400 text-teal-950 font-bold text-base sm:text-lg hover:bg-amber-500 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] flex items-center justify-center gap-2"
          >
            <span className="text-center">Choose Your 10-Minute Window</span>
            <ChevronRight size={20} className="shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
