import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const BASE_PATH = process.cwd();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const relativePath = searchParams.get("path") || "/";
  const fullPath = path.join(BASE_PATH, relativePath);

  try {
    const files = await fs.readdir(fullPath, { withFileTypes: true });
    const fileList = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(fullPath, file.name);
        const stats = await fs.stat(filePath);
        return {
          name: file.name,
          isDirectory: file.isDirectory(),
          size: stats.size,
          modifiedAt: stats.mtime.toISOString(),
        };
      })
    );
    return NextResponse.json(fileList);
  } catch (error) {
    console.log({ error });

    return NextResponse.json(
      { error: "Failed to read directory" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const { name, isDirectory, path: relativePath } = await request.json();
  const fullPath = path.join(BASE_PATH, relativePath, name);

  try {
    if (isDirectory) {
      await fs.mkdir(fullPath);
    } else {
      await fs.writeFile(fullPath, "");
    }
    return NextResponse.json({ message: "File/folder created successfully" });
  } catch {
    return NextResponse.json(
      { error: "Failed to create file/folder" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  const { path, content } = await request.json();
  const fullPath = path.join(BASE_PATH, path);

  try {
    await fs.writeFile(fullPath, content);
    return NextResponse.json({ message: "File updated successfully" });
  } catch {
    return NextResponse.json(
      { error: "Failed to update file" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const { name, path: relativePath } = await request.json();
  const fullPath = path.join(BASE_PATH, relativePath, name);

  try {
    // await backupFile(fullPath);
    const stats = await fs.stat(fullPath);
    if (stats.isDirectory()) {
      await fs.rm(fullPath, { recursive: true });
    } else {
      await fs.unlink(fullPath);
    }
    return NextResponse.json({ message: "File/folder deleted successfully" });
  } catch (err) {
    console.log(err);
    
    return NextResponse.json(
      { error: "Failed to delete file/folder" },
      { status: 500 }
    );
  }
}
