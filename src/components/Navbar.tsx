"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Home"}
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item={"courses"}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">MERN stack Development</HoveredLink>
            <HoveredLink href="/courses/java">
              java full stack development
            </HoveredLink>
            <HoveredLink href="/courses">generative AI</HoveredLink>
            <HoveredLink href="/courses">mobile Development</HoveredLink>
            <HoveredLink href="/courses">UI/UX Design</HoveredLink>
            <HoveredLink href="/courses">Next.js</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/upcoming"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={"upcoming courses"}
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
