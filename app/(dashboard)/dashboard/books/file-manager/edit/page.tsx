import { FileEditor } from "@/components/FileEditor";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense>
      <FileEditor />
    </Suspense>
  );
}
