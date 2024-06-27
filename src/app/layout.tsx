import { TRPCReactProvider } from "@/trpc/react";
import type { Metadata } from "next";
import "./globals.css";

import { Inter as FontSans } from "next/font/google";

import { JotaiProvider } from "@/frontend/lib/jotai-provider";
import { cn } from "@/frontend/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Fullstack Template",
  description: "Useful for starting new projects.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <TRPCReactProvider>
            <JotaiProvider>{children}</JotaiProvider>
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};
