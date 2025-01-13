import { Sidebar } from "@/app/(accounts)/_components/sidebar";
import { ReactNode } from "react";
export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1 overflow-y-auto py-4 md:p-8">{children}</main>
      </div>
    </>
  );
}
