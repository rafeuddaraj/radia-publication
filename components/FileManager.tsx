"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileList } from "./FileList";
import { CreateFileFolder } from "./CreateFileFolder";
import { Grid2X2, List } from "lucide-react";
import { DeleteConfirmModal } from "./DeleteConfirmModal";
import { useRouter } from "next/navigation";

type FileItem = {
  name: string;
  isDirectory: boolean;
  size: number;
  modifiedAt: string;
};

export function FileManager({ pathname = "" }: { pathname?: string }) {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [currentPath, setCurrentPath] = useState(pathname);
  const [isGridView, setIsGridView] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [fileToDelete, setFileToDelete] = useState<string | null>(null);

  const fetchFiles = useCallback(async () => {
    const response = await fetch(
      `/api/files?path=${encodeURIComponent(currentPath)}`
    );
    const data = await response.json();
    setFiles(data);
  }, [currentPath]);

  useEffect(() => {
    fetchFiles();
  }, [currentPath, fetchFiles]);

  const handleCreateFile = async (name: string, isDirectory: boolean) => {
    await fetch("/api/files", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, isDirectory, path: currentPath }),
    });
    fetchFiles();
    setIsCreateModalOpen(false);
  };

  const handleDelete = async (name: string) => {
    await fetch("/api/files", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, path: currentPath }),
    });
    fetchFiles();
  };

  const handleNavigate = (name: string) => {
    if (pathname !== "/contents")
     {
      setCurrentPath(
        (prevPath) => `${prevPath === "/" ? "" : prevPath}/${name}`
      );
      router.push(`/admin/books/file-manager/${currentPath === "" ? "" : currentPath}/${name}`)
     }
    else {
      router.push(`/admin/books/file-manager/contents/${name}`);
    }
  };

  const handleBack = () => {
    const parts = currentPath.split("/");
    parts.pop();
    const newPath =  parts.join("/") || "/contents";
    setCurrentPath(newPath);
    router.push(`/admin/books/file-manager/${newPath}`)
  };

  const handleDeleteClick = (name: string) => {
    setFileToDelete(name);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (fileToDelete) {
      await handleDelete(fileToDelete);
      setIsDeleteModalOpen(false);
      setFileToDelete(null);
    }
  };

  const handleFileClick = async (name: string) => {
    const filePath = `${currentPath}/${name}`;
    router.push(`/admin/books/file-manager/edit?id=/${filePath}`);
  };

  const router = useRouter();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">File Manager</h1>
        <div className="flex gap-2">
          <Button onClick={() => setIsGridView(!isGridView)}>
            {isGridView ? <List /> : <Grid2X2 />}
          </Button>
          <Button onClick={() => setIsCreateModalOpen(true)}>Create</Button>
        </div>
      </div>
      <Input
        value={currentPath}
        onChange={(e) => setCurrentPath(e.target.value)}
        disabled
        className="mb-4"
      />
     <div className="flex gap-5">
     <Button onClick={handleBack} className="mb-4">
        Back
      </Button>
      <Button onClick={()=>router.back()} className="mb-4">
        Prev
      </Button>
     </div>
      <FileList
        files={files}
        isGridView={isGridView}
        onDelete={handleDeleteClick}
        onNavigate={handleNavigate}
        onFileClick={handleFileClick}
      />
      <CreateFileFolder
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateFile}
      />
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        fileName={fileToDelete || ""}
      />
    </div>
  );
}
