"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import { Search, Mail, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-[#1C1C25]  h-[98px] px-8">
      <h1 className="font-medium text-fillColor text-4xl">Dashboard</h1>
      <div className="relative w-[600px]">
        <Input
          placeholder="Search"
          className="w-full h-[40px] bg-input dark:bg-[#2C2C3A] dark:text-white rounded-lg pl-10"
        />
        <Search
          size={16}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
      </div>
      <Menubar className="bg-transparent border-none">
        <MenubarMenu>
          <MenubarTrigger>
            <Mail size={22} />
          </MenubarTrigger>
          <MenubarTrigger>
            <div className="relative">
              <Bell size={22} />
              <div className="absolute top-0 right-0 w-2 h-2 bg-fillColor rounded-full" />
            </div>
          </MenubarTrigger>
          <MenubarTrigger className="pl-8">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export { Topbar };
