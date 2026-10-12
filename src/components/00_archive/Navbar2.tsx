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
    // Applied py-4 permanently so the height never changes, but kept the scroll shadow
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white py-4 ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className="font-serif text-2xl font-bold tracking-wide text-teal-900"
        >
          Radiant Self Worth
        </a>

        {/* Desktop & Tablet Nav */}
        <div className="hidden md:flex space-x-8 items-center">
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

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
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

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center space-y-4 border-t border-gray-100">
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
