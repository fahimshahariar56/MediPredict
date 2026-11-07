"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { LENIS_CONFIG } from "@/lib/animations/smooth-scroll";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

export function SmoothScrollProvider({ children, enabled = true }) {
  const lenisRef = useRef(null);
  const reqIdRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!enabled || prefersReducedMotion || typeof window === "undefined") {
      return;
    }

    const instance = new Lenis(LENIS_CONFIG);
    lenisRef.current = instance;

    function raf(time) {
      instance.raf(time);
      reqIdRef.current = requestAnimationFrame(raf);
    }

    reqIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current);
      }
      instance.destroy();
      lenisRef.current = null;
    };
  }, [enabled, prefersReducedMotion]);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
}

export default SmoothScrollProvider;
