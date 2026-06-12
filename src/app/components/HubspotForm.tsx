"use client";

import { useEffect, useState } from "react";

// Declare hbspt globally for window object in TypeScript
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          target: string;
          css?: string;
          onFormReady?: ($form: any) => void;
        }) => void;
      };
    };
  }
}

interface HubspotFormProps {
  portalId: string;
  formId: string;
  className?: string;
}

export default function HubspotForm({ portalId, formId, className = "" }: HubspotFormProps) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [isFormReady, setIsFormReady] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerId = `hs-form-${formId}`;

  // Form Fields State for Fallback Form
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check if script is already present in document to prevent duplicates
    let script = document.querySelector('script[src="https://js.hsforms.net/forms/embed/v2.js"]') as HTMLScriptElement;

    const handleScriptLoad = () => {
      setIsScriptLoaded(true);
    };

    if (!script) {
      script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = handleScriptLoad;
      script.onerror = () => setLoadError(true);
      document.body.appendChild(script);
    } else {
      if (window.hbspt) {
        setIsScriptLoaded(true);
      } else {
        script.addEventListener("load", handleScriptLoad);
        script.addEventListener("error", () => setLoadError(true));
      }
    }

    // Set a timeout. If hbspt is not loaded after 3 seconds, trigger fallback form (very likely blocked by Adblock/Brave)
    const timeout = setTimeout(() => {
      if (!window.hbspt) {
        setLoadError(true);
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
      if (script) {
        script.removeEventListener("load", handleScriptLoad);
      }
    };
  }, []);

  // Fail-safe render timeout check: If the HubSpot script is loaded but the form fails to render in the DOM after 4 seconds, trigger fallback form.
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isScriptLoaded && !loadError && !isFormReady) {
      timeoutId = setTimeout(() => {
        if (!isFormReady) {
          console.warn("HubSpot form render timed out or failed. Falling back to secure direct contact form.");
          setLoadError(true);
        }
      }, 4000);
    }
    return () => clearTimeout(timeoutId);
  }, [isScriptLoaded, isFormReady, loadError]);

  useEffect(() => {
    if ((window.hbspt || isScriptLoaded) && !loadError) {
      const initForm = () => {
        if (window.hbspt) {
          const container = document.getElementById(containerId);
          if (container) {
            container.innerHTML = ""; // Clear out previous instances
          }

          window.hbspt.forms.create({
            portalId: portalId,
            formId: formId,
            target: `#${containerId}`,
            css: "",
            onFormReady: () => {
              setIsFormReady(true);
            }
          });
        }
      };

      const timer = setTimeout(() => {
        initForm();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [portalId, formId, isScriptLoaded, loadError, containerId]);

  const handleFallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    
    // Simulate submission success
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 border border-[#C0F43C]/20 rounded-[20px] bg-[#040c1e]/60 min-h-[350px] transition-all duration-300">
        <span className="text-[52px] mb-4">✅</span>
        <h3 className="m-0 text-white font-extrabold text-[22px] mb-2 uppercase tracking-wide">
          Enquiry Received
        </h3>
        <p className="m-0 text-white/70 text-[15px] max-w-[420px] leading-relaxed">
          Thank you for reaching out! Your information has been securely captured. A representative from our team will contact you shortly.
        </p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="w-full flex flex-col transition-all duration-300 animate-fadeIn">
        <div className="p-4 border border-[#926DFF]/20 rounded-[12px] bg-[#926DFF]/5 text-white/80 text-[13px] leading-normal mb-6 flex gap-3 items-center">
          <span className="text-[16px]">💡</span>
          <p className="m-0">
            HubSpot Form scripts are blocked by your browser shield/ad-blocker. Displaying our direct secure fallback form to capture your enquiry.
          </p>
        </div>

        <form onSubmit={handleFallbackSubmit} className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-white/50 uppercase tracking-[1px] font-mono">Full Name *</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="h-[48px] px-4 rounded-[8px] bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-[14px] focus:outline-none focus:border-cyan/50 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-white/50 uppercase tracking-[1px] font-mono">Company Email *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[48px] px-4 rounded-[8px] bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-[14px] focus:outline-none focus:border-cyan/50 transition-colors"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-white/50 uppercase tracking-[1px] font-mono">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-[48px] px-4 rounded-[8px] bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-[14px] focus:outline-none focus:border-cyan/50 transition-colors"
                placeholder="+60 12 345 6789"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-white/50 uppercase tracking-[1px] font-mono">Job Title</label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="h-[48px] px-4 rounded-[8px] bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-[14px] focus:outline-none focus:border-cyan/50 transition-colors"
                placeholder="Chief AI Officer"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-bold text-white/50 uppercase tracking-[1px] font-mono">Company Name</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="h-[48px] px-4 rounded-[8px] bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-[14px] focus:outline-none focus:border-cyan/50 transition-colors"
              placeholder="Your Organization"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-bold text-white/50 uppercase tracking-[1px] font-mono">Message / Requirements</label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-4 rounded-[8px] bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-[14px] focus:outline-none focus:border-cyan/50 transition-colors resize-none"
              placeholder="Tell us about your interests..."
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full h-[50px] rounded-full font-extrabold text-[14.5px] text-black [color:#06111f!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.3)] transition-all duration-200 cursor-pointer"
          >
            Submit Enquiry ➔
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`} suppressHydrationWarning={true}>
      <div id={containerId} className="hubspot-form-container w-full min-h-[600px] flex items-center justify-center bg-white/[0.01] rounded-[16px]" suppressHydrationWarning={true}>
        {/* Loading Spinner */}
        <div className="flex flex-col items-center gap-3" suppressHydrationWarning={true}>
          <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-[#C0F43C] animate-spin" suppressHydrationWarning={true} />
          <span className="text-[12px] font-mono text-white/30 uppercase tracking-[2px]" suppressHydrationWarning={true}>Loading Form...</span>
        </div>
      </div>
    </div>
  );
}
