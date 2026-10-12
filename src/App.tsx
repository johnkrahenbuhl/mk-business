// App.tsx file for Radiant Self Worth LLC
import { Navbar } from "./components/Navbar4";
import { HeroRSW } from "./components/Hero5";
import { Pillars } from "./components/Pillars2";
import { TestimonialsRSW } from "./components/Testimonials3-rsw";
import { Footer } from "./components/Footer10";

function App() {
  return (
    <div className="antialiased selection:bg-earth selection:text-white overflow-x-hidden min-w-xs">
      <Navbar />
      <HeroRSW />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Pillars />
        <TestimonialsRSW />
        <Footer />
      </div>
    </div>
  );
}

export default App;
