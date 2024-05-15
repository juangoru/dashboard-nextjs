"use client";
"use strict";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

function Provider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

// Make sure to export the Provider component
export { Provider };
