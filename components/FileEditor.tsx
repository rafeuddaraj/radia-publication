"use client";

import { useState, Suspense, useCallback, useEffect } from "react";
import EditorComponent from "@/app/(admin)/admin/books/_components/EditorComponent";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export function FileEditor() {
  const [files, setFiles] = useState({ content: "" });
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const currentPath = searchParams.get("id") as string;

  const fetchFiles = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/files/${encodeURIComponent(currentPath)}`
      );
      const data = await response.json();
      setFiles(data);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  }, [currentPath, setIsLoading]);

  useEffect(() => {
    fetchFiles();
  }, [currentPath, fetchFiles]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileSave = async (content: string) => {
    setIsSubmitted(true);
    toast.loading("Saving....");
    if (currentPath) {
      try {
        await fetch(`/api/files/${encodeURIComponent(currentPath)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ path: currentPath, content }),
        });
        fetchFiles();
        toast.dismiss();
        toast.success("Done ✅");
      } catch {
        toast.dismiss();
        toast.error("There was an problem", { cancel: true });
      }
      setIsSubmitted(false);
    }
  };


  return (
    <>
      {/* <Textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className="min-h-[300px]"
        /> */}
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <EditorComponent
            content={files.content}
            onFileSave={handleFileSave}
            isSubmitted={isSubmitted}
          />
        </Suspense>
      )}
    </>
  );
}
