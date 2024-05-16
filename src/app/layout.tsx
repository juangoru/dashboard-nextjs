import type { Metadata } from "next";
import "./globals.css";
import { Raleway as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Provider } from "@/app/provider";
import { Sidebar } from "@/components/ui/sidebar";
import { Topbar } from "@/components/ui/topbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Just another dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main>
          <Provider>
            <div className="flex h-screen overflow-hidden background">
              <Sidebar></Sidebar>
              <div className="flex flex-col w-full">
                <Topbar></Topbar>
                {children}
              </div>
            </div>
          </Provider>
        </main>
      </body>
    </html>
  );
}
