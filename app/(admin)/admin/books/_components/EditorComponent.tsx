"use client";
import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function EditorComponent({
  content,
  onFileSave,
  isSubmitted,
}: {
  content: string;
  isSubmitted: boolean;
  onFileSave: (content: string) => void;
}) {
  const [value, setValue] = useState(content);
  useEffect(() => {
    setValue(content);
  }, [content]);

  const router = useRouter();

  return (
    <div className="container">
      <MDEditor
        highlightEnable={false}
        className="my-editor-system min-h-[75vh]"
        value={value}
        onChange={(value?: string) => setValue(value || "")}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
      <div className="my-4 w-full flex justify-center gap-5">
        <Button
          variant="outline"
          className="w-1/2"
          disabled={isSubmitted}
          onClick={() => router.back()}
        >
          Cancel
        </Button>
        <Button
          disabled={isSubmitted}
          className="w-1/2"
          onClick={() => {
            onFileSave(value);
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
