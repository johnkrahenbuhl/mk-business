import melissaImg from '../assets/melissa-portrait.jpg'; 

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          <img src={melissaImg} alt="Melissa Krahenbuhl" className="w-full h-auto object-cover shadow-lg aspect-[4/5]" />
          <div className="absolute -bottom-8 -right-8 bg-sand p-6 max-w-xs shadow-xl hidden md:block border border-stone">
            <p className="text-sm italic text-gray-600 font-serif leading-relaxed">
              "Portugal, 2026: A season that followed a 2025 milestone of $50K USD profit in 30 days while working part-time hours."
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-xs font-bold tracking-[0.2em] text-earth">REDEFINING SUCCESS</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
            I stopped building a life that looked good on paper...
          </h3>
          <div className="space-y-4 text-gray-600 font-light leading-relaxed">
            <p>
              For years, I chased the version of success I thought I was supposed to want: corporate career, constant pressure, full calendars and very little space to breathe. As a solo mum raising two young boys, I knew something had to change.
            </p>
            <p>
              What started as a search for flexibility became a complete shift in how I lived, worked and defined success. I stopped building a life that looked good on paper and started creating one aligned with freedom, growth and the people who mattered most.
            </p>
            <p>
              Today, after eight years in the industry, I lead a global online business within the personal and leadership education space, working remotely and helping others create a more intentional, spacious and financially aligned way of living, without sacrificing ambition, lifestyle or financial potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}