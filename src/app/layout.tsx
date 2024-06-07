import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme.provider";
import Header from "@/components/nav/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer";

const jost = Jost({ subsets: ["latin-ext"] });
export const metadata: Metadata = {
  title: "JPO Portfolio",
  description: "John Onyango is a passionate Full Stack Developer with a strong focus on backend development. With extensive experience in PHP, JavaScript, TypeScript, and a diverse array of frameworks and tools, I have successfully delivered robust web and mobile applications. Explore my projects, including a Ticket Helpdesk web app, Go Meals mobile app, and a comprehensive Job Board platform. Discover how my expertise in Next.js, React Native, and Laravel can elevate your projects to new heights. Let's collaborate to bring innovative and impactful solutions to life. Contact me today to get started.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} flex min-h-screen flex-col items-center antialiased `}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange  enableSystem>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
