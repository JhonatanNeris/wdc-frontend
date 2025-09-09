"use client";
import { FormEvent, useState } from "react";

// Colors pulled to match the reference as closely as possible
const BLUE = "#1A18BB"; // deep royal blue used for text and button
interface EmailCaptureProps { 
    color? : string;
}

export default function EmailCapture({ color = "#1A18BB" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");

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
          className="flex-1 h-14 px-4 pr-20 font-semibold placeholder:font-bold placeholder:text-[#1A18BB]  focus:outline-none"
          style={{ color: BLUE, caretColor: BLUE, WebkitTextSizeAdjust: "100%" }}
        />

        {/* Blue action button with a pill-shaped left edge intruding into the input */}
        <button
          type="submit"
          className="relative grid place-items-center h-14 w-[184px] -ml-10"
          aria-label="Enviar e-mail"
          title="Enviar"
          style={{ backgroundColor: color, color: "#fff", borderTopRightRadius: 6, borderBottomRightRadius: 6, borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 }}
        >
          {/* Centered left-pointing arrow */}
          <svg
            viewBox="0 0 24 24"
            className="size-6 transition-transform duration-200 group-hover:-translate-x-0.5"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: "rotate(360deg)" }} // rotate right-arrow to point left
          >
            <path d="M5 12h14" />
            <path d="m12 19-7-7 7-7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
