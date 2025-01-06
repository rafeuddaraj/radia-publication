import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-x-10">
        <div className="border border-green-400 rounded-md hover:scale-105 duration-100">
          <Link
            href="/admin/books/file-manager"
            className="py-10 px-4 block text-center"
          >
            Book Manager
          </Link>
        </div>
        <div className="border border-green-400 rounded-md hover:scale-105 duration-100">
          <Link
            href="/admin/student-manager"
            className="py-10 px-4 block text-center"
          >
            Student Manager
          </Link>
        </div>
        <div className="border border-green-400 rounded-md hover:scale-105 duration-100">
          <Link href="/admin/updates" className="py-10 px-4 block text-center">
            Updates
          </Link>
        </div>
      </div>
    </main>
  );
}
