import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme.provider";
import Header from "@/components/nav/navigation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/footer";

const jost = Jost({ subsets: ["latin-ext"] });
export const metadata: Metadata = {
  title: "JPO Portfolio",
  description: "Best portfolio for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} min-h-screen antialiased `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer/>
          <ToastContainer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
