import React, { useState } from "react";
import { Mail, Phone, MapPin, X } from "lucide-react";
import logoSvg from "../assets/radiant-self-worth.svg";

type PolicyType = "privacy" | "earnings" | "terms" | null;

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-12"
          onClick={() => setActivePolicy(null)} // Close when clicking the backdrop
        >
          <div
            className="relative w-full max-w-3xl max-h-full flex flex-col bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 bg-gray-50/50">
              <h2 className="text-xl font-serif text-radiant brightness-60 tracking-wide">
                {policyContent[activePolicy].title}
              </h2>
              <button
                onClick={() => setActivePolicy(null)}
                className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto text-gray-600 font-sans text-sm md:text-base leading-relaxed">
              {policyContent[activePolicy].content}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-100 px-6 py-4 bg-gray-50/50 flex justify-end">
              <button
                onClick={() => setActivePolicy(null)}
                className="px-6 py-2 bg-[#a88d52]/80 hover:bg-[#a88d52] text-white text-sm font-medium rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
