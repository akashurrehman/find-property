"use client";

import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import StyledComponentsRegistry from "./lib/styled-components-registry";
import ThemeWrapper from "@/src/theme/ThemeWrapper";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ThemeWrapper>
          <StyledComponentsRegistry>
            <Header />
            <main>
              <AnimatePresence mode="wait">
                <motion.div
                  key={pathname}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </main>
            <Footer />
          </StyledComponentsRegistry>
        </ThemeWrapper>
      </body>
    </html>

  );
}
