import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, X } from "lucide-react";
import logoSvg from "../assets/radiant-self-worth.svg";

type PolicyType = "privacy" | "earnings" | "terms" | null;

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activePolicy) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup in case the component unmounts while the modal is open
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [activePolicy]);

  // Placeholder content for each policy
  const policyContent = {
    privacy: {
      title: "Privacy Policy",
      content:
        "Your privacy policy information goes here. We value your privacy and protect your data.",
    },
    earnings: {
      title: "Earnings Disclaimer",
      content:
        "Your earnings disclaimer goes here. Past performance does not guarantee future results.",
    },
    terms: {
      title: "Terms & Conditions",
      content:
        "Your terms and conditions go here. By using this site, you agree to these terms.",
    },
  };

  return (
    <>
      <footer
        id="contact"
        className="w-full bg-white/[50%] font-sans text-[18px] text-radiant"
      >
        {/* Upper Section: Logo & Heading */}
        <div className="flex flex-col items-center pb-4 px-4 text-center">
          <img
            src={logoSvg}
            alt="Radiant Self Worth Logo"
            className="h-72 w-auto object-contain"
          />
        </div>

        {/* Upper Section: Contact Information */}
        <div className="brightness-60 font-serif text-[36px] font-base tracking-[0.1em] text-radiant -mt-18 mb-12 text-center">
          Contact Melissa
        </div>

        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 pt-8 pb-24 border-b border-gray-100">
          {/* Email link */}
          <a
            href="mailto:radiantselfworth@gmail.com"
            className="flex items-center gap-2 brightness-50 hover:opacity-80 transition-opacity tracking-wide"
          >
            <Mail size={18} strokeWidth={1.5} />
            <span className="hover:underline transition-all">
              radiantselfworth@gmail.com
            </span>
          </a>

          {/* Phone Link */}
          <a
            href="tel:847-208-0978"
            className="flex items-center gap-2 brightness-50 text-radiant hover:opacity-80 transition-opacity tracking-wide"
          >
            <Phone size={18} strokeWidth={1.5} />
            <span className="hover:underline transition-all">847-208-0978</span>
          </a>

          {/* Website Link */}
          <a
            href="https://radiantselfworth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 brightness-50 hover:opacity-80 transition-opacity tracking-wide"
          >
            <MapPin size={18} strokeWidth={1.5} />
            <span className="hover:underline transition-all">
              www.radiantselfworth.com
            </span>
          </a>
        </div>

        {/* Bottom Section: Copyright & Policy */}
        <div className="mx-auto w-full max-w-4xl px-4 border-t border-[#a88d52]/[20%] flex flex-col items-center justify-center gap-2 pt-4 pb-6 text-[#4a5568]/75 tracking-wide text-[12px] font-light">
          {/* 3 Sub-footer Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <button
              onClick={() => setActivePolicy("privacy")}
              className="hover:underline transition-all uppercase"
            >
              PRIVACY POLICY
            </button>
            <button
              onClick={() => setActivePolicy("earnings")}
              className="hover:underline transition-all uppercase"
            >
              EARNINGS DISCLAIMER
            </button>
            <button
              onClick={() => setActivePolicy("terms")}
              className="hover:underline transition-all uppercase"
            >
              TERMS & CONDITIONS
            </button>
          </div>

          <div className="text-[10px] font-thin text-[#4a5568]/75 mt-1 text-center">
            © 2026 Radiant Self Worth, LLC
          </div>
        </div>
      </footer>

      {/* Full Screen Responsive Modal */}
      {activePolicy && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white overflow-hidden animate-in fade-in duration-200">
          {/* Modal Header */}
          <div className="relative flex items-center justify-center border-b border-gray-200 px-6 py-4 md:px-12 md:py-6 bg-white shadow-sm shrink-0">
            <h2 className="text-xl md:text-3xl font-serif text-radiant tracking-wide text-center">
              {policyContent[activePolicy].title}
            </h2>
            <button
              onClick={() => setActivePolicy(null)}
              className="absolute right-6 md:right-12 p-2 md:p-3 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-all flex items-center justify-center"
              aria-label="Close modal"
            >
              <X size={28} strokeWidth={2} />
            </button>
          </div>

          {/* Modal Content body (Scrolls independently) */}
          <div className="text-left space-y-4 text-sm leading-relaxed text-gray-600 overflow-y-auto px-16 pt-4">
            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Placeholder Headline{" "}
            </h3>
            <p> Placeholder copy for the Paragraph. </p>
          </div>

          {/* Modal Footer Actions */}
          <div className="mt-4 flex justify-center border-t border-gray-100 pt-4 pb-6 px-6">
            <button
              onClick={() => setActivePolicy(null)}
              className="px-6 py-2 bg-[#a88d52] text-white text-sm rounded-lg hover:bg-opacity-90 transition-all cursor-pointer shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
