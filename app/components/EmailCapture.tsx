"use client";
import { FormEvent, useState } from "react";

// Colors pulled to match the reference as closely as possible
const BLUE = "#1A18BB"; // deep royal blue used for text and button
interface EmailCaptureProps { 
    color? : string;
}

export default function EmailCapture({ color = "#1A18BB" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");

  function getTextColor(bg: string): string {
    const hex = bg.replace("#", "")
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return luminance > 0.5 ? BLUE : "#fff" // claro → azul, escuro → branco
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ email });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
      aria-label="Formulário de captura de e-mail"
    >
      {/* Outer container with slight rounding to match screenshot */}
      <div className="relative flex items-stretch bg-white shadow-sm overflow-hidden">
        {/* Text input */}
        <input
          type="email"
          inputMode="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite aqui o seu melhor e-mail"
          className="flex-1 h-14 px-4 pr-20 font-semibold placeholder:font-bold placeholder:text-[#1A18BB] placeholder:text-sm focus:outline-none"
          style={{ color: BLUE, caretColor: BLUE, WebkitTextSizeAdjust: "100%" }}
        />

        <button
          type="submit"
        //   130 corrige o espaçamento do botão testar
          className="relative grid place-items-center h-14 w-[184px] -ml-10"
          aria-label="Enviar e-mail"
          title="Enviar"
          style={{ backgroundColor: color, color: getTextColor(color), borderTopRightRadius: 6, borderBottomRightRadius: 6, borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 }}
        >
          {/* Centered left-pointing arrow */}
          <svg
            viewBox="0 0 24 24"
            className="size-8 transition-transform duration-200 group-hover:-translate-x-0.5"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: "rotate(360deg)" }} // rotate right-arrow to point left
          >
            <path d="M5 12h116" />
            <path d="m12 19-7-7 7-7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
