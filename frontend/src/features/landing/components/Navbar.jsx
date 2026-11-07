"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HeartPulse, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/Container";
import { NAV_LINKS } from "../data/landing-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/80 bg-background/90 backdrop-blur-md shadow-xs"
          : "border-b border-transparent bg-background/60 backdrop-blur-xs"
      )}
    >
      <Container className="flex h-16 sm:h-20 items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1"
        >
          <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
            <HeartPulse className="size-5 sm:size-6" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-foreground">
                MediPredict
              </span>
              <Badge variant="info" className="text-[10px] px-1.5 py-0 h-4 hidden sm:inline-flex">
                AI Health
              </Badge>
            </div>
            <span className="text-[11px] text-muted-foreground hidden sm:block font-medium">
              Predictive Diagnostics
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface-subtle rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="font-medium text-foreground">
              Sign In
            </Button>
          </Link>
          <a href="#preview">
            <Button variant="navy" size="sm" className="shadow-xs gap-1.5">
              <span>Start Assessment</span>
              <ArrowRight className="size-3.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
          className="lg:hidden p-2 rounded-lg text-foreground hover:bg-surface-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background/98 backdrop-blur-xl px-4 py-6 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <Container className="space-y-4">
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-surface-subtle transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="border-t border-border/80 pt-4 flex flex-col gap-2.5">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-center">
                  Sign In
                </Button>
              </Link>
              <a href="#preview" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="navy" className="w-full justify-center gap-2">
                  <span>Start Free Assessment</span>
                  <ArrowRight className="size-4" />
                </Button>
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;

