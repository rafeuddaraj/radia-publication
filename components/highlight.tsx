import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Highlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <span className={cn("highlight", className)}>{children}</span>
    </>
  );
}
