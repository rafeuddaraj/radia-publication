"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  CreditCard,
  BookOpen,
  History,
  LogOut,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { logout } from "@/actions/auth";

const sidebarItems = [
  { icon: User, label: "Profile", href: "/account" },
  { icon: CreditCard, label: "Transactions", href: "/transactions" },
  { icon: BookOpen, label: "My Books", href: "/my-books" },
  { icon: History, label: "Login History", href: "/login-history" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const SidebarContent = () => (
    <>
      <ScrollArea className="flex-1 py-4">
        <nav
          className={cn(
            "space-y-4 px-2 mb-[100%]",
            isMobile &&
              "flex flex-row space-x-2 space-y-0 px-4 py-2 overflow-x-auto"
          )}
        >
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start mt-2",
                  pathname === item.href && "bg-muted",
                  isMobile && "px-3 py-2 mt-0"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {!isMobile && item.label}
              </Button>
            </Link>
          ))}
        </nav>
        {!isMobile && (
          <div className="border-t p-4">
            <Button
              onClick={async () => await logout()}
              variant="ghost"
              className="w-full justify-start mt-2"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </div>
        )}
      </ScrollArea>
    </>
  );

  return (
    <>
      {isMobile ? (
        <div className="sticky top-0 z-40 w-full bg-background border-b">
          <SidebarContent />
        </div>
      ) : (
        <div className="hidden md:flex h-screen w-64 flex-col border-r bg-background">
          <SidebarContent />
        </div>
      )}
    </>
  );
}
