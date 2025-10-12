import { Alexandria } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const alex=Alexandria({
  subsets: ["latin"],
  variable: "--font-alexandria",
  weight: ["100", "200", "300","400", "500", "600", "700","800", "900"],
})

export const metadata = {
  title: "مدرسة الفردوس",
  description: "مدرسة الفردوس الخاصه للمراحل الابتدائية والإعدادية و الثانوية",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body
        dir="rtl"
        className={`${alex.className} `}
      >
        {children}
        <Toaster position="top-center" richColors dir="rtl" />
      </body>
    </html>
  );
}
