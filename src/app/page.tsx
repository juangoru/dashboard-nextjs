import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/ui/sidebar";
import { Topbar } from "@/components/ui/topbar";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden background">
      <Sidebar></Sidebar>
      <div className="flex flex-col w-full">
        <Topbar />
      </div>
    </main>
  );
}
