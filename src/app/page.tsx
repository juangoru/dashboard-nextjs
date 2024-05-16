import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/ui/sidebar";
import { Topbar } from "@/components/ui/topbar";
import { Dashboard } from "@/components/ui/dashboard";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden background">
      <Sidebar></Sidebar>
      <div className="flex flex-col w-full">
        <Topbar />
        <Dashboard />
      </div>
    </main>
  );
}
