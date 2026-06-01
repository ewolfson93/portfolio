"use client";

import { useEffect } from "react";

/** Forces the dark palette while this route is mounted, then restores. */
export function ForceDark() {
  useEffect(() => {
    const root = document.documentElement;
    const wasDark = root.classList.contains("dark");
    root.classList.add("dark");
    return () => {
      if (!wasDark) root.classList.remove("dark");
    };
  }, []);
  return null;
}
