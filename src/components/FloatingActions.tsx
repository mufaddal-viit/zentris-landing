"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkle, X, PaperPlaneTilt } from "@phosphor-icons/react";

interface Message {
  role: "user" | "ai";
  text: string;
}

const WELCOME_MESSAGE =
  "Hello! I'm the ZENTRIS AI assistant. How can I help you with training courses, pricing, or scheduling?";

const DUMMY_RESPONSE =
  "Thanks for your interest! Our team will get back to you shortly. In the meantime, you can browse our courses or contact us directly.";

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: "ai", text: DUMMY_RESPONSE }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ---------- Chat Panel ---------- */}
      {chatOpen && (
        <>
          {/* Mobile: full-screen overlay */}
          <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#0b2239] px-4 py-3 text-white">
              <span className="text-sm font-semibold tracking-wide">
                ZENTRIS AI Assistant
              </span>
              <button
                onClick={() => setChatOpen(false)}
                className="rounded-full p-1 transition hover:bg-white/20"
              >
                <X size={22} weight="bold" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#18ba60] text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-2 text-sm text-gray-500">
                    ...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t bg-white px-4 py-3 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-[#0b2239]"
              />
              <button
                onClick={sendMessage}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b2239] text-white transition hover:opacity-90"
              >
                <PaperPlaneTilt size={18} weight="fill" />
              </button>
            </div>
          </div>

          {/* Desktop: floating panel */}
          <div className="fixed bottom-24 right-6 z-50 hidden w-[380px] max-h-[500px] flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl lg:flex">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#0b2239] px-4 py-3 text-white">
              <span className="text-sm font-semibold tracking-wide">
                ZENTRIS AI Assistant
              </span>
              <button
                onClick={() => setChatOpen(false)}
                className="rounded-full p-1 transition hover:bg-white/20"
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#18ba60] text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-2 text-sm text-gray-500">
                    ...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t bg-white px-4 py-3 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-[#0b2239]"
              />
              <button
                onClick={sendMessage}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b2239] text-white transition hover:opacity-90"
              >
                <PaperPlaneTilt size={18} weight="fill" />
              </button>
            </div>
          </div>
        </>
      )}

      {/* ---------- Floating Buttons ---------- */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-3 lg:bottom-6 lg:right-6">
        {/* AI Search Button */}
        <button
          onClick={() => setChatOpen((v) => !v)}
          aria-label="AI Search"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b2239] text-white shadow-lg transition-transform duration-200 hover:scale-110 lg:h-14 lg:w-14"
        >
          <Sparkle size={24} weight="fill" />
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/971581604617"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 lg:h-14 lg:w-14"
        >
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>
  );
}
