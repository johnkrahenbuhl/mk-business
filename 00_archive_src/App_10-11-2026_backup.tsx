import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import { HeroRSW } from "./components/rsw/Hero4-rsw";
import { Pillars } from "./components/rsw/Pillars";
import { LearningAndFeatures } from "./components/LearningAndFeatures";
import { TestimonialsRSW } from "./components/Testimonials2-rsw";
import { FooterRSW } from "./components/rsw/Footer-rsw";
import About from "./components/About";
import Criteria from "./components/Criteria";
import Testimonials from "./components/Testimonials";
import { Footer } from "./components/Footer9";

import Hero from "./components/Hero";

function App() {
  return (
    <div className="antialiased selection:bg-earth selection:text-white overflow-x-hidden">
      <Navbar />
      <HeroRSW />
      <div className="w-[1920px] mx-auto">
        <Pillars />

        <TestimonialsRSW />
        <Footer />
      </div>
    </div>
  );
}

export default App;
