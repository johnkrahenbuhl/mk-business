import React from "react";

// Add an interface for the props
interface TermsAndConditionsProps {
  onNavigateToPrivacy?: () => void;
}

// Pass the props into the component
export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  onNavigateToPrivacy,
}) => {
  return (
    <div className="space-y-4">
      {/* ... preceding content remains unchanged ... */}

      {/* Consent To Use Information section */}
      <h3 className="text-center font-semibold text-base text-gray-700 pt-8">
        Consent To Use Information
      </h3>
      <p>
        By accepting these Terms, you agree that We may collect, use and
        disclose your identifying information obtained as a result of Your
        membership, for the following purposes:
      </p>
      <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 pt-4">
        <li>(i) the processing of this membership application; and</li>
        <li>
          (ii) the administration of the membership with our organization.
        </li>
      </ul>
      <p className="">
        Please visit the{" "}
        <button
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateToPrivacy) onNavigateToPrivacy();
          }}
          className="text-[#a88d52] underline hover:text-opacity-80 cursor-pointer"
        >
          Privacy Policy
        </button>{" "}
        for further details on our data protection policy, including how You may
        access and correct your personal information or withdraw consent to the
        collection, use or disclosure of your personal information.
      </p>

      {/* ... remaining content remains unchanged ... */}
    </div>
  );
};
