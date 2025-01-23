import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
            <Navbar />
      <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
        <Toaster expand={true} position="bottom-right" duration={2000} />
        {children}
      </main>
      <Footer />
    </>
  );
}
