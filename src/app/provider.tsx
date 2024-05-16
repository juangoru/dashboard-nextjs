"use client";
"use strict";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Provider({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme("dark");
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export { Provider };
