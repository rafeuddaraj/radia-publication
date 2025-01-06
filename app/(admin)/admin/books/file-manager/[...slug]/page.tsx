import { FileManager } from "@/components/FileManager";

export default async function page({
  params,
}: {
  params: Promise<{ slug: [] }>;
}) {
  const prms = await params;
  const pathname = prms.slug.join("/");

  return (
    <>
      <FileManager pathname={pathname} />
    </>
  );
}
