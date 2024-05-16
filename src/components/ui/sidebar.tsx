"use client";
import { NavLink } from "@/components/ui/navlink";
import {
  LayoutDashboard,
  BadgeCent,
  UserRound,
  PieChart,
  Wallet,
  Newspaper,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#1C1C25] dark:text-yellow w-[307px] border-r-2 dark:border-0 border-[#C0C5CB5E]">
      {/* sidebar logo */}
      <div className="flex justify-start items-start p-5">
        <BadgeCent size="80" color="#c9bf4d" />
      </div>

      {/* side nav */}
      <nav className="flex flex-col justify-between flex-grow p-10 space-y-2">
        <div>
          <NavLink href="/">
            <LayoutDashboard size="20" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink href="/account">
            <UserRound size="20" />
            <span>Account</span>
          </NavLink>
          <NavLink href="/chart">
            <PieChart size="20" />
            <span>Chart</span>
          </NavLink>
          <NavLink href="/wallet">
            <Wallet size="20" />
            <span>Wallet</span>
          </NavLink>
          <NavLink href="/news">
            <Newspaper size="20" />
            <span>News</span>
          </NavLink>
          <NavLink href="/settings">
            <Settings size="20" />
            <span>Settings</span>
          </NavLink>
        </div>
        <NavLink href="/">
          <LogOut size="20" />
          <span>Log out</span>
        </NavLink>
      </nav>
    </div>
  );
};

export { Sidebar };
