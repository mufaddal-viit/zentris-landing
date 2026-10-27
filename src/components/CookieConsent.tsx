"use client";

import { useState, useEffect, useCallback } from "react";

type ConsentState = "pending" | "accepted" | "rejected";

const CONSENT_KEY = "zentris_cookie_consent";
const CONSENT_VERSION = "1";

function getStoredConsent(): ConsentState {
  if (typeof window === "undefined") return "pending";
  const stored = localStorage.getItem(CONSENT_KEY);
  if (!stored) return "pending";
  try {
    const parsed = JSON.parse(stored);
    if (parsed.version === CONSENT_VERSION) return parsed.state;
  } catch {}
  return "pending";
}

function storeConsent(state: ConsentState) {
  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({ state, version: CONSENT_VERSION, timestamp: new Date().toISOString() })
  );
}

/** Load GA4 only after consent */
function loadAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!id || document.querySelector(`script[src*="gtag"]`)) return;

  // Google Consent Mode v2 — grant
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
  });

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    }
    window.gtag = gtag as typeof window.gtag;
    gtag("js", new Date());
    gtag("config", id);
  };
}

export default function CookieConsent() {
  const [state, setState] = useState<ConsentState>("pending");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setState(stored);
    setMounted(true);
    if (stored === "accepted") loadAnalytics();
  }, []);

  const accept = useCallback(() => {
    setState("accepted");
    storeConsent("accepted");
    loadAnalytics();
  }, []);

  const reject = useCallback(() => {
    setState("rejected");
    storeConsent("rejected");
  }, []);

  if (!mounted || state !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[100] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-white p-5 shadow-lg sm:flex sm:items-center sm:gap-6">
        <p className="text-sm text-muted flex-1">
          We use cookies to measure site usage and improve your experience.
          See our{" "}
          <a href="/cookie-policy" className="underline text-navy-ink hover:text-green-deep">
            Cookie Policy
          </a>.
        </p>
        <div className="mt-4 flex gap-3 sm:mt-0 sm:shrink-0">
          <button
            onClick={reject}
            className="h-10 rounded-full border border-line px-5 text-sm font-semibold text-navy-ink transition-colors hover:bg-surface"
          >
            Reject all
          </button>
          <button
            onClick={accept}
            className="h-10 rounded-full bg-green px-5 text-sm font-semibold text-white transition-colors hover:bg-green-deep"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

// Type augmentation for gtag
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
