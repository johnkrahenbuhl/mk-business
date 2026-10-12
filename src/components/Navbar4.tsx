import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Programs", "Testimonials", "Contact"];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white py-4 ${scrolled ? "shadow-md" : ""}`}
    >
      {/* Removed 'container mx-auto' and added 'w-full'. Adjusted padding to keep it tight to the edges */}
      <div className="w-full px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Added whitespace-nowrap to prevent the text from ever wrapping */}
        <a
          href="#"
          className="pl-2 lg:pl-0 font-serif text-2xl font-bold tracking-wide text-teal-900 whitespace-nowrap"
        >
          Radiant Self Worth
        </a>

        {/* Desktop & Tablet Nav: Changed hidden md:flex to hidden lg:flex */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm uppercase tracking-wider font-medium hover:text-amber-500 transition-colors text-slate-600"
            >
              {link}
            </a>
          ))}
          <a
            href="https://calendly.com/radiantselfworth/new-meeting-1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full font-medium transition-all bg-teal-900 text-white hover:bg-teal-800"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle: Changed md:hidden to lg:hidden */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="text-teal-900 w-6 h-6" />
          ) : (
            <Menu className="text-teal-900 w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav: Changed md:hidden to lg:hidden */}
      {isOpen && (
        // Replace the mobile nav container div with:
        // Add border-b and border-b-gray-200:
        // Add rounded-b-2xl and a larger shadow:
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl shadow-black/10 py-6 flex flex-col items-center space-y-4 border-t border-gray-100 rounded-b-2xl">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-600 font-medium text-lg w-full text-center py-2 hover:text-teal-700"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="https://calendly.com/radiantselfworth/new-meeting-1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-8 py-3 rounded-full font-medium transition-all bg-teal-900 text-white hover:bg-teal-800"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};
