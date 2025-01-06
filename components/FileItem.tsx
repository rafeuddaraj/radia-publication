import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Folder, File, Trash2 } from "lucide-react";

type FileItemProps = {
  file: {
    name: string;
    isDirectory: boolean;
    size: number;
    modifiedAt: string;
  };
  isGridView: boolean;
  onDelete: (name: string) => void;
  onNavigate: (name: string) => void;
  onFileClick: (name: string) => void;
};

export function FileItem({
  file,
  isGridView,
  onDelete,
  onNavigate,
  onFileClick,
}: FileItemProps) {
  return (
    <Card className={`${isGridView ? "p-4" : "p-2"}`}>
      <CardContent className="flex items-center justify-between">
        <div
          className={`flex items-center gap-2 cursor-pointer`}
          onClick={() =>
            file.isDirectory ? onNavigate(file.name) : onFileClick(file.name)
          }
        >
          {file.isDirectory ? <Folder /> : <File />}
          <span>{file.name}</span>
        </div>
        {!isGridView && (
          <>
            <span>{file.size} bytes</span>
            <span>{new Date(file.modifiedAt).toLocaleString()}</span>
          </>
        )}
        <Button
          variant="destructive"
          size="icon"
          onClick={() => onDelete(file.name)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
