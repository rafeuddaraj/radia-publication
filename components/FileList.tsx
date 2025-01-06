import { FileItem } from "./FileItem";

type FileItemType = {
  name: string;
  isDirectory: boolean;
  size: number;
  modifiedAt: string;
};

type FileListProps = {
  files: FileItemType[];
  isGridView: boolean;
  onDelete: (name: string) => void;
  onNavigate: (name: string) => void;
  onFileClick: (name: string) => void;
};

export function FileList({
  files,
  isGridView,
  onDelete,
  onNavigate,
  onFileClick,
}: FileListProps) {

  return (
    <div className={`grid gap-4 ${isGridView ? "grid-cols-4" : "grid-cols-1"}`}>
      {files.map((file) => (
        <FileItem
          key={file.name}
          file={file}
          isGridView={isGridView}
          onDelete={onDelete}
          onNavigate={onNavigate}
          onFileClick={onFileClick}
        />
      ))}
    </div>
  );
}
