import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://relaxedrohan.github.io/harishmamtayadav"
  ),
  title: "Harish Yadav & Mamta Yadav | Ward Councillors, Khanpur - New Delhi",
  description:
    "Official portfolio of Harish Yadav & Mamta Yadav - Ward Councillors (Nigam Parshad) of Khanpur Village, Ward 167, South Delhi. Serving the community with dedication.",
  keywords:
    "Harish Yadav, Mamta Yadav, Ward Councillor, Khanpur, New Delhi, MCD, BJP, Nigam Parshad, Ward 167",
  openGraph: {
    title: "Harish Yadav & Mamta Yadav | Ward Councillors",
    description: "Serving Khanpur Village, Ward 167, South Delhi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-navy`}
      >
        {children}
      </body>
    </html>
  );
}
