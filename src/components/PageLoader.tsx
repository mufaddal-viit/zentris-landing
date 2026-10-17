"use client";

import { useEffect, useState, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [removed, setRemoved] = useState(false);

  const dismiss = useCallback(() => setVisible(false), []);

  useEffect(() => {
    let raf: number;
    let timer: ReturnType<typeof setTimeout>;

    const onReady = () => {
      raf = requestAnimationFrame(() => {
        timer = setTimeout(dismiss, 300);
      });
    };

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady, { once: true });
    }

    const max = setTimeout(dismiss, 2500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      clearTimeout(max);
      window.removeEventListener("load", onReady);
    };
  }, [dismiss]);

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => setRemoved(true), 500);
      return () => clearTimeout(t);
    }
  }, [visible]);

  if (removed) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 500ms ease-out",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Skeleton placeholders */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff" }}>
        <Skeleton className="w-full h-20 rounded-none" />
        <div style={{ padding: "2rem" }}>
          <Skeleton className="w-full h-[360px] rounded-xl mt-6" />
          <Skeleton className="w-3/4 h-5 rounded mt-8" />
          <Skeleton className="w-1/2 h-5 rounded mt-4" />
          <Skeleton className="w-2/3 h-5 rounded mt-4" />
        </div>
      </div>

      {/* Centered logo overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}
      >
        {/* Wave logo — just the 3 wave paths, no text */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 90 38"
          style={{
            width: "clamp(80px, 20vw, 120px)",
            height: "auto",
          }}
        >
          {/* Wave 1 - top green (draws first) */}
          <path
            className="wave-1"
            d="M3.16895 16.0928C4.79964 15.6346 6.30905 16.2545 7.85888 16.0928C13.8291 15.6885 18.6403 12.8988 23.3033 9.35437C26.1413 7.03777 29.1659 4.95975 32.3463 3.14156C37.7044 0.325203 43.9594 -0.256205 49.7448 1.52434C51.7511 2.03898 53.7083 2.72895 55.5938 3.58629C53.7879 3.70758 52.4941 3.70758 51.2138 3.8693C44.718 4.67791 39.2868 7.97973 33.8961 11.3624C29.1657 14.3408 24.4623 17.2922 18.829 18.5186C13.6567 19.5892 8.27467 18.8916 3.5463 16.5375C3.41153 16.4836 3.34414 16.2949 3.16895 16.0928Z"
            fill="#18ba60"
            style={{ opacity: 0 }}
          />
          {/* Wave 2 - bottom green (draws second) */}
          <path
            className="wave-2"
            d="M24.54 33.9252C34.9846 34.6934 43.758 30.3673 52.5988 26.2703C58.313 23.575 63.9597 20.8796 70.1187 19.5319C73.2976 18.7237 76.6121 18.6013 79.842 19.1729C83.0718 19.7445 86.143 20.997 88.8514 22.8472C89.1749 23.0629 89.5927 23.1976 89.7409 23.8445C88.7436 23.7232 87.8137 23.6019 86.8703 23.5211C79.7142 22.8472 73.1644 24.9631 66.8168 27.955C62.1269 30.1517 57.5583 32.6179 52.747 34.5855C43.8928 38.2108 34.9981 38.6286 26.0494 34.9225C25.4499 34.766 24.9191 34.4153 24.54 33.9252Z"
            fill="#18ba60"
            style={{ opacity: 0 }}
          />
          {/* Wave 3 - middle navy (draws third) */}
          <path
            className="wave-3"
            d="M0 19.8804C0.589184 20.1293 1.16099 20.4174 1.71156 20.7429C8.55778 25.5811 15.8757 25.7293 23.5305 23.0879C29.5142 21.0259 34.9589 17.8589 40.5248 14.9344C46.8724 11.5787 53.22 8.196 60.4166 7.06395C64.4193 6.37367 68.5262 6.59697 72.4305 7.71714C76.3348 8.83732 79.9354 10.8254 82.9633 13.5328C82.8632 13.6894 82.7097 13.8044 82.5312 13.8564C82.3528 13.9084 82.1616 13.894 81.993 13.8158C74.3786 11.6056 67.1685 13.142 59.9853 15.9317C52.8022 18.7214 46.1581 22.6701 39.2849 26.0932C34.2293 28.8825 28.7748 30.8779 23.1127 32.0095C13.9889 33.492 7.14272 29.6915 1.71156 22.7105C0.930229 21.9119 0.344412 20.9432 0 19.8804Z"
            fill="#15416e"
            style={{ opacity: 0 }}
          />
        </svg>

        {/* Loading dots */}
        <div className="loader-dots" style={{ display: "flex", gap: "6px" }}>
          <span className="dot dot-1" />
          <span className="dot dot-2" />
          <span className="dot dot-3" />
        </div>
      </div>

      <style>{`
        /* Wave paths fade-in + slide-up staggered */
        .wave-1 {
          animation: waveFadeIn 0.5s ease-out 0.1s forwards;
        }
        .wave-2 {
          animation: waveFadeIn 0.5s ease-out 0.3s forwards;
        }
        .wave-3 {
          animation: waveFadeIn 0.5s ease-out 0.5s forwards;
        }

        @keyframes waveFadeIn {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* After all waves appear, pulse the whole SVG */
        svg:has(.wave-3) {
          animation: logoPulse 1.8s ease-in-out 1s infinite;
        }

        @keyframes logoPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Loading dots */
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #15416e;
          animation: dotBounce 1.2s ease-in-out infinite;
        }
        .dot-1 { animation-delay: 0s; }
        .dot-2 { animation-delay: 0.15s; }
        .dot-3 { animation-delay: 0.3s; }

        @keyframes dotBounce {
          0%, 80%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          40% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
