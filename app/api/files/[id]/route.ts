import fs from "fs";
import { NextRequest } from "next/server";
export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;

  const fullPath = process.cwd() + id;

  if (!fs.existsSync(fullPath)) {
    return Response.json({ message: "File not found" });
  }
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  return Response.json({ content: fileContent });
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const fullPath = process.cwd() + id;
  const { content } = await req.json();

  fs.writeFileSync(fullPath, content);
  return Response.json({ message: "File saved" });
};
