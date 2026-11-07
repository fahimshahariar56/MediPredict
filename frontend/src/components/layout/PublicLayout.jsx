"use client";

import React from "react";
import { SmoothScrollProvider } from "@/components/animation/SmoothScrollProvider";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export function PublicLayout({ children }) {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/15 selection:text-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}

export default PublicLayout;

