"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
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
          <Link href={"/"}>
            <div className="flex items-center gap-4 py-3 px-8 font-medium w-[208px] bg-fillColor rounded-lg hover:bg-glass transition-colors duration-200">
              <LayoutDashboard size="20" />
              <span>Dashboard</span>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex items-center gap-4 py-3 px-8 font-medium w-[208px] rounded-lg hover:bg-glass transition-colors duration-200">
              <UserRound size="20" />
              <span>Account</span>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex items-center gap-4 py-3 px-8 font-medium w-[208px] rounded-lg hover:bg-glass transition-colors duration-200">
              <PieChart size="20" />
              <span>Chart</span>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex items-center gap-4 py-3 px-8 font-medium w-[208px] rounded-lg hover:bg-glass transition-colors duration-200">
              <Wallet size="20" />
              <span>Wallet</span>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex items-center gap-4 py-3 px-8 font-medium w-[208px] rounded-lg hover:bg-glass transition-colors duration-200">
              <Newspaper size="20" />
              <span>News</span>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex items-center gap-4 py-3 px-8 font-medium w-[208px] rounded-lg hover:bg-glass transition-colors duration-200">
              <Settings size="20" />
              <span>Settings</span>
            </div>
          </Link>
        </div>
        <Link href={"/"}>
          <div className="flex items-center gap-4 py-3 px-8 font-medium w-[208px] rounded-lg hover:bg-glass transition-colors duration-200">
            <LogOut size="20" />
            <span>Log out</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export { Sidebar };
