import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Payme",
  description: "Simplifier votre gestion financière avec Payme",
  icons: {
    icon: "/icon.png", // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className="!scroll-smooth no-scrollbar w-full h-full no-scrollbar"
    >
      <head></head>
      <body className={clsx(inter.className, "")}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}

/*  window.localStorage.getItem("appversion") */
