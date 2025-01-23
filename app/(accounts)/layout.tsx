import { Sidebar } from "@/app/(accounts)/_components/sidebar";
import { ReactNode } from "react";
import { Navbar } from "../../components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
        <Toaster expand={true} position="bottom-right" duration={2000} />
        <div className="flex flex-col md:flex-row min-h-screen bg-background">
          <Sidebar />
          <main className="flex-1 overflow-y-auto py-4 md:p-8">{children}</main>
        </div>
      </main>
      <Footer />
    </>
  );
}
