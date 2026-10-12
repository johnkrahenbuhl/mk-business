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
            <p>
              This privacy policy(“Policy”) describes how(San Diego,
              CA)(www.radiantselfworth.com)(847 - 208 -0978)(“Company,” “we,”,
              “us” and “our”, “controller”) processes, collects, uses and shares
              personal data when using this website(
              <a
                href="www.radiantselfworth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://www.radiantselfworth.com
              </a>
              ), (the “Site”). Please read the following information carefully
              to understand changes to our practices regarding your personal
              data *, including GDPR(
              <a
                href="https://www.i-scoop.eu/gdpr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://www.i-scoop.eu/gdpr/
              </a>
              ) compliance, how we will process data and the changes we made to
              it .
            </p>
            <p>
              <em>
                * Internet - based data transmissions may in principle have
                security gaps, so absolute protection may not be guaranteed.For
                this reason, every data subject is free to transfer personal
                data to us via alternative means, e.g.by telephone(listed
                above).
              </em>
            </p>

            <h3 className="font-semibold text-base text-gray-700 pt-4">
              {" "}
              Consent{" "}
            </h3>
            <p>
              {" "}
              Consent of the data subject is any freely given, specific,
              informed and unambiguous indication of the data subject's wishes
              by which he or she, by a statement or by a clear affirmative
              action, signifies agreement to the processing of personal data
              relating to him or her.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Information Collection and Use{" "}
            </h3>
            <p>
              {" "}
              While visiting this site you will have the option to consent(opt
              -in) to receive further information and to be contacted by us or
              one of our affiliates.By opting in, you are granting us the
              permission to collect and processes information supplied by the
              data subject, you, for the purpose of contacting you with offers,
              promotional materials and other related information about income
              opportunities and related products.This data may be shared with
              affiliates of Global Success Solutions and / or third - party
              sites as listed herein.Data may include subject’s name, email
              address, IP address, phone number, or other information as
              supplied by the data subject.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              How Long Do You Keep My Data{" "}
            </h3>
            <p>
              {" "}
              The criteria used to determine the period of storage of personal
              data is the respective; a statutory retention period.After
              expiration of that period, the corresponding data is routinely
              deleted, as long as it is no longer necessary for the fulfillment
              of the contract or the initiation of a contract.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Log Data{" "}
            </h3>
            <p>
              {" "}
              We may also collect information that your browser sends whenever
              you visit our Service("Log Data").This Log Data may include
              information such as your computer's Internet Protocol ("IP")
              address, browser type, browser version, the pages of our Service
              that you visit, the time and date of your visit, the time spent on
              those pages and other statistics.{" "}
            </p>
            <p>
              {" "}
              In addition, we may use third party services such as Google
              Analytics that collect, monitor and analyze this type of
              information in order to increase our Service's functionality.
              These third-party service providers have their own privacy
              policies addressing how they use such information.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Rights of the data subject{" "}
            </h3>
            <p>
              {" "}
              Each data subject shall have the following rights with regard to
              the personal data concerning them.They can action their rights,
              without undue delay, by contacting Site(the Controller).The
              Controller will carry out all requests pursuant to GDPR compliance
              without undue wait.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Right of confirmation{" "}
            </h3>
            <p>
              {" "}
              Each data subject shall have the right to confirm whether or not
              personal data concerning him or her is being processed.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Right of access{" "}
            </h3>
            <p>
              {" "}
              Each data subject shall have the right to receive free information
              about his or her personal data stored at any time and a copy of
              this information.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Right to file a compliant with a supervisory authority{" "}
            </h3>
            <p>
              {" "}
              Each data subject has the right to file a complaint against the
              Controller with a supervisory authority pursuant to GDPR law.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Right to rectification{" "}
            </h3>
            <p>
              {" "}
              The data subject shall have the right to have incomplete personal
              data completed, including by means of providing a supplementary
              statement.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Right to erasure(Right to be forgotten){" "}
            </h3>
            <p>
              {" "}
              The data subject has the right to withdraw consent to which the
              processing and where there is no other legal ground for the
              processing.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Right of restriction of processing{" "}
            </h3>
            <p>
              {" "}
              In certain circumstances per GDPR law, each data subject shall
              have the right to obtain from the controller restriction of
              processing{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Right to data portability{" "}
            </h3>
            <p>
              {" "}
              Each data subject shall have the right to receive the personal
              data concerning him or her, which was provided to a controller, in
              a structured, commonly used and machine - readable format.He or
              she shall have the right to transmit those data to another
              controller without hindrance from the controller to which the
              personal data have been provided and the processing is carried out
              by automated means, as long as the processing is not necessary for
              the performance of a task carried out in the public interest or in
              the exercise of official authority vested in the controller.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Right to object{" "}
            </h3>
            <p>
              {" "}
              Each data subject shall have the right to object, on grounds
              relating to his or her particular situation, at any time, to
              processing of personal data concerning him or her.This also
              applies to profiling based on these provisions.The data subject is
              free to use his or her right to object by automated means using
              technical specifications.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Automated individual decision - making, including profiling{" "}
            </h3>
            <p> Site does not process any data resulting from profiling. </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Right to withdraw data consent{" "}
            </h3>
            <p>
              {" "}
              Each data subject has the right to withdraw consent personal data
              at any time.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Cookies{" "}
            </h3>
            <p>
              {" "}
              Cookies are files with a small amount of data, which may include
              an anonymous unique identifier.Cookies are sent to your browser
              from a web site and transferred to your device.We use cookies to
              collect information in order to improve our services for you.{" "}
            </p>
            <p>
              {" "}
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent.The Help feature on most browsers
              provide information on how to accept cookies, disable cookies or
              to notify you when receiving a new cookie.{" "}
            </p>
            <p>
              {" "}
              If you do not accept cookies, you may not be able to use some
              features of our Service and we recommend that you leave them
              turned on.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              DoubleClick Cookie{" "}
            </h3>
            <p>
              {" "}
              Google, as a third - party vendor, uses cookies to serve ads on
              our Service.Google's use of the DoubleClick cookie enables it and
              its partners to serve ads to our users based on their visit to our
              Service or other web sites on the Internet.{" "}
            </p>
            <p>
              {" "}
              You may opt out of the use of the DoubleClick Cookie for interest
              - based advertising by visiting the Google Ads Settings web page:{" "}
              <a
                href="http://www.google.com/ads/preferences/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                http://www.google.com/ads/preferences/
              </a>{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Behavioral Remarketing{" "}
            </h3>
            <p>
              {" "}
              As a responsible company, we do not use automatic decision -
              making or profiling however our company does use remarketing
              services, in accordance to GDPR law, to advertise on third party
              web sites to you after you visited our Service.We, and our third -
              party vendors, use cookies to inform, optimize and serve ads based
              on your past visits to our Service.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Use of Facebook{" "}
            </h3>
            <p>
              {" "}
              On this website, the controller has integrated components of the
              enterprise Facebook.Facebook is a social network.{" "}
            </p>
            <p>
              {" "}
              The operating company of Facebook is Facebook, Inc., 1 Hacker Way,
              Menlo Park, CA 94025, United States.If a person lives outside of
              the United States or Canada, the controller is the Facebook
              Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Ireland.{" "}
            </p>
            <p> Facebook remarketing service is provided by Facebook Inc. </p>
            <p>
              {" "}
              You can learn more about interest - based advertising from
              Facebook by visiting this page:{" "}
              <a
                href="https://www.facebook.com/help/164968693837950"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://www.facebook.com/help/164968693837950
              </a>{" "}
            </p>
            <p>
              To opt - out from Facebook's interest-based ads follow these
              instructions from Facebook:{" "}
              <a
                href="https://www.facebook.com/about/ads/#568137493302217"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                https://www.facebook.com/about/ads/#568137493302217
              </a>{" "}
            </p>
            <p>
              {" "}
              Facebook adheres the Self - Regulatory Principles for Online
              Behavioral Advertising established by the Digital Advertising
              Alliance.You can also opt - out from Facebook and other
              participating companies through the Digital Advertising Alliance
              in the USA{" "}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                http://www.aboutads.info/choices/
              </a>
              , the Digital Advertising Alliance of Canada in Canada{" "}
              <a
                href="http://youradchoices.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                http://youradchoices.ca/
              </a>{" "}
              or the European Interactive Digital Advertising Alliance in Europe{" "}
              <a
                href="http://www.youronlinechoices.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                http://www.youronlinechoices.eu/
              </a>
              , or opt-out using your mobile device settings.{" "}
            </p>
            <p>
              For more information on the privacy practices of Facebook, please
              visit Facebook's Data Policy:{" "}
              <a
                href="https://www.facebook.com/privacy/explanation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                https://www.facebook.com/privacy/explanation
              </a>{" "}
            </p>
            <p>
              {" "}
              An overview of all the Facebook Plug - ins may be accessed under{" "}
              <a
                href="https://developers.facebook.com/docs/plugins/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://developers.facebook.com/docs/plugins/
              </a>
              .{" "}
            </p>
            <p>
              The data protection guideline published by Facebook, which is
              available at{" "}
              <a
                href="https://facebook.com/about/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://facebook.com/about/privacy/
              </a>
              , provides information about the collection, processing and use of
              personal data by Facebook.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Use of Google AdSense{" "}
            </h3>
            <p>
              {" "}
              On this website, the controller may have integrated Google
              AdSense.Google AdSense is an online service which allows the
              placement of advertising on third - party sites.Google AdSense is
              based on an algorithm that selects advertisements displayed on
              third - party sites to match with the content of the respective
              third - party site.Google AdSense allows an interest - based
              targeting of the Internet user, which is implemented by means of
              generating individual user profiles.{" "}
            </p>
            <p>
              {" "}
              The operating company of Google's AdSense component is Alphabet
              Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351, United
              States.{" "}
            </p>
            <p>
              {" "}
              The data subject may prevent the setting of cookies through our
              website at any time by means of a corresponding adjustment of the
              web browser used and thus permanently deny the setting of
              cookies.Such an adjustment to the Internet browser used would also
              prevent Alphabet Inc.from setting a cookie on the information
              technology system of the data subject.Additionally, cookies
              already in use by Alphabet Inc.may be deleted at any time via a
              web browser or other software programs.{" "}
            </p>
            <p>
              {" "}
              Furthermore, Google AdSense also uses so - called tracking
              pixels.{" "}
            </p>
            <p>
              {" "}
              Through Google AdSense, personal data and information—which also
              includes the IP address, and is necessary for the collection and
              accounting of the displayed advertisements—is transmitted to
              Alphabet Inc.in the United States of America.These personal data
              will be stored and processed in the United States of America.The
              Alphabet Inc.may disclose the collected personal data through this
              technical procedure to third parties.{" "}
            </p>
            <p>
              {" "}
              Google AdSense is further explained under the following link{" "}
              <a
                href="https://www.google.com/intl/en/adsense/start/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://www.google.com/intl/en/adsense/start/
              </a>
              .{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Use of Google Analytics(with anonymization function)
            </h3>
            <p>
              {" "}
              On this website, the controller may have integrated the component
              of Google Analytics(with the anonymizer function). Google
              Analytics is a web analytics service.Web analytics is the
              collection, gathering, and analysis of data about the behavior of
              visitors to websites.A web analysis service collects, inter alia,
              data about the website from which a person has come(the so -
              called referrer), which sub - pages were visited, or how often and
              for what duration a sub - page was viewed.Web analytics are mainly
              used for the optimization of a website and in order to carry out a
              cost - benefit analysis of Internet advertising.{" "}
            </p>
            <p>
              {" "}
              The operator of the Google Analytics component is Google Inc.,
              1600 Amphitheatre Pkwy, Mountain View, CA 94043 - 1351, United
              States.{" "}
            </p>
            <p>
              {" "}
              For the web analytics through Google Analytics the controller uses
              the application "_gat. _anonymizeIp".By means of this application
              the IP address of the Internet connection of the data subject is
              abridged by Google and anonymised when accessing our websites from
              a Member State of the European Union or another Contracting State
              to the Agreement on the European Economic Area.{" "}
            </p>
            <p>
              {" "}
              The purpose of the Google Analytics component is to analyze the
              traffic on our website.Google uses the collected data and
              information, inter alia, to evaluate the use of our website and to
              provide online reports, which show the activities on our websites,
              and to provide other services concerning the use of our Internet
              site for us.{" "}
            </p>
            <p>
              {" "}
              Further information and the applicable data protection provisions
              of Google may be retrieved under{" "}
              <a
                href="https://www.google.com/intl/en/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://www.google.com/intl/en/policies/privacy/
              </a>{" "}
              and under{" "}
              <a
                href="http://www.google.com/analytics/terms/us.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                http://www.google.com/analytics/terms/us.html
              </a>
              . Google Analytics is further explained under the following Link{" "}
              <a
                href="https://www.google.com/analytics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                https://www.google.com/analytics/
              </a>
              .{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Use of Google Remarketing{" "}
            </h3>
            <p>
              {" "}
              On this website, the controller may have integrated Google
              Remarketing services.Google Remarketing is a feature of Google
              AdWords, which allows an enterprise to display advertising to
              Internet users who have previously resided on the enterprise's
              Internet site. The integration of Google Remarketing therefore
              allows an enterprise to create user-based advertising and thus
              shows relevant advertisements to interested Internet users.{" "}
            </p>
            <p>
              {" "}
              The operating company of the Google Remarketing services is the
              Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043 -
              1351, United States.{" "}
            </p>
            <p>
              {" "}
              The purpose of Google Remarketing is the insertion of interest -
              relevant advertising.Google Remarketing allows us to display ads
              on the Google network or on other websites, which are based on
              individual needs and matched to the interests of Internet
              users.{" "}
            </p>
            <p>
              {" "}
              The personal data are stored by Google in the United States of
              America.Google may pass these personal data collected through the
              technical procedure to third parties.{" "}
            </p>
            <p>
              {" "}
              Further information and the actual data protection provisions of
              Google may be retrieved under{" "}
              <a
                href="https://www.google.com/intl/en/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://www.google.com/intl/en/policies/privacy/
              </a>
              .{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Application and use of Google +{" "}
            </h3>
            <p>
              {" "}
              On this website, the controller may have integrated the Google +
              button as a component.Google + is a so - called social network.A
              social network is a social meeting place on the Internet, an
              online community, which usually allows users to communicate with
              each other and interact in a virtual space.A social network may
              serve as a platform for the exchange of opinions and experiences
              or enable the Internet community to provide personal or business -
              related information.Google + allows users of the social network to
              include the creation of private profiles, upload photos and
              network through friend requests.{" "}
            </p>
            <p>
              {" "}
              The operating company of Google + is Google Inc., 1600
              Amphitheatre Pkwy, Mountain View, CA 94043 - 1351, UNITED
              STATES.{" "}
            </p>
            <p>
              {" "}
              With each call - up to one of the individual pages of this
              website, which is operated by the controller and on which a Google
              + button has been integrated, the Internet browser on the
              information technology system of the data subject automatically
              downloads a display of the corresponding Google + button of Google
              through the respective Google + button component.During the course
              of this technical procedure, Google is made aware of what specific
              sub - page of our website was visited by the data subject.More
              detailed information about Google + is available under{" "}
              <a
                href="https://developers.google.com/+/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://developers.google.com/+/
              </a>
              .{" "}
            </p>
            <p>
              If the data subject does not wish to transmit personal data to
              Google, he or she may prevent such transmission by logging out of
              his Google + account before calling up our website.{" "}
            </p>
            <p>
              {" "}
              Further information and the data protection provisions of Google
              may be retrieved under{" "}
              <a
                href="https://www.google.com/intl/en/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://www.google.com/intl/en/policies/privacy/
              </a>
              . More references from Google about the Google+ 1 button may be
              obtained under{" "}
              <a
                href="https://developers.google.com/+/web/buttons-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                https://developers.google.com/+/web/buttons-policy
              </a>
              .{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Application and use of Google - AdWords{" "}
            </h3>
            <p>
              {" "}
              On this website, the controller may have integrated Google
              AdWords.Google AdWords is a service for Internet advertising that
              allows the advertiser to place ads in Google search engine results
              and the Google advertising network.Google AdWords allows an
              advertiser to pre - define specific keywords with the help of
              which an ad on Google's search results only then displayed, when
              the user utilizes the search engine to retrieve a keyword-relevant
              search result. In the Google Advertising Network, the ads are
              distributed on relevant web pages using an automatic algorithm,
              taking into account the previously defined keywords.{" "}
            </p>
            <p>
              {" "}
              The operating company of Google AdWords is Google Inc., 1600
              Amphitheatre Pkwy, Mountain View, CA 94043 - 1351, UNITED
              STATES.{" "}
            </p>
            <p>
              {" "}
              The purpose of Google AdWords is the promotion of our website by
              the inclusion of relevant advertising on the websites of third
              parties and in the search engine results of the search engine
              Google and an insertion of third - party advertising on our
              website.{" "}
            </p>
            <p>
              {" "}
              The data subject has a possibility of objecting to the interest -
              based advertisement of Google.Therefore, the data subject must
              access from each of the browsers in use the link{" "}
              <a
                href="http://www.google.de/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                www.google.de / settings / ads{" "}
              </a>{" "}
              and set the desired settings.{" "}
            </p>
            <p>
              Further information and the applicable data protection provisions
              of Google may be retrieved under{" "}
              <a
                href="https://www.google.com/intl/en/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://www.google.com/intl/en/policies/privacy/
              </a>
              .{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Application and use of Instagram{" "}
            </h3>
            <p>
              {" "}
              On this website, the controller may have integrated components of
              the service Instagram.Instagram is a service that may be qualified
              as an audiovisual platform, which allows users to share photos and
              videos, as well as disseminate such data in other social
              networks.{" "}
            </p>
            <p>
              {" "}
              The operating company of the services offered by Instagram is
              Instagram LLC, 1 Hacker Way, Building 14 First Floor, Menlo Park,
              CA, UNITED STATES.{" "}
            </p>
            <p>
              {" "}
              Instagram receives information via the Instagram component that
              the data subject has visited our website provided that the data
              subject is logged in at Instagram at the time of the call to our
              website.This occurs regardless of whether the person clicks on the
              Instagram button or not.If such a transmission of information to
              Instagram is not desirable for the data subject, then he or she
              can prevent this by logging off from their Instagram account
              before a call - up to our website is made.{" "}
            </p>
            <p>
              {" "}
              Further information and the applicable data protection provisions
              of Instagram may be retrieved under{" "}
              <a
                href="https://help.instagram.com/155833707900388"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://help.instagram.com/155833707900388
              </a>{" "}
              and{" "}
              <a
                href="https://www.instagram.com/about/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                https://www.instagram.com/about/legal/privacy/
              </a>
              .{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Application and use of LinkedIn{" "}
            </h3>
            <p>
              {" "}
              The controller may have integrated components of the LinkedIn
              Corporation on this website.LinkedIn is a web - based social
              network that enables users with existing business contacts to
              connect and to make new business contacts.{" "}
            </p>
            <p>
              {" "}
              The operating company of LinkedIn is LinkedIn Corporation, 2029
              Stierlin Court Mountain View, CA 94043, UNITED STATES.For privacy
              matters outside of the UNITED STATES LinkedIn Ireland, Privacy
              Policy Issues, Wilton Plaza, Wilton Place, Dublin 2, Ireland, is
              responsible.{" "}
            </p>
            <p>
              {" "}
              LinkedIn receives information via the LinkedIn component that the
              data subject has visited our website, provided that the data
              subject is logged in at LinkedIn at the time of the call - up to
              our website.This occurs regardless of whether the person clicks on
              the LinkedIn button or not.If such a transmission of information
              to LinkedIn is not desirable for the data subject, then he or she
              may prevent this by logging off from their LinkedIn account before
              a call - up to our website is made.{" "}
            </p>
            <p>
              {" "}
              LinkedIn provides under{" "}
              <a
                href="https://www.linkedin.com/psettings/guest-controls"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://www.linkedin.com/psettings/guest-controls
              </a>{" "}
              the possibility to unsubscribe from e-mail messages, SMS messages
              and targeted ads, as well as the ability to manage ad settings.
              LinkedIn also uses affiliates such as Eire, Google Analytics,
              BlueKai, DoubleClick, Nielsen, Comscore, Eloqua, and Lotame. The
              setting of such cookies may be denied under{" "}
              <a
                href="https://www.linkedin.com/legal/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                https://www.linkedin.com/legal/cookie-policy
              </a>
              . The applicable privacy policy for LinkedIn is available under{" "}
              <a
                href="https://www.linkedin.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                https://www.linkedin.com/legal/privacy-policy
              </a>
              . The LinkedIn Cookie Policy is available under{" "}
              <a
                href="https://www.linkedin.com/legal/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                https://www.linkedin.com/legal/cookie-policy
              </a>
              .{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Application and use of Twitter{" "}
            </h3>
            <p>
              {" "}
              On this website, the controller may have integrated components of
              Twitter.Twitter is a multilingual, publicly - accessible
              microblogging service on which users may publish and spread so -
              called ‘tweets,’ e.g.short messages, which are limited to 140
              characters.These short messages are available for everyone,
              including those who are not logged on to Twitter.The tweets are
              also displayed to so - called followers of the respective
              user.Followers are other Twitter users who follow a user's tweets.
              Furthermore, Twitter allows you to address a wide audience via
              hashtags, links or retweets.{" "}
            </p>
            <p>
              {" "}
              The operating company of Twitter is Twitter, Inc., 1355 Market
              Street, Suite 900, San Francisco, CA 94103, UNITED STATES.{" "}
            </p>
            <p>
              {" "}
              Twitter receives information via the Twitter component that the
              data subject has visited our website, provided that the data
              subject is logged in on Twitter at the time of the call - up to
              our website.This occurs regardless of whether the person clicks on
              the Twitter component or not.If such a transmission of information
              to Twitter is not desirable for the data subject, then he or she
              may prevent this by logging off from their Twitter account before
              a call - up to our website is made.{" "}
            </p>
            <p>
              {" "}
              The applicable data protection provisions of Twitter may be
              accessed under{" "}
              <a
                href="https://twitter.com/privacy?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                {" "}
                https://twitter.com/privacy?lang=en
              </a>
              .{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Application and use of YouTube{" "}
            </h3>
            <p>
              {" "}
              On this website, the controller may have integrated components of
              YouTube.YouTube is an Internet video portal that enables video
              publishers to set video clips and other users free of charge,
              which also provides free viewing, review and commenting on
              them.YouTube allows you to publish all kinds of videos, so you can
              access both full movies and TV broadcasts, as well as music
              videos, trailers, and videos made by users via the Internet
              portal.{" "}
            </p>
            <p>
              {" "}
              The operating company of YouTube is YouTube, LLC, 901 Cherry Ave.,
              San Bruno, CA 94066, UNITED STATES.The YouTube, LLC is a
              subsidiary of Google Inc., 1600 Amphitheatre Pkwy, Mountain View,
              CA 94043 - 1351, UNITED STATES.{" "}
            </p>
            <p>
              {" "}
              YouTube and Google will receive information through the YouTube
              component that the data subject has visited our website, if the
              data subject at the time of the call to our website is logged in
              on YouTube; this occurs regardless of whether the person clicks on
              a YouTube video or not.If such a transmission of this information
              to YouTube and Google is not desirable for the data subject, the
              delivery may be prevented if the data subject logs off from their
              own YouTube account before a call - up to our website is
              made.{" "}
            </p>
            <p>
              {" "}
              YouTube's data protection provisions, available at{" "}
              <a
                href="https://www.google.com/intl/en/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a88d52] underline hover:text-opacity-80"
              >
                https://www.google.com/intl/en/policies/privacy/
              </a>
              , provide information about the collection, processing and use of
              personal data by YouTube and Google.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Do Not Track Disclosure{" "}
            </h3>
            <p>
              {" "}
              We support Do Not Track("DNT").Do Not Track is a preference you
              can set in your web browser to inform websites that you do not
              want to be tracked.{" "}
            </p>
            <p>
              {" "}
              You can enable or disable Do Not Track by visiting the Preferences
              or Settings page of your web browser.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Service Providers{" "}
            </h3>
            <p>
              {" "}
              We may employ third party companies and individuals to facilitate
              our Service, to provide the Service on our behalf, to perform
              Service - related services and / or to assist us in analyzing how
              our Service is used.{" "}
            </p>
            <p>
              {" "}
              These third parties have access to your Personal Information only
              to perform specific tasks on our behalf and are obligated not to
              disclose or use your information for any other purpose.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Communications{" "}
            </h3>
            <p>
              {" "}
              We may use your Personal Information to contact you with
              newsletters, emails, marketing or promotional materials and other
              information you consented to receive.You may opt out of receiving
              any, or all, of these communications from us by following the
              unsubscribe link or instructions provided in any email we
              send.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Compliance with Laws{" "}
            </h3>
            <p>
              {" "}
              We will disclose your Personal Information in accordance with GDPR
              compliance where required to do so by law or subpoena or if we
              believe that such action is necessary to comply with the law and
              the reasonable requests of law enforcement or to protect the
              security or integrity of our Service.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Security{" "}
            </h3>
            <p>
              {" "}
              The security of your Personal Information is important to us, and
              we strive to implement and maintain reasonable, commercially
              acceptable security procedures and practices appropriate to the
              nature of the information we store, in order to protect it from
              unauthorized access, destruction, use, modification, or
              disclosure.{" "}
            </p>
            <p>
              {" "}
              However, please be aware that no method of transmission over the
              internet, or method of electronic storage is 100 % secure and we
              are unable to guarantee the absolute security of the Personal
              Information we have collected from you.{" "}
            </p>
            <p>
              {" "}
              In the case of a personal data breach, we will, without undue
              delay and, where feasible, not later than 72 hours after having
              become aware of it, notify the personal data breach to the
              supervisory authority, unless the personal data breach is unlikely
              to result in a risk to the rights and freedoms of natural
              persons.Where the notification to the supervisory authority is not
              made within 72 hours, it shall be accompanied by reasons for the
              delay.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              International Transfer{" "}
            </h3>
            <p>
              {" "}
              Your information, including Personal Information, may be
              transferred to — and maintained on — computers located outside of
              your state, province, country or other governmental jurisdiction
              where the data protection laws may differ than those from your
              jurisdiction.{" "}
            </p>
            <p>
              {" "}
              If you are located outside United States and choose to provide
              information to us, please note that we transfer the information,
              including Personal Information, to United States and process it
              there.{" "}
            </p>
            <p>
              {" "}
              When giving consent you are agreeing to and acknowledging the
              transfer of your data.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Data protection for applications / contracts{" "}
            </h3>
            <p>
              {" "}
              The data controller shall collect and process the personal data of
              applicants for the purpose of the processing of the application
              procedure.The processing may also be carried out
              electronically.This is the case, in particular, if an applicant
              submits corresponding application documents by e - mail or by
              means of a web form on the website to the controller.If the data
              controller concludes an independent contract with an applicant,
              the submitted data will be stored for the purpose of processing
              the contractual relationship in compliance with legal
              requirements.If no contract is concluded with the applicant by the
              controller, the application documents shall be automatically
              erased within a one - month time period, provided that no other
              legitimate interests of the controller are opposed to the
              erasure.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Links to Other Sites{" "}
            </h3>
            <p>
              {" "}
              Our Service may contain links to other sites that are not operated
              by us.If you click on a third - party link, you will be directed
              to that third party's site. We strongly advise you to review the
              Privacy Policy of every site you visit. We have no control over,
              and assume no responsibility for the content, privacy policies or
              practices of any third-party sites or services.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Children's Privacy
            </h3>
            <p>
              {" "}
              Only persons age 18 or older have permission to access our
              Service.Our Service does not address anyone under the age of
              13("Children").{" "}
            </p>
            <p>
              {" "}
              We do not knowingly collect personally identifiable information
              from child under 13. If you are a parent or guardian and you learn
              that your Children have provided us with Personal Information,
              please contact us with your request to erase the data.We will
              erase the data without undue wait.{" "}
            </p>
            <p>
              {" "}
              If we become aware that we have collected Personal Information
              from a child under age 13 without verification of parental
              consent, we will remove the data without undue wait.{" "}
            </p>

            <h3 className="text-center font-semibold text-base text-gray-700 pt-2">
              {" "}
              Changes to This Privacy Policy{" "}
            </h3>
            <p>
              {" "}
              This Privacy Policy is effective as of May 24th, 2018 and will
              remain in effect except with respect to any changes in its
              provisions in the future, which will be in effect immediately
              after being posted on this page.
            </p>
            <p>
              {" "}
              We reserve the right to update or change our Privacy Policy at any
              time and you should check this Privacy Policy periodically.If we
              make any material changes to this Privacy Policy, we will notify
              you by email to the address you have provided us.
            </p>
            <p>
              {" "}
              Continued use of the Service after we post any modifications to
              the Privacy Policy will require your consent.{" "}
            </p>
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
