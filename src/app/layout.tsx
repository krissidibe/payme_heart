import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata, Viewport } from "next";
import "./globals.css";

import clsx from "clsx";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GM9S1HY9Y5"
        ></Script>
        <Script id="google-analytics">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GM9S1HY9Y5');
 `}
        </Script>
      </head>
      <body className={clsx(inter.className, "")}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}

/*  window.localStorage.getItem("appversion") */
