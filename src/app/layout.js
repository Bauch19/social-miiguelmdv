import NestedLayout from "@/components/nested-layout";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dr Miguel Marín",
  description: "Médico Cirujano CP 14194672, Medicina Estética, Antienvejecimiento & obesidad Universidad La Salle, Universidad del Conde, 📍Coscomatepec | Ver.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NestedLayout>
        {children}
        </NestedLayout>
      </body>
    </html>
  );
}
