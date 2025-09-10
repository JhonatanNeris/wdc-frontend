import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-text',

})

const parisFont = localFont({
  src: './fonts/paris2024.ttf',
  variable: '--font-paris',
  weight: "300",
})

export const metadata: Metadata = {
  title: "WDC - frontend test",
  description: "Superaula gratuita de Ginástica Íntima. Cadastre-se e receba o link da live.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${parisFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
